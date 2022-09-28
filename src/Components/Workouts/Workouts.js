import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';
import './Workouts.css';

const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('items.json')
        .then(resp => resp.json())
        .then(data => setWorkouts(data))
        .catch(error => console.log(error.message))
    },[])

    return (
        <div className='container'>
            <div>
                <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Fitness Zone</h1>
                <div className='workouts-container'>
                    {
                        workouts.map(workout => <Workout key={workout.id}></Workout>)
                    }
                </div>
            </div>
            <div className='profile-container'>Profile</div>
        </div>
    );
};

export default Workouts;