import React from 'react';
import './Profile.css';

const Profile = () => {
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
                <h4>Exercise Details:</h4>
            </div>
        </div>
    );
};

export default Profile;