import React from 'react'
import { useState } from 'react/cjs/react.development';
import styles from '../../styles/Home.module.css';
import axios from 'axios';

const login = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if(phone.length === 0 && password.length === 0){
            alert('All fields are required')
        }else{
            setLoading(true);
            const data = await axios.post('http://127.0.0.1:4000/api/login', {
                phone: phone,
                password: password
            });
            
            setLoading(false);
            alert(data.data.message)
            setPassword('');
            setPhone('');
        }
    }

    return (
        <div className={styles.donate}>
            <h1 className={styles.headerA}>Admin Login</h1>
            <div className={styles.form}>
                <label className={styles.label}>Names</label><br />
                <input 
                    type='text' 
                    className={styles.formControl}
                    id='phone' 
                    placeholder='Eg: 0784218000' 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                /> <br />
                <label className={styles.label}>Telephone</label> <br />
                <input 
                    type='password' 
                    className={styles.formControl} 
                    id='password' 
                    placeholder='***********'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br />
                <button className={styles.joinBtn} onClick={handleLogin}>{loading ? 'Loading...' : 'Login'}</button> <br />
            </div>
        </div>
    )
}

export default login
