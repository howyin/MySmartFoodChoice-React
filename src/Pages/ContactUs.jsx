import React from 'react';
import './ContactUs.css';

function ContactUs() {
    return (
        <div className="contact-us-container">
            <h1 className="contact-us-title">Contact Us</h1>
            <p className="contact-us-description">
                We would love to hear from you! Please feel free to contact us with any questions, suggestions, or feedback.
            </p>
            <form className="contact-form">
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

export default ContactUs;
