import {
  MinimalUnsignedCredential,
  enableMasca,
  isError
} from '@blockchain-lab-um/masca-connector';
import { useContext, useEffect, useState } from 'react';
import TalentLayerContext from '../context/talentLayer';

const useMasca = () => {
  const { user, account } = useContext(TalentLayerContext);
  const [mascaApi, setMascaApi] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const mascaApi = await getMascaApi(account?.address || null);
      setMascaApi(mascaApi);
    };
    fetchData();
  }, [])

  async function getMascaApi(address: string | null) {
    console.log('getMascaApi')
    // Enable Masca
    if (address) {
      const enableResult = await enableMasca(address);

      // Check if there was an error and handle it accordingly
      if (isError(enableResult)) {
        // Error message is available under error
        console.error(enableResult.error)
      } else if (enableResult.success) {
        // Now get the Masca API object
        return enableResult.data.getMascaApi();
      }
    }
    return null;
  }

  async function getDID() {
    console.log('getDID')

    if (!mascaApi) {
      return null;
    }

    return await mascaApi.getDID();
  }

  async function createVC(address: string | null, payload: MinimalUnsignedCredential) {
    console.log('createVC')

    if (!mascaApi || !address) {
      return null;
    }

    return await mascaApi.createCredential({
      minimalUnsignedCredential: payload,
      proofFormat: 'jwt',
      options: {
        save: true,
        store: ['snap'],
      },
    });
  }

  return { mascaApi, createVC, getDID }
}

export default useMasca;