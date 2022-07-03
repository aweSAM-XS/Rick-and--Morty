import React from 'react'

const Character = ({ name, image,origin }) => {
  return (
	<div className='col-3'>
		<div className='card'>
			<img src={image} alt={name} width='300' className='card-img-top'/>
			<div className='card-body'>
				<h3 className='card-title'>{name}</h3>
				<p>{`Origin: ${origin && origin.name}`}</p>
			</div>
		</div>
	</div>
  )
}

// Character.propTypes ={
// 	name: PropTypes.string,
// 	image: PropTypes.string,
// 	origin: Proptypes.string,
// 	// origin.name: Proptypes.string,
// }

export default Character