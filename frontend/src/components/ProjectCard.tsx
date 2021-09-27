import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { FiExternalLink, FiGithub } from 'react-icons/fi';

import config from '../../config/config';

interface ProjectCardLink {
	title: string;
	link: string;
};

interface ProjectCardTag {
	title: string;
	color: string;
};

interface Props {
	title: string;
	description: string;
	image?: any;
	links?: ProjectCardLink[];
	tags?: ProjectCardTag[];
}

const ProjectCard = (props: Props) => {
	return (
		<div className='project-card'>
			<div>
				{(() => {
					if(props.image) {
						return (
							<div className='project-image'>
								<Image layout='intrinsic' width='100%' height='100%'
									src={config.apiLocal+props.image.url} alt='' />
							</div>
						);
					}
				})()}
				<div className='project-description'>
					<div className='project-title'>
						{props.title}
					</div>
					{props.description}
				</div>
			</div>
			<div className='project-links'>
				{(() => {
					if(props.links) {
						const linkList = props?.links?.map((item, index) => {
							return (
								<Link key={index} href={item.link}>
									<a>
										{item.title.match(/^website/) ? <FiExternalLink /> : null}
										{item.title.match(/^github/) ? <FiGithub /> : null}
										{item.title}
									</a>
								</Link>
							);
						});
						return linkList;
					}
				})()}
			</div>
			<div>
				{(() => {
					if(props.tags) {
						const tagList = props?.tags?.map((item, index) => (
							<span key={index} className='badge'>
								{item.title}
							</span>
						));
						return tagList;
					}
				})()}
			</div>
		</div>
	);
};

export default ProjectCard;