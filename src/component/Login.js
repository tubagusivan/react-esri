import React, { useEffect, useState } from 'react';
import fire from '../fire';

import '../App.css'
const Dashboard = () => {

	const [user, setUser] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [hasAccount, setHasAccount] = useState(false);

	const clearInputs = () => {
		setEmail('');
		setPassword('');
	};

	const clearErrors = () => {
		setEmailError('');
		setPasswordError('');
	};

	const handleLogin = () => {
		clearErrors();
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch(err => {
				switch (err.code) {
					case "auth/invalid-email":
					case "auth/user-disabled":
					case "auth/user-not-found":
						setEmailError(err.message);
						break;
					case "auth/wrong-password":
						setPasswordError(err.message);
						break;
					default:
				}
			})
	};

	const handleSignup = () => {
		clearErrors();
		fire
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch(err => {
				switch (err.code) {
					case "auth/email-already-in-use":
					case "auth/invalid-email":
						setEmailError(err.message);
						break;
					case "auth/weak-password":
						setPasswordError(err.message);
						break;
					default:
				}
			})
	};

	const authListener = () => {
		fire.auth().onAuthStateChanged(user => {
			if (user) {
				clearInputs();
				setUser(user);
			} else {
				setUser('');
			}
		})
	};

	useEffect(() => {
		authListener();
	})

	useEffect(() => {
		if (user){
			window.location.href = './Hero'
		}
	},[user])

	return (
		<div className="App">
				<React.Fragment>
					<section className = "login">
						<div className = "loginContainer">
							<label>E-mail</label>
							<input 
								type = "email"
								autoFocus
								required
								name="email"
								value = {email}
								onChange = {(event) => setEmail(event.target.value)}
							/>
							<p className = "errorMsg">{emailError}</p>
							<label>Password</label>
							<input 
								type = "password"
								name = "password"
								required
								value = {password}
								onChange = {(event) => setPassword(event.target.value)}
							/>
							<p className = "errorMsg">{passwordError}</p>
							<div className = "btnContainer">
								{hasAccount ? (
									<>
									<button onClick = {handleSignup}>Register</button>
									<p>
										Already have an account? 
										<span onClick = {() => setHasAccount(!hasAccount)}>Log in</span>
									</p>
									</>
								) : (
									<>
									<button onClick = {handleLogin} name="submit">Log in</button>
									<p>
										Don't have an account yet?  
										<span onClick = {() => setHasAccount(!hasAccount)}>Sign up here</span>
									</p>
									</>
								)}	
							</div>
						</div>
					</section>
				</React.Fragment>
		</div>
	);
}

export default Dashboard;