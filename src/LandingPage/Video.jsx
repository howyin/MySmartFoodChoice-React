import './All.css'

const Video = () => {
    return (
        <div className='video_container'>
            <iframe 
                height="500"
                width="800"
                src="https://www.youtube.com/embed/EzYc16ygKeY"
                title="Mobile App Walkthrough"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            ></iframe>
        </div>
    );
};

export default Video;
