import ReactPlayer from "react-player"

interface PlayerProps {
    url: string,
}

const Player: React.FC<PlayerProps> = ({url}) => {
    return (
        <>
            <div className="flex justify-center my-5">
                <div className=" max-w-2xl w-full">
                    <ReactPlayer
                        url={url}
                        width="100%"
                        controls={true}
                    />
                </div>
            </div>
        </>
    )
}

export default Player