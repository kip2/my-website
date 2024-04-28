import ReactPlayer from "react-player"

interface PlayerProps {
    url: string,
}

const Player: React.FC<PlayerProps> = ({url}) => {
    return (
        <>
            <div className="flex justify-center my-5">
                <div className=" max-w-2xl" style={{width:"100%"}}>
                    <ReactPlayer
                        url={url}
                        width="100%"
                        height="100%"
                        controls={true}
                    />
                    <div style={{ paddingTop: "55%"}} />
                </div>
            </div>
        </>
    )
}

export default Player