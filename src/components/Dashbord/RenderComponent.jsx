import ErrorRequestMessage from "components/ErrorRequestMessage/ErrorRequestMessage"
import Loader from "components/loaders/Loader/Loader"
import React from "react"

function RenderComponent({
    loader,
    error,
    children,
    chart = false,
    margin = false
}) {
    if (loader)
        return !chart ? (
            <Loader height={80} width={80} />
        ) : (
            <Loader height={80} width={80} chart />
        )
    if (error)
        return !margin ? (
            <ErrorRequestMessage message={error.message} />
        ) : (
            <ErrorRequestMessage message={error.message} margin />
        )
    return <>{children}</>
}

export default RenderComponent
