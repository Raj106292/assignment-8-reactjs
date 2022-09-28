import React from 'react';
import './Profile.css';

const Profile = (props) => {
    const time = props.selected.time;
    
    const excTimestr = document.getElementById('exc-time');
    let excTime = 0;
    if(excTimestr){
        excTime = (parseFloat(excTimestr.innerText));
    }
    let times = excTime;
    if(time){
        times = times + parseFloat(time)
    }
    else{
        times = 0;
    }

    const firstBreak = () => {
        const times = document.getElementById('first-time');
        const breakTimes = document.getElementById('set-break')
        const time = times.innerText;
        breakTimes.innerText = time;
        localStorage.setItem('break-time', JSON.stringify(time));
    }
    const secondBreak = () => {
        const times = document.getElementById('second-time');
        const breakTimes = document.getElementById('set-break')
        const time = times.innerText;
        breakTimes.innerText = time;
        localStorage.setItem('break-time', JSON.stringify(time));
    }
    const thirdBreak = () => {
        const times = document.getElementById('third-time');
        const breakTimes = document.getElementById('set-break')
        const time = times.innerText;
        breakTimes.innerText = time;
        localStorage.setItem('break-time', JSON.stringify(time));
    }
    const fourthBreak = () => {
        const times = document.getElementById('fourth-time');
        const breakTimes = document.getElementById('set-break')
        const time = times.innerText;
        breakTimes.innerText = time;
        localStorage.setItem('break-time', JSON.stringify(time));
    }
    const fifthBreak = () => {
        const times = document.getElementById('fifth-time');
        const breakTimes = document.getElementById('set-break')
        const time = times.innerText;
        breakTimes.innerText = time;
        localStorage.setItem('break-time', JSON.stringify(time));
    }

    const getStoredTime = JSON.parse(localStorage.getItem('break-time'));

    return (
        <div className='profiles'>
            <h2>Profile</h2>
            <div>
                <h3>Raj Das</h3>
                <p>Chittagong, Bangladesh</p>
            </div>
            <div className='about-profile'>
                <div>
                    <p><small>weight</small></p>
                    <p><strong>75</strong><small>kg</small></p>
                </div>
                <div>
                    <p><small>height</small></p>
                    <p><strong>5.11</strong></p>
                </div>
                <div>
                    <p><small>age</small></p>
                    <p><strong>25</strong><small>yrs</small></p>
                </div>
            </div>
            <div>
                <h4>Add a break</h4>
                <div className='breaktime'>
                    <button onClick={firstBreak}><strong id='first-time'>10</strong>s</button>
                    <button onClick={secondBreak}><strong id='second-time'>20</strong>s</button>
                    <button onClick={thirdBreak}><strong id='third-time'>30</strong>s</button>
                    <button onClick={fourthBreak}><strong id='fourth-time'>40</strong>s</button>
                    <button onClick={fifthBreak}><strong id='fifth-time'>50</strong>s</button>
                </div>
            </div>
            <div>
                <h4>Exercise Details:</h4>
                <div className='time'>
                    <p>Exercise time: <span id='exc-time'>{times}</span>minutes</p>
                </div>
                <div className='time'>
                    <p>Break time: <span id='set-break'>{(getStoredTime) ? getStoredTime : 0}</span>seconds</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;