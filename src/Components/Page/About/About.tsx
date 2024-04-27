import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import Histories from "./History/Histories"
import Introduction from "./Introduction"
import Qualifications from "./Qualifications"

function About() {
    return (
        <>
            <Header />
            <h1>About</h1>
            <Introduction />
            <Histories />
            <Qualifications />
            <Footer />
        </>
    )
}

export default About