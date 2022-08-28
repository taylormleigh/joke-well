import React from "react"
import Punchline from "./Punchline"

const Joke = ({setup, punchline}) => (
    <div className="joke-container">
        <div className="joke-setup">
            {setup}
        </div>
        <Punchline punchline={punchline} />
    </div>
)

export default Joke
