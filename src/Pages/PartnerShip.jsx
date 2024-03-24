import React from 'react';
import './PartnerShip.css';

function PartnerShip() {
    return (
        <div className="partnership-container">
            <h1 className="partnership-title">Partnership</h1>
            <p className="partnership-description">
                We are always looking for new partners to collaborate with. 
                If you are interested in partnering with us, 
                please fill out the form below and we will get back to you as soon as possible.
            </p>
            <form className="partnership-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default PartnerShip;
