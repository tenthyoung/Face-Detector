import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signout')} className='roboto f5 link dim white pa3 pointer'>Sign Out</p>
			</nav>
		);
	} else {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signin')} className='roboto f5 link dim white pa3 pointer'>Sign In</p>
				<p onClick={() => onRouteChange('register')} className='roboto f5 link dim white pa3 pointer'>Create Account</p>
			</nav>
		);
	}
}

export default Navigation;
