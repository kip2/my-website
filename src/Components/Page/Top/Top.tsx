import Blank from "../../UI/Blanks/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import Quotes from "../../UI/Quotes"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import Profile from "./Profile"

const Top = () => {
    return (
        <>
            <Header/>
            <Blank />
            <Quotes />
            <Blank />

            <Profile />

            <ScrollToTopButton />
            <Footer/>
        </>
    )
}

export default Top