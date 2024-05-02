import Blank from "../../UI/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import Line from "../../UI/Line"
import AboutInPageLinks from "./AboutInPageLinks"
import Histories from "./History/Histories"
import Introduction from "./Introduction"
import Qualifications from "./Qualifications"

function About() {
    
    return (
        <>
            <Header />
            <AboutInPageLinks/>
            <Introduction />
            <Line />
            <Histories />
            <Blank/>
            <Line />
            <Qualifications />
            <Blank/>
            <Footer />
        </>
    )
}

export default About