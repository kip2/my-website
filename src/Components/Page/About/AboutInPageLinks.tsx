import InPageLinkButton from "../../UI/InPageLinkButton"

const AboutInPageLinks = () => {
    const inPageLink = ["test1", "test2", "test3", "History", "Qualifications",]

    return (
        <div className="flex  justify-center items-center">
            <div className="grid grid-cols-3 gap-4
                max-md:grid-cols-2
                max-sm:grid-cols-1
            ">
                {inPageLink.map((link, index) => {
                    return (
                        <InPageLinkButton
                            key={index}
                            rootPath="/about"
                            linkId={link}
                            text={link}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default AboutInPageLinks