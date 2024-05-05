import Qualification from "./Qualification"
import qualificationData from "../../../../../public/json/Qualifications.json"
import Title from "../../../UI/Title/Title"

const Qualifications = () => {
    return (
        <>
            <Title
                title="Qualifications"
                subTitle="持っている資格"
                linkId="Qualifications"
            />
            {qualificationData.map((qualification, index) => (
                <Qualification key={index} data={qualification.data} qualification={qualification.qualification} url={qualification.url} />
            ))}
        </>
    )
}

export default Qualifications