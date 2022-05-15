import React from 'react';
import axios from 'axios';
import { NavLink, Redirect } from 'react-router-dom';
import './tourists.css'
class visitor extends React.Component {
    
      
	state = {
		details : [],
	}

	componentDidMount() {

		let data ;

		axios.get('http://127.0.0.1:8000/djangoapp/tourist/')
		.then(res => {
			data = res.data;
			this.setState({
				details : data	
			});
		})
		.catch(err => {})
	}

render() {
	return(
	<div>
		 <div class="header">
 
 <div class="header-right">

	 <NavLink to="/monuments">monuments</NavLink>
	 <NavLink to="/dances">dances</NavLink>
	 <NavLink to="/emperor">emperor</NavLink>
	 <NavLink to="/food">food</NavLink>
	 <NavLink to="/tourist">tourist</NavLink>
	 <NavLink to="/packages">tourist packages</NavLink>
	 <NavLink to="/logout">logout</NavLink>
	 
   
  </div>
  </div>
			{this.state.details.map((detail, id) => (
			<div key={id}>
			<div >
				<div >
						<h1>{detail.detail} </h1>
						<footer >
						<table>
							<tr>
						<th><b>Name: </b>{detail.name}</th>
                       <th><b>Email: </b>{detail.email}</th> 
						<th><b>Mobile: </b>{detail.mobile}<br></br></th>
						</tr>
						</table>
						</footer>
				</div>
			</div>
			
			</div>
			)
		)}
	</div>
	);
}
}

export default visitor;
