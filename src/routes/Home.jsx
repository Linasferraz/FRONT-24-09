import {HomeStyle} from '../css/HomeStyle'
import video from '../assets/video.mp4'

const Home =()=>{
    return (
        <HomeStyle>
            <section className="home">
                <video autoPlay muted loop className="video">
                    <source src={video} type="video/mp4"/>
                </video>
            <h1>Desenvolvendo com Emoção..</h1>
            </section>
            <h1>Home</h1>
        </HomeStyle>
    )
}
export default Home