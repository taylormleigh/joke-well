import React from 'react'
import ButtonGetNewJoke from "./ButtonGetNewJoke"

const Layout = ({ FetchJoke, isLoading, isError, children }) => {
    if (isLoading || isError) {
        return (
            <div id="page-layout">
                <div className="header">
                    <ButtonGetNewJoke FetchJoke={FetchJoke} />
                    <a className="api-docs-link" href="https://github.com/15Dkatz/official_joke_api">View API Docs</a>
                </div>
                <main>
                    <div className={isLoading ? "loading-message" : "error-message"}></div>
                </main>
            </div>
        )
    }
    else {
        return (
            <div id="page-layout">
                <div className="header">
                    <ButtonGetNewJoke FetchJoke={FetchJoke} />
                    <a className="api-docs-link" href="https://github.com/15Dkatz/official_joke_api">View API Docs</a>
                </div>
                <main>
                    {children}
                </main>
            </div>
        )
    }
}

export default Layout