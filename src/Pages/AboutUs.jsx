import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';
import Header from '../HeaderComponents/Header';
import image from '../assets/myfoodchoicewhite.png';

function AboutUs() {
    return (
        <div className="about-us-page">
            <Header />
            <section className="py-3 py-md-5">
                <div className="container">
                    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                        <div className="col-12 col-lg-6 col-xl-5">
                            <img className="img-fluid1" loading="lazy" src={image} alt="About 1" />
                        </div>
                        <div className="col-12 col-lg-6 col-xl-7">
                            <div className="row-justify-content-xl-center">
                                <div className="col-12col-xl-11">
                                    <h2 className="mb-3">Who Are We?</h2>
                                    <p className="lead fs-4-text-secondary-mb-3">At MyFoodChoice, we are dedicated to revolutionizing the way people approach their dietary habits and health goals. Our mission is to empower individuals to make informed choices about their food intake and lead healthier lifestyles.
                                                                                <br></br> 
                                                                                <br></br>
                                                                                As a team, we are driven by a passion for innovation and a commitment to excellence. We strive to provide our users with an exceptional experience through our cutting-edge Android application, designed with a user-friendly interface and advanced features.</p>
                                    <h2 className="mb-4">Our Values</h2>
                                    <p className="mb-5">At the core of our company are values that guide everything we do. We believe in collaboration, transparency, and integrity. Our team is dedicated to continuous improvement, constantly seeking new ways to enhance our app and deliver greater value to our users.</p>
                                    
                                    <div className="row gy-4 gy-md-0 gx-xxl-5">
                                        <div className="col-12 col-md-6">
                                            <div className="d-flex">
                                                <div className="me-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                                                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h2 className="h4 mb-3">What Sets Us Apart</h2>
                                                    <p className="text-secondary-mb-0">Unlike other digital solutions, MyFoodChoice is more than just a calorie tracker or meal planner. We leverage advanced image recognition algorithms to simplify the process of recording food intake, provide personalized recommendations based on dietary guidelines, and offer additional features such as clock-in rewards, recipe suggestions, and food comparisons.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="d-flex">
                                                <div className="me-4 text-primary">
                                                </div>
                                                <div>
                                                    <h2 className="h4 mb-3">Who Can Benefit?</h2>
                                                    <p className="text-secondary-mb-0">Our app is for anyone dedicated to a healthy diet and monitoring food habits. Whether you're health-focused, fitness-minded, or seeking positive change, MyFoodChoice supports your journey to better health. Join us in taking control, one meal at a time.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
