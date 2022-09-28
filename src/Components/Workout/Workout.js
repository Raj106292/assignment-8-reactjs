import React from 'react';
import './Workout.css'

const Workout = (props) => {
    const {id, image, name, time, set} = props.workout
    return (
        <div className='all-workout'>
            <img src={image} alt="" />
            <div>
                <h2><i>{name}</i></h2>
                <p>Time: {time}minutes</p>
                <p>Sets: {set}sets</p>
            </div>
            <div>
                <button className='update-btn'>Add To List</button>
            </div>
        </div>
    );
};

export default Workout;