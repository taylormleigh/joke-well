import React from "react"

const ButtonGetNewJoke = ({ FetchJoke }) => (
    <button className="button get-new-joke" onClick={FetchJoke}>
        Get A New Random Joke
    </button>
)

export default ButtonGetNewJoke