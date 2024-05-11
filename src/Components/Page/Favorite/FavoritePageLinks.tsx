import InPageLinkButton from "../../UI/InPageLinkButton"

const FavoritePageLinks = () => {
    const inPageLink = ["Game", "Manga", "Philosophy"]

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
                            rootPath="/favorite"
                            linkId={link}
                            text={link}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default FavoritePageLinks