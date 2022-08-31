import React from "react"

function ErrorRequestMessage({ message, margin = false }) {
    const mt = margin ? "mt-32" : ""
    return (
        <div
            data-cy="error-message"
            className={"w-full flex pb-14 justify-center items-center " + mt}
        >
            <div className="text-center">
                <h1 className="text-sm md:text-xl font-semibold text-red-500">
                    SERVER ERROR
                </h1>
                <h3 className="text-xs md:text-lg font-semibold text-gray-500 dark:text-gray-400">
                    {message}
                </h3>
            </div>
        </div>
    )
}

export default ErrorRequestMessage
