import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import History from "./History"
import Introduction from "./Introduction"
import Quolifications from "./Qualifications"

function About() {
    return (
        <>
            <Header />
            <h1>About</h1>
            <Introduction />
            <History />
            <Quolifications />
            <Footer />
        </>
    )
}

export default About