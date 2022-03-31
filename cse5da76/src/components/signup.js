import React from 'react';
import './signup.css'

const signup = () => {
    return(
<div>
    <body>
    <form>
         <div class="formContainer">
         <h1>Sign Up</h1>
         <hr></hr>
         <label for="name"><b>Name</b></label>
         <input type="text" placeholder="Enter Name" name="name" required></input>
         <label for="email"><b>Email</b></label>
         <input type="text" placeholder="Enter Email" name="email" required></input>
         <label for="country"><b>Email</b></label>
         <input type="text" placeholder="Enter country" name="country" required></input>
         <label for="mobile"><b>Email</b></label>
         <input type="text" placeholder="Enter mobile" name="mobile" required></input>
         <label for="password"><b>Password</b></label>
         <input type="password" placeholder="Enter Password" name="password" required></input>
 	     <label for="repeatPassword"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="repeatPassword"required></input>
          <button type="button" class="cancel">Cancel</button>
	   <button type="submit" class="signup">Sign Up</button>
    
		</div>
    </form>
    </body>
</div>

    );
}
export default signup;