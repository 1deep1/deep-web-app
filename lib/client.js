// import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';



// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// });

// export default client;

// const authLink = (_, { headers }) => {
//   return {
//     headers: {
//       ...headers,
//       authorization: 'Bearer 06a06bd00bd65db6cc0c90ee1fa5baaf1bca3a83bd8245c510813d37a85b9a6715d5eda1b99ae78bf8e96aadf40e2621329540a1c3486c3348670826ff462238589092193305b50ee88f79829c8406681918d6ad80bfd59f37cb99c13a49052231ee7603a121a20a36d60967653fa08b750c244575649fd48643f28aa3e26139'
//     }
//   };
// };

// const authLink = setContext((_, { headers }) => {
//   return {
//     headers: {
//       ...headers,
//       authorization: `Bearer 06a06bd00bd65db6cc0c90ee1fa5baaf1bca3a83bd8245c510813d37a85b9a6715d5eda1b99ae78bf8e96aadf40e2621329540a1c3486c3348670826ff462238589092193305b50ee88f79829c8406681918d6ad80bfd59f37cb99c13a49052231ee7603a121a20a36d60967653fa08b750c244575649fd48643f28aa3e26139`
//     }
//   };
// });

// export const { client, getClient } = registerApolloClient(() => {
//   return new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache(),
//   });
// });


// export default client;
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const GRAPHQL_ENDPOINT =
  process.env.GRAPHQL_ENDPOINT || "https://cms.1deep1.com/graphql";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: GRAPHQL_ENDPOINT,
    }),
  });
});