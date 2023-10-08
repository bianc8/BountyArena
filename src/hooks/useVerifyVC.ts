
import * as didJWT from 'did-jwt';
import { Resolver, DIDResolutionResult, DIDResolver } from 'did-resolver';

const getUniversalResolver = async (
    url: string = 'https://dev.uniresolver.io/1.0/identifiers/',
): Promise<DIDResolver> => {
    if (!url) {
        throw Error('[did-resolver] Universal: url required')
    }

    const resolve = async (didUrl: string) => {
        try {
            const result = await fetch(url + didUrl)
            const ddo = await result.json()
            return ddo
        } catch (e) {
            console.log("[DEBUG|Universal Resolver Error]", e);
            throw Error(`[did-resolver] Universal: ${(e as any).message}`)
        }
    }

    return resolve
}

const useVerifyVC = async (vc: string) => {

    try {
        const universalResolver = await getUniversalResolver();
        const resolver = new Resolver({
            key: universalResolver
        })
        const result = await didJWT.verifyJWT(vc, { 
            resolver
        });
        // check that the issuer is from BountyArena
        if (result.payload.iss != process.env.NEXT_PUBLIC_DID_KEY) {
            throw new Error('Issuer is not BountyArena');
        }
        return result;
    } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
        return err.message;
    }
}

export default useVerifyVC;