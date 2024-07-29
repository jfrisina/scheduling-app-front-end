import './LoginForm.css'

const LoginForm = ({ setNewUser }) => {
	const handleClick = () => {
	  setNewUser(true);
	};
  
	return (
	  <div className='forms'>
		<form autoComplete='off'>
		  <label htmlFor='email'>Email </label>
		  <input type='email' id='email' name='email' placeholder='Email' />
		  <label htmlFor='password'>Password </label>
		  <input
			type='password'
			id='password'
			name='password'
			placeholder='Password'
			minLength='6'
		  />
		  <button type='submit' onClick={handleClick}>
			Log In
		  </button>
		</form>
		<div class="forgot-pwd">
			<a href="#" class="forgot-pwd-button">Forgot Password</a>	
		</div>
		
	  </div>
	);
  };
  
  export default LoginForm;