import InPageLinkButton from "../../UI/InPageLinkButton"

const ProductsInPageLinks = () => {
    const inPageLink = ["Tools", "Game", "Study",]

    return(
        <div className="flex  justify-center items-center">
            <div className="grid grid-cols-3 gap-4
                max-md:grid-cols-2
                max-sm:grid-cols-1
            ">
                {inPageLink.map((link, index) => {
                    return (
                        <InPageLinkButton
                            key={index}
                            rootPath="/products"
                            linkId={link}
                            text={link}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ProductsInPageLinks