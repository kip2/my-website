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
            <ProductCard />
            <Footer />
        </>
    )
}

export default Products