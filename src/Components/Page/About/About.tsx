import Blank from "../../UI/Blanks/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import Line from "../../UI/Lines/Line"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import Profile from "../Top/Profile"
import AboutInPageLinks from "./AboutInPageLinks"
import Histories from "./History/Histories"
import Introduction from "./Introduction"
import Qualifications from "./Qualifications"

const About = () => {
    
    return (
        <>
            <Header />
            <Blank/>
            <Profile />
            <Blank/>
            <AboutInPageLinks/>
            <Line />
            <Introduction />
            <Line />
            <Histories />
            <Blank/>
            <Line />
            <Qualifications />
            <Blank/>
            <ScrollToTopButton/>
            <Footer />
        </>
    )
}

export default About