import React from 'react';
import './ImageLinkForm.css'



const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div> 
			<p className='near-white f3'>
				{'Submit an image address below!'}
			</p>
			<div className='center'>
				<div className="form bg-dark-gray center pa4 br3 shadow-5">
					<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
					<button 
					className='w-30 dim f4 link ph3 pv2 dib white bg-dark-gray'
					onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;