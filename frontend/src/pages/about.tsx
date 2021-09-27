import React from 'react';

import Link from 'next/link';
import { FiAlertCircle, FiGithub, FiLinkedin, FiLoader, FiMail } from 'react-icons/fi';

import { gql, useQuery } from '@apollo/client';

import { Hero, Layout } from '../components';

import { fetchAPI } from 'lib/network/FetchAPI';

interface Props {
	metaData: any;
}

const About = (props: Props) => {
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
					const badgeList = data?.indexPage.hero.tags.map((item, index) => (
						<span key={index} className={`badge badge-${item.color}`}>
							{item.title}
						</span>
					));
					if(loading) return <FiLoader className='loading-icon' />;
					if(error) return <>
						<FiAlertCircle className='loading-icon' />
						<p>
								error loading...
						</p>
					</>;
					return (
						<div>
							<Hero title={data?.indexPage?.hero.title}
								description={data?.indexPage?.hero.description}
								subtitle={data?.indexPage?.hero.subtitle}>
								<div className='icon-container'>
									<Link href={data?.indexPage.hero.links[0].link}>
										<a className='hero-icon'>
											<FiGithub />
											{data?.indexPage.hero.links[0].title}
										</a>
									</Link>
									<Link href={data?.indexPage.hero.links[1].link}>
										<a className='hero-icon'>
											<FiLinkedin />
											{data?.indexPage.hero.links[1].title}
										</a>
									</Link>
									<Link href={data?.indexPage.hero.links[2].link}>
										<a className='hero-icon'>
											<FiMail />
											{data?.indexPage.hero.links[2].title}
										</a>
									</Link>
								</div>
							</Hero>
							<div>
								{badgeList}
							</div>
						</div>
					);
				})()}
			</div>
		</Layout>
	);
};

export const getServerSideProps = async () => {
	const data = await fetchAPI('/about-page');
	
	return {
		props: {
			metaData: data
		}
	};
};

export default About;