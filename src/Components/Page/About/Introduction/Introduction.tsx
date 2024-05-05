import Blank from "../../../UI/Blanks/Blank"
import Title from "../../../UI/Title"
import IntroductionProfile from "./IntroductionProfile"
import "../../../Functions/MarkdownViewer/MarkdownViewer.css"
import IntroductionSentense from "./IntroductionSentence"

const Introduction = () => {

    return (
        <>
            <Title title="Introduction" subTitle="自己紹介" linkId="Introduction" />
            <IntroductionProfile />
            <Blank />
            <IntroductionSentense/>
        </>
    )
}

export default Introduction