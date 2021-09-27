import React from 'react';

import Head from 'next/head';

import config from '../../config/config';

interface Props {
	children?: React.ReactNode;
	metadata: any;
}

const SEOHead = (props: Props) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>{props.metadata.meta.title}</title>
				<link rel="shortcut icon" type="image/png" href={config.api+props.metadata.favicon.url}/>
				<meta name="og:title" content={props.metadata.meta.title} key="title" />
				<meta name="og:description" content={props.metadata.meta.description} key="description" />
			</Head>
			{props.children}
		</>
	);
};

export default SEOHead;