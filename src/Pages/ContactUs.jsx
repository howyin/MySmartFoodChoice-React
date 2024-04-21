import React, { useState } from 'react';
import './ContactUs.css';
import Header from '../HeaderComponents/Header';
import { db } from '../Firebase/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // Import for redirecting the user

function ContactUs() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [showPopup, setShowPopup] = useState(false); // State for controlling the popup display
    const navigate = useNavigate(); // Hook to navigate to other routes

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            await addDoc(collection(db, 'feedback'), {
                ...form,
                timestamp: new Date() // Add a timestamp
            });
            // Success: Show the popup
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false); // Hide the popup before redirecting
                navigate('/'); // Redirect to the homepage
            }, 5000); // Wait for 5 seconds before redirecting
        } catch (error) {
            console.error("Error adding document: ", error);
            // Here, handle the error case
        }
    };

    return (
        <div className="contact-us-page">
            <Header />
            {showPopup && (
                <div className="popup">
                    Submission successful! You will be redirected to the homepage shortly.
                </div>
            )}
            <div className="contact-us-content">
                <h1>Contact Us</h1>
                <p>If you have any questions or inquiries, feel free to reach out to us.</p>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
