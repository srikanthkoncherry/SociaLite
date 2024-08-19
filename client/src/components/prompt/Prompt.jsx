import './Prompt.css'

export default function Prompt({ follow }) {
    const handleOnClickYes = () => {
        follow(true)
    }
    const handleOnClickNo = () => {
        follow(false)
    }
    return (
        <>
            <div className="promptWrapper">
                <span className="promptText">
                    Do you want to follow this user?
                </span>
                <div className="promptButtonWrapper">
                    <button className="promptButton" onClick={handleOnClickYes}>Yes</button>
                    <button className="promptButton" onClick={handleOnClickNo}>No</button>
                </div>
            </div>
        </>
    )
}