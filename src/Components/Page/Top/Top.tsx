import Blank from "../../UI/Blanks/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header/Header"
import LongLine from "../../UI/Lines/LongLine"
import RecentCreation from "../Products/Genre/RecentCreation"
import Profile from "./Profile"

const Top = () => {
    return (
        <>
            <Header/>

            <section>
                <Blank />
                <Profile />
                <Blank />
                <LongLine />
                <Blank/>
            </section>

            <section>
                <RecentCreation />
                <Blank/>
            </section>

            <Footer/>
        </>
    )
}

export default Top