import React from 'react';

import Image from 'next/image';

import config from '../../config/config';

interface Props {
	children?: React.ReactNode;
	image?: any;
	title?: string;
	subtitle?: string;
	description?: string;
}

const Hero = (props: Props) => {
	const imageIndex = Math.floor(Math.random() * 3);

	return (
		<div className='hero'>
			{(() => {
				if(props.image) {
					return (
						<Image layout='responsive' width='1' height='1'  className='shadow'
							src={config.apiLocal+props.image[imageIndex].url} alt='' />
					);
				}
			})()}
			{(() => {
				if(props.title) {
					return (
						<h1 className='title'>
							{props.title}
						</h1>
					);
				}
			})()}
			{props.children}
			<div>
				{(() => {
					if(props.description) {
						return props.description?.split('\n').map((item, index) => (
							<p key={index}>
								{item}
							</p>
						));
					}
				})()}
			</div>
		</div>
	);
};

export default Hero;