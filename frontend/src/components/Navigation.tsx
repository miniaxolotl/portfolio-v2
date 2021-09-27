import React from 'react';

interface Props {
	children?: React.ReactNode;
}

const Navigation = (props: Props) => {
	return (
		<div className='nav-container nav-link' style={{ justifyContent: 'center' }}>
			{props.children}
		</div>
	);
};

export default Navigation;