import Blank from "../../UI/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import ProductCard from "./ProductCard"

function Products() {
    return(
        <>
            <Header />
            <h1>My Products!</h1>
            <Blank />
            <ProductCard
                imgUrl="/img/thumbnail/yume_t.png"
                title="せっかち夢十夜"
                caption="夢十夜が元ネタのクリッカーゲーム"
            />
            <Footer />
        </>
    )
}

export default Products