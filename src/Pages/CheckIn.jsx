import React, { useState } from 'react';
import './CheckIn.css';
import Header from '../HeaderComponents/Header';

function CheckIn() {
    const [checkedDays, setCheckedDays] = useState(new Array(7).fill(false));

    const handleCheckIn = (index) => {
        const updatedCheckedDays = [...checkedDays];
        updatedCheckedDays[index] = true;
        setCheckedDays(updatedCheckedDays);
    };

    const checkedCount = checkedDays.filter(Boolean).length;

    return (
        <div className="check-in-page">
            <Header />
            <div className="check-in-container">
                <h2>Checked in for {checkedCount} day{checkedCount !== 1 ? 's' : ''} this Week</h2>
                <div className="week-grid">
                    {checkedDays.map((checked, index) => (
                        <div key={index} className={`day ${checked ? 'checked' : ''}`} onClick={() => handleCheckIn(index)}>
                            Day {index + 1}
                            {checked && <span className="checkmark">✔</span>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CheckIn;