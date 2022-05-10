import {homeObjOne} from './Data'
import HeroSection from "../../HeroSection";

const Home = () => {

    return (
        <HeroSection {...homeObjOne} />
    )
}

export default Home