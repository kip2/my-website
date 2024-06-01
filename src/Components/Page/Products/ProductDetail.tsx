import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ProductPageData } from "../../interface"
import Header from "../../UI/Header/Header"
import Footer from "../../UI/Footer"
import Blank from "../../UI/Blanks/Blank"
import MarkdownViewer from "../../Functions/MarkdownViewer/MarkdownViewer"
import ReturnButton from "../../UI/ReturnButton"
import LongLine from "../../UI/Lines/LongLine"
import LittleBlank from "../../UI/Blanks/LittleBlank"
import Loading from "../../UI/Loading/Loading"
import LanguageIcons from "../../Functions/Devicon/LanguageIcons"

const ProductDetail = () => {
    const {id} = useParams<{ id?: string }>()
    const [productData, setProductData] = useState<ProductPageData | undefined>()

    const fetchData = async (id: string) => {
        const response = await fetch("/json/ProductsData.json")
        const products = await response.json() as ProductPageData[]
        const matchData = products.find(product => product.id === id)
        setProductData(matchData)
    }

    useEffect(() => {
        if (id) {
            fetchData(id)
        }
    }, [id])


    if (!productData) {
        return <Loading />
    }
    return (
        <div>
            <Header />
            <Blank />
            <div className=" max-w-2xl mx-auto leading-8">
                <h1 className="text-center text-5xl my-8
                    font-serif italic font-bold
                    max-md:text-4xl
                    max-sm:text-3xl
                ">
                    {productData.title}
                </h1>
                <LongLine/>
                <LittleBlank />
                <div className="flex justify-center
                    mx-auto
                    max-[640px]:max-w-80
                ">
                    <LanguageIcons iconsData={productData.techStack}/>
                </div>
                <LittleBlank />
                <LongLine/>
                <LongLine/>
                <LittleBlank />
                <MarkdownViewer filepath={productData.path} /> 
                <ReturnButton path="/products#Products"/>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetail