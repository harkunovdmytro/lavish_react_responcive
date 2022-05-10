import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'
import HeroSection from "../../HeroSection";

const Home = () => {

    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
        </>
    )
}

export default Home