import axios from 'axios';
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const joinus = () => {
    const [names, setNames] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false)

    const handleApply = async () => {
        if(names.length === 0 && phone.length === 0){
            alert('All fields are required')
        }else{
            setLoading(true);
            const data = await axios.post('http://127.0.0.1:4000/api/member', {
                names: names,
                phone: phone
            });
            
            setLoading(false);
            alert(data.data.message)
            setNames('');
            setPhone('');
        }
    }

    return (
        <div className={styles.donate}>
            <Navbar />
            <h1 className={styles.headerA}>Join Us</h1>
            <div className={styles.form}>
                <label className={styles.label}>Names</label><br />
                <input 
                    type='text' 
                    className={styles.formControl} 
                    onChange={(e) => setNames(e.target.value)}
                    id='names' 
                    placeholder='Eg: John Doe' 
                    value={names}
                /> <br />
                <label className={styles.label}>Phone or Whatsapp number</label> <br />
                <input 
                    type='text' 
                    className={styles.formControl} 
                    id='phone' 
                    placeholder='Eg: +25078*******'
                    onChange={e => setPhone(e.target.value)} 
                    value={phone}
                /><br />
                <button className={styles.joinBtn} onClick={handleApply}>{loading ? 'Loading...' : 'Apply'}</button> <br />
            </div>
        </div>
    )
}

export default joinus
