import { processRequest } from '../utils/graphql';

export const getReviewsByService = (chainId: number, serviceId: string): Promise<any> => {
  const query = `
    {
      reviews(where: { service: "${serviceId}" }, orderBy: id, orderDirection: desc) {
        id
        rating
        createdAt
        service {
          id
          status
          buyer {
            handle
          }
        }
        to {
          id
          handle
        }
        description {
          id
          content
        }
      }
    }
    `;
  return processRequest(chainId, query);
};

export const getReviewsByAddress = (chainId: number, address: string): Promise<any> => {
  const query = `
    {
      reviews(orderBy: id, orderDirection: desc, where: {to_: {address: "${address}"}}) {
        id
        rating
        createdAt
        service {
          id
          status
          buyer {
            handle
          }
        }
        to {
          id
          handle
        }
        description {
          id
          content
        }
      }
    }
    `;
  console.log(query);
  return processRequest(chainId, query);
};
