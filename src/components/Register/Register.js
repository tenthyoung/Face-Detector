import React from 'react';

const Register = ({ onRouteChange }) => {
	const style ={
		article: "bg-dark-gray mv4 w-100 w-50-m w-25-l mw6 br4 shadow-3 center",
		main: "pa4 near-white-80",
		legend: "roboto near-white f2 fw2 ph0 mh0",

	}
	return (
		<article className={style.article}>
			<main className={style.main}>
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				<legend className={style.legend}>Create Account</legend>
				  <div className="mt3">
			        <label className="db fw6 near-white lh-copy f6" htmlFor="name">Name</label>
			        <input className="pa2 input-reset ba bg-light-gray hover-bg-black hover-near-white w-100" type="text" name="name"  id="name" />
			      </div>
			      <div className="mt3">
			        <label className="db fw6 near-white lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-light-gray hover-bg-black hover-near-white w-100" type="email" name="email-address"  id="email-address" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 near-white lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-light-gray hover-bg-black hover-near-white w-100" type="password" name="password"  id="password" />
			      </div>
			    </fieldset>
			    <div className="">
			      <input
			      	onClick={() => onRouteChange('home')}
			      	className="b ph3 pv2 near-white input-reset ba b--near-white bg-transparent dim pointer f6 dib" 
			      	type="submit" 
			      	value="Create Your Account" 
			      />
			    </div>
			</main>
		</article>
	);
}

export default Register;