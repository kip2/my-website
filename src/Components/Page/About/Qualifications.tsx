import Qualification from "./Qualification"
import qualificationData from "../../../../public/json/Qualifications.json"

const Qualifications = () => {
    return (
        <>
            <h1 className=" text-6xl mx-auto w-fit mb-14 max-md:text-4xl">
                Qualifications
            </h1>
            {qualificationData.map((qualification, index) => (
                <Qualification key={index} data={qualification.data} qualification={qualification.qualification} url={qualification.url} />
            ))}
        </>
    )
}

export default Qualifications