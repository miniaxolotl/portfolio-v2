import React from 'react';

interface Props {
	children?: React.ReactNode;
}

const Footer = (props: Props) => {
	return (
		<small className='flex footer' style={{ justifyContent: 'center' }}>
			{props.children}
		</small>
	);
};

export default Footer;