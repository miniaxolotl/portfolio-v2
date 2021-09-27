import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	ssrMode: true,
	uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL,
	cache: new InMemoryCache()
});

export const query = async (query: any, variables?: any) => {
	return await client.query({ query, variables });
};

export const GraphQL = {
	client,
	query
};