import React from 'react';
import '../Advertisement/ProjectInfo.css'

function ProjectInfo() {
    return (
        <div className="project-info-container">
            <h2 className="project-info-title">Project Information</h2>
            <div className="project-info-links">
                <a href="https://github.com/Luong142/MyFoodChoice" 
                    className="project-info-link">

                    GitHub Link
                </a>
                <a href="https://example.com/app.apk" 
                    className="project-info-link">
                        
                    APK Download Link
                </a>
            </div>
            <p className="project-info-advertisement">Discover the Food Choice App - Analyze Your Food Intake!</p>
        </div>
    );
}

export default ProjectInfo;