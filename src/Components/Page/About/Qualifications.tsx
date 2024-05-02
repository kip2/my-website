import Qualification from "./Qualification"
import qualificationData from "../../../../public/json/Qualifications.json"

const Qualifications = () => {
    return (
        <>
            <h1 id="Qualifications" className=" text-6xl mx-auto w-fit  max-md:text-4xl">
                Qualifications
            </h1>
            <p className="text-sm text-center mt-3 mb-10">
                〜 持っている資格 〜
            </p>
            {qualificationData.map((qualification, index) => (
                <Qualification key={index} data={qualification.data} qualification={qualification.qualification} url={qualification.url} />
            ))}
        </>
    )
}

export default Qualifications