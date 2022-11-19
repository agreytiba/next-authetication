import { useState } from 'react';
import { useRouter } from "next/router"
import axios from "axios";
import styles from '../styles/Login.module.css';
const login = () => {
	const [ username, setUsername ] = useState('');
    const [password, setPassword] = useState('');
    const  router = useRouter()

	const handleSubmit = async (e) => {
		e.preventDefault();

		const credentials = { username, password };

		const user = await axios.post('/api/auth/login', credentials);
   if (user.status=== 200) {
     router.push("/dashboard")
   }
	
	};
	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
				<div>
					<label htmlFor="username"> Username </label>
					<input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} />
				</div>
				<div>
					<label htmlFor="password"> Password </label>
					<input type="text" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
				</div>

				<button> Log in </button>
			</form>
		</div>
	);
};

export default login;
