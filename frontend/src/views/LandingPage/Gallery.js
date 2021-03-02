import React, { useEffect } from 'react'
import { listProducts } from '../../actions/productActions'
import { ImageCard } from './ImageCard'

import { useDispatch, useSelector } from 'react-redux'


const images = [
    {
        title: " Beverages",
        img: "static/images/corousel/1.jpeg",
    },
    {
        title: " Italian",
        img: "static/images/corousel/2.jpeg",
    },
    {
        title: "Chilled",
        img: "static/images/corousel/3.jpeg",
    },
    {
        title: "Chinese",
        img: "static/images/corousel/4.jpeg",
    },
    {
        title: "Cake",
        img: "static/images/corousel/1.jpeg",
    },
    {
        title: "Non-Veg ",
        img: "static/images/corousel/2.jpeg",
    },
    {
        title: "South Indian",
        img: "static/images/corousel/3.jpeg"
    }
]
const Gallery = () => {
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page, pages } = productList;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <section id="gallery">
            <h2 className="gal-head">Gallery</h2>
            <div className="row  mr-1 mt-3 ">
                <>
                    {products ? products.map((products) => (
                        <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-12 ecommerce_product ">

                            {products.image ?
                                <>  <img src={products.image} width="275px" height="380px" className="gal-img" ></img>
                                    <div className=" text-imgs">
                                        <p className="bottomtext-img  d-flex justify-content-center">{products.name}</p>

                                        <span className="bottomtext-img2 d-flex justify-content-center ">{products.restaurant}</span>
                                    </div>
                                </>
                                : null}
                        </div>
                    )) : (<li className="d-flex prods  justify-content-center mt-5">
                        <h4>NO ITEMS SHOWING</h4>
                    </li>
                        )}
                </>

            </div>

        </section>
    )
}

export default Gallery
