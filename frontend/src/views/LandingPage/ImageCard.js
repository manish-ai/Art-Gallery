import React from 'react'

const ImageCard = (product) => {
    return (
        <>
            <img src={product.title} width="275px" height="380px" />
        </>
    )
}
export default ImageCard;