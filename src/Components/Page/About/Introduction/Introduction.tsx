import MarkdownViewer from "../../../Functions/MarkdownViewer/MarkdownViewer"
import Blank from "../../../UI/Blanks/Blank"
import Title from "../../../UI/Title"
import IntroductionProfile from "./IntroductionProfile"

const Introduction = () => {
    const filepath = "/pages/About/introducion.md"

    return (
        <>
            <Title title="Introduction" subTitle="自己紹介" linkId="Introduction" />
            <IntroductionProfile />
            <Blank />
            <MarkdownViewer filepath={filepath}/>
        </>
    )
}

export default Introduction