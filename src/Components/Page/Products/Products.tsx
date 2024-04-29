import Blank from "../../UI/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import MarkdownViewer from "../../Functions/MarkdownViewer"

function Products() {
    return(
        <>
            <Header />
            <h1>My Products!</h1>
            <Blank />
            <MarkdownViewer filepath="/src/markdown/Products/sample.md" />
            <Footer />
        </>
    )
}

export default Products