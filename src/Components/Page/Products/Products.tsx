import Blank from "../../UI/Blanks/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header/Header"
import Title from "../../UI/Title/Title"
import ProductsInPageLinks from "./ProductsInPageLinks"
import Tool from "./Genre/Tool"
import Game from "./Genre/Game"
import LongLine from "../../UI/Lines/LongLine"
import Study from "./Genre/Study"
import LittleBlank from "../../UI/Blanks/LittleBlank"
import RecentCreation from "./Genre/RecentCreation"
import useScrollToHash from "../../Hooks/ScrollToHash"
import Other from "./Genre/Other"

const Products = () =>  {
    useScrollToHash()

    return(
        <>
            <Header />

            {/* title section */}
            <section>
                <Blank />
                <Title title="My Products" subTitle="つくったもの" linkId="Products" />
                <ProductsInPageLinks/>
                <LittleBlank />
            </section>
            
            {/* Recent creation section */}
            <section>
                <LittleBlank />
                <RecentCreation />
                <Blank />
            </section>

            {/* Tool section */}
            <section>
                <LongLine />
                <LongLine />
                <LittleBlank />
                <Tool />
            </section>

            {/* Game section */}
            <section>
                <Blank />
                <LongLine />
                <LongLine />
                <LittleBlank />
                <Game />
            </section>

            {/* Other section */}
            <section>
                <Blank />
                <LongLine />
                <LongLine />
                <LittleBlank />
                <Other />
            </section>

            {/* Study section */}
            <section>
                <Blank />
                <LongLine />
                <LongLine />
                <LittleBlank />
                <Study />
            </section>

            <Blank />
            <Footer />
        </>
    )
}

export default Products