import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import React from 'react';

import { GraphQL } from '../lib/network/GraphQL';

import 'stagcss/dist/stag-dark.min.css';
import 'stagcss/dist/stag-ext.min.css';

import '../css/fonts.css';
import '../css/style.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ApolloProvider client={GraphQL.client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
};

export default MyApp;