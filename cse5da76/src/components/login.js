import React from 'react';
import './signup.css'

const login = () => {
    return(
<div>
    <body>
    <form>
         <div class="formContainer">
         <h1>Login</h1>
         <hr></hr>
         <label for="email"><b>Email</b></label>
         <input type="text" placeholder="Enter Email" name="email" required></input>
         <label for="password"><b>Password</b></label>
         <input type="password" placeholder="Enter Password" name="password" required></input>
         <br></br>
         <a href="/signup">Dont have an account?</a>
          <button type="button" class="cancel">Cancel</button>
          
	   <button type="submit"class="signup">Log in</button>
    
		</div>
    </form>
    </body>
</div>
    );
}
export default login;