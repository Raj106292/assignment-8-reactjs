import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './Workouts.css';

const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);
    
    useEffect(() => {
        fetch('items.json')
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(error => console.log(error.message))
    },[])

    return (
        <div className='container'>
            <div>
                <h2><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Fitness Zone</h2>
                <div className='workouts-container'>Workouts</div>
            </div>
            <div className='profile-container'>Profile</div>
        </div>
    );
};

export default Workouts;