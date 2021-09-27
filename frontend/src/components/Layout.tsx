import React from 'react';

import Link from 'next/link';

import { FiHeart } from 'react-icons/fi';

import { Footer, Navigation, SEOHead } from '../components';

interface Props {
	children: React.ReactNode;
	metadata: any;
}

const Layout = (props: Props) => {
	return (
		<div>
			<SEOHead metadata={props.metadata} />
			<div className='position-fixed' style={{ width: '100%', top: 0, justifyContent: 'center' }}>
				<Navigation>
					<Link href='/'>
						<a className='nav-item'>
							Home
						</a>
					</Link>
					<Link href='/about'>
						<a className='nav-item'>
							About
						</a>
					</Link>
					<Link href='/projects'>
						<a className='nav-item'>
							Projects
						</a>
					</Link>
				</Navigation>
			</div>
			<div className='body'>
				{props.children}
			</div>
			<div className='position-fixed' style={{ width: '100%', bottom: 0, justifyContent: 'center' }}>
				<Footer>
					with <FiHeart /> from elias
				</Footer>
			</div>
		</div>
	);
};

export default Layout;