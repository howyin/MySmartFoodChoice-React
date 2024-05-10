import React from 'react';
import avatar from '../assets/avatar.svg'; // Assuming the avatar SVG file is in the assets directory

const Avatar = () => {
    return (
        <div>
            <img src={avatar} className='avatar-image' alt="Avatar" />
        </div>
    );
};

export default Avatar;