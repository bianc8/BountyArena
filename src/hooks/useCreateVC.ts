import { useEffect, useState } from "react";
import { IReview } from "../types"
import * as didJWT from 'did-jwt';
import * as u8a from 'uint8arrays';

const getSigner = () => {
    const signer = didJWT.EdDSASigner(u8a.fromString(process.env.NEXT_PUBLIC_DID_KEY_PRIVATE_KEY as string, 'hex'))
    return {
        signer,
        didurl: process.env.NEXT_PUBLIC_DID_KEY as string
    }
}


const useCreateVC = async (review: IReview, address: string) => {
    const signer = getSigner();

    try {
        if (signer) {
            let credential = {
                "@context": [
                    "https://www.w3.org/2018/credentials/v1",
                ],
                type: [
                    'VerifiableCredential',
                    "BountyArenaReview"
                ],
                credentialSubject: {
                    id: "did:ethr:" + address,
                    description: review.description?.content,
                    rating: review.rating,
                },
                issuer: {
                    id: signer.didurl
                },
                issuanceDate: new Date().toISOString(),
            }

            const jwt = await didJWT.createJWT(
                {
                    vc: credential,
                    iss: signer.didurl,
                    sub: "did:ethr:" + address,
                },
                { issuer: signer.didurl, signer: signer.signer },
                { alg: 'EdDSA', typ: "JWT" }
            )

            return jwt;
        }
    } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
        return err.message;
    }
}

export default useCreateVC;