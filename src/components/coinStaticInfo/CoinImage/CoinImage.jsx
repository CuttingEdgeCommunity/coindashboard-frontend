import React from "react"

function CoinImage({
    urlImage = null,
    alt = "IMAGE NOT FOUND",
    ratioChange = false
}) {
    let height = "h-16"
    let width = "h-16"
    if (ratioChange !== false) {
        height = "h-6"
        width = "h-6"
    }
    return (
        <div data-cy="coin-img" className="flex-shrink-0">
            <span className="block relative">
                <img
                    alt={alt}
                    src={urlImage}
                    className={
                        "mx-auto object-cover rounded-full " + height + " " + width
                    }
                />
            </span>
        </div>
    )
}

export default CoinImage
