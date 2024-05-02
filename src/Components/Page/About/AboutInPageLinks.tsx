import InPageLinkButton from "../../UI/InPageLinkButton"

const AboutInPageLinks = () => {
    const inPageLink = ["History", "Qualifications",]

    return (
        <>
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
        </>
    )
}

export default AboutInPageLinks