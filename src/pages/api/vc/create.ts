import type { NextApiRequest, NextApiResponse } from 'next';
import { IReview } from '../../../types';
import * as didJWT from 'did-jwt';
import * as u8a from 'uint8arrays';

export default async function postCreateVC(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  
  const { review, address }: { review: IReview, address: string } = req.body;

  if (!review || !address) {
    return res.status(400).json('Missing review or address')
  }

  console.log(review, address)
  
  const signer = {
    signer: didJWT.EdDSASigner(
      u8a.fromString(process.env.NEXT_PRIVATE_DID_KEY_PRIVATE_KEY as string, 'hex'),
    ),
    didurl: process.env.NEXT_PUBLIC_DID_KEY as string,
  };

  try {
    if (signer) {
      let credential = {
        '@context': ['https://www.w3.org/2018/credentials/v1'],
        type: ['VerifiableCredential', 'BountyArenaReview'],
        credentialSubject: {
          id: 'did:ethr:' + address,
          description: review.description?.content,
          rating: review.rating,
        },
        issuer: {
          id: signer.didurl,
        },
        issuanceDate: new Date().toISOString(),
      };

      const jwt = await didJWT.createJWT(
        {
          vc: credential,
          iss: signer.didurl,
          sub: 'did:ethr:' + address,
        },
        { issuer: signer.didurl, signer: signer.signer },
        { alg: 'EdDSA', typ: 'JWT' },
      );
      return res.status(200).json({ jwt });
    }
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e);
    return res.status(400).json(e.message);
  }
};
