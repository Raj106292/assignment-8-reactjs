import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import Workout from '../Workout/Workout';
import './Workouts.css';

const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(resp => resp.json())
            .then(data => setWorkouts(data))
            .catch(error => console.log(error.message))
    }, [])

    const handleAddToList = (id) => {
        const selected = workouts.find(workout => workout.id === id);
        setSelected(selected);
    }

    const [selected, setSelected] = useState([]);

    return (
        <div className='container'>
            <div>
                <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Fitness Zone</h1>
                <div className='workouts-container'>
                    {
                        workouts.map(workout => <Workout
                            key={workout.id}
                            workout={workout}
                            handleAddToList={handleAddToList}></Workout>)
                    }
                </div>
                <div className='question-answer'>
                    <h2><u>Question-Answer:</u></h2>
                    <ol>
                        <li className='answer'>
                            <p><strong>How does React work?</strong></p>
                            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
                        </li>
                        <li className='answer'>
                            <p><strong>What is the differences between Props and State</strong></p>
                            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
                        </li>
                        <li className='answer'>
                            <p><strong>What does useEffect do without load API through fetch?</strong></p>
                            <p>Accepts a function that contains imperative, possibly effectful code.

                                Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component. Doing so will lead to confusing bugs and inconsistencies in the UI. The clean-up function runs before the component is removed from the UI to prevent memory leaks. Additionally, if a component renders multiple times, the previous effect is cleaned up before executing the next effect. In our example, this means a new subscription is created on every update. To avoid firing an effect on every update, refer to the next section.

                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className='profile-container'>
                <Profile selected={selected}></Profile>
            </div>
        </div>
    );
};

export default Workouts;