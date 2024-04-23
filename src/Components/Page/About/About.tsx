import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import History from "./History"
import Introduction from "./Introduction"
import Qualifications from "./Qualifications"

function About() {
    return (
        <>
            <Header />
            <h1>About</h1>
            <Introduction />
            <History />
            <Qualifications />
            <Footer />
        </>
    )
}

export default About