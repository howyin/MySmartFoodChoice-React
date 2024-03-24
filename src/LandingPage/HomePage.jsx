import Header from "../Components/Header";
import Graph from "./Graph";
import Image from "./Image";
import Video from "./Video";
import Review from "./Review";
import Avatar from "./Avatar";
import Title from "./Title";

export const HomePage = () => {
    return (
        <div>
            <center>
                {/* add more here */}
                <Header/>
                <Image/>
                <Video/>
                <Graph/>
                <Title/>
                
                {/* the problem is that the elements can be together */}
                <div style={{ display: 'flex'}}>
                    <div style={{ marginLeft: '20px' }}  >
                        <Avatar />
                    </div>
                    
                    <div style={{ marginRight: '20px' }} >
                        <Review />
                    </div>
                </div>
            </center>
        </div>
    );
};
