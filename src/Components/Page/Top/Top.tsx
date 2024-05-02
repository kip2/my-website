import Blank from "../../UI/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import Quotes from "../../UI/Quotes"
import TopBooks from "./TopBooks"
import TopProfile from "./TopProfile"
import ScrollToTopButton from "../../UI/ScrollToTopButton"

const Top = () => {
    return (
        <>
            <Header/>
            <Blank />
            <Quotes />
            <Blank />
            <TopProfile/>
            <Blank />
            <TopBooks/>
            <ScrollToTopButton />
            <Footer/>
        </>
    )
}

export default Top