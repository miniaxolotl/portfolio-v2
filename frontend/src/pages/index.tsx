import React from 'react';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiLoader, FiMail } from 'react-icons/fi';
import { gql, useQuery } from '@apollo/client';

import { Hero, Layout } from '../components';

import { fetchAPI } from 'lib/network/FetchAPI';

interface Props {
	metaData: any;
}

const Index = (props: Props) => {
	const { loading, error, data } = useQuery(gql`
	query GetIndex {
		indexPage {
			hero {
				title
				subtitle
				description
				image {
					url
				}
				tags {
					title
					color
				}
				links {
					title
					link
				}
			}
		}
	}`);
	
	return (
		<Layout metadata={props.metaData}>
			<div className='container center fh'>
				{(() => {
					if(loading) return <FiLoader className='loading-icon' />;
					if(error) return <p>error...</p>;
					return (
						<>
							<Hero image={data?.indexPage?.hero.image}
								title={data?.indexPage?.hero.title}
								subtitle={data?.indexPage?.hero.subtitle}/>
							<div>
								<div>
									<Link href={data?.indexPage.hero.links[0].link}>
										<a className='hero-icon'>
											<FiGithub />
											{data?.indexPage.hero.links[0].title}
										</a>
									</Link>
								</div>
								<div>
									<Link href={data?.indexPage.hero.links[1].link}>
										<a className='hero-icon'>
											<FiLinkedin />
											{data?.indexPage.hero.links[1].title}
										</a>
									</Link>
								</div>
								<div>
									<Link href={data?.indexPage.hero.links[2].link}>
										<a className='hero-icon'>
											<FiMail />
											{data?.indexPage.hero.links[2].title}
										</a>
									</Link>
								</div>
							</div>
						</>
					);
				})()}
			</div>
		</Layout>
	);
};

export const getServerSideProps = async () => {
	const data = await fetchAPI('/global');
	
	return {
		props: {
			metaData: data
		}
	};
};

export default Index;