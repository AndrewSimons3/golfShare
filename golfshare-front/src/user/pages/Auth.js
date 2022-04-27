import React from 'react';
import './Auth.css';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';

const Auth = () => {

    const [formState, inputHandler] = useForm(
			{
				email: {
					value: '',
					isValid: false,
				},
				password: {
					value: '',
					isValid: false,
				},
			},
			false
    );

    const authSubmitHandler = (event) => {
      event.preventDefault();
      console.log(formState.inputs);
    }
  
  
  return (
		<Card className="authentication">
      <h2>Login Required</h2>
      <hr />
			<form className='place-form' onSubmit={authSubmitHandler}>
				<Input
					id='email'
					element='input'
					type='email'
					label='E-Mail'
					validators={[VALIDATOR_EMAIL()]}
          errorText='Please enter a valid email address.'
          onInput={inputHandler}
					
				/>
				<Input
					id='password'
					element='input'
					type='password'
					label='Password'
					validators={[VALIDATOR_MINLENGTH(5)]}
					errorText='Please enter a valid password.  Must be at least 5 characters.'
					onInput={inputHandler}
				/>
        <Button type='submit' disabled={!formState.isValid}>LOGIN</Button>
			</form>
		</Card>
	);
}

export default Auth;