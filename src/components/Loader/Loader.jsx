import React from "react"
import { ThreeDots } from "react-loader-spinner"

function Loader({ height = 150, width = 150, chart = false }) {
    const mt = chart ? "mt-20" : ""
    return (
        <div data-cy="loader" className="w-full flex justify-center intem center">
                <h1 className={mt}>
                    <ThreeDots color="#00BFFF" height={height} width={width} />
                </h1>
        </div>
    )
}

export default Loader
