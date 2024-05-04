import MarkdownViewer from "../../Functions/MarkdownViewer/MarkdownViewer"
import Title from "../../UI/Title"

const Introduction = () => {
    const filepath = "/pages/About/introducion.md"

    return (
        <>
            <Title title="Introduction" subTitle="自己紹介" linkId="Introduction" />
            <MarkdownViewer filepath={filepath}/>
        </>
    )
}

export default Introduction