import Blank from "../../UI/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import Quotes from "../../UI/Quotes"
import TopBooks from "./TopBooks"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import UnderConstruction from "../../UI/UnderConstruction"

const Top = () => {
    return (
        <>
            <UnderConstruction />

            <Header/>
            <Blank />
            <Quotes />
            <Blank />
            <Blank />
            <TopBooks/>
            <ScrollToTopButton />
            <Footer/>
        </>
    )
}

export default Top