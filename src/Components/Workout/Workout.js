import React from 'react';
import './Workout.css'

const Workout = (props) => {
    const {id, image, name, time, set} = props.workout
    return (
        <div className='all-workout'>
            <img src={image} alt="" />
        </div>
    );
};

export default Workout;