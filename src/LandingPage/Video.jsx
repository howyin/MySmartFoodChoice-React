import './All.css'

const Video = () => {
     // put your video in src part based on your directory bro
    return (
       
        <div className='video_container'>
            <iframe 
                    height="500"
                    width="800"
                    src="https://www.youtube.com/embed/VPvVD8t02U8?si=zflbCkdAebwl7vSV" 
                    title="Flutter video"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture" 
                    allowfullscreen
            ></iframe>
        </div>
    );
};

export default Video;
