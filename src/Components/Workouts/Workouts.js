import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Workouts = () => {
    return (
        <div>
            <h2><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Fitness Zone</h2>
        </div>
    );
};

export default Workouts;