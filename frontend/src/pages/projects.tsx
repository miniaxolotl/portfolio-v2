import React from 'react';

import { FiAlertCircle, FiLoader } from 'react-icons/fi';
import { gql, useQuery } from '@apollo/client';

import { Layout, ProjectCard } from '../components';

import { fetchAPI } from 'lib/network/FetchAPI';

interface Props {
	metaData: any;
}

const Projects = (props: Props) => {
	const { loading, error, data } = useQuery(gql`
	query GetProject {
		projects {
			title
			description
			image {
				url
			}
			links {
				title
				link
			}
			tags {
				title
				color
			}
		}
	}`);
	
	return (
		<Layout metadata={props.metaData}>
			<div className={`container center${loading || error ? ' fh' : null }`}>
				{(() => {
					if(loading) return <FiLoader className='loading-icon' />;
					if(error) return <>
						<FiAlertCircle className='loading-icon' />
						<p>
								error loading...
						</p>
					</>;

					const ProjectList = data?.projects.map((item, index) => {
						return (<ProjectCard key={index} {...item} />);
					});

					return (
						<div>
							{ProjectList}
						</div>
					);
				})()}
			</div>
		</Layout>
	);
};

export const getServerSideProps = async () => {
	const data = await fetchAPI('/project-page');
	
	return {
		props: {
			metaData: data
		}
	};
};

export default Projects;