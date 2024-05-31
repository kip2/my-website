import Blank from "../../UI/Blanks/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header/Header"
import LongLine from "../../UI/Lines/LongLine"
import Maxim from "../../UI/Maxim/Maxim"
import RecentCreation from "../Products/Genre/RecentCreation"
import Profile from "./Profile"

const Top = () => {
    return (
        <>
            <Header/>
            <Blank />
            <Maxim />
            <Blank />


            <Profile />

            <section>

                <Blank/>
                <LongLine />
                <Blank/>

                <RecentCreation />
            </section>

            <Footer/>
        </>
    )
}

export default Top