import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 504, min: 0 },
        items: 1
    }
};


const Carousell = () => {
    return (
        <section id="home">
            <div className="back bg-dar" >
                <div className="mobile-left">
                    <Carousel responsive={responsive}>
                        <div><img src="/static/images/corousel/1.jpeg" width="275px" height="380px"></img></div>
                        <div><img src="/static/images/corousel/2.jpeg" width="275px" height="380px"></img></div>
                        <div><img src="/static/images/corousel/4.jpeg" width="275px" height="380px"></img></div>
                        <div><img src="/static/images/corousel/3.jpeg" width="275px" height="380px"></img></div>

                        <div><img src="/static/images/corousel/1.jpeg" width="275px" height="380px"></img></div>
                        <div><img src="/static/images/corousel/2.jpeg" width="275px" height="380px"></img></div>
                        <div><img src="/static/images/corousel/3.jpeg" width="275px" height="380px"></img></div>
                        <div><img src="/static/images/corousel/4.jpeg" width="275px" height="380px"></img></div>


                    </Carousel>
                </div>
            </div></section>
    )
}
export default Carousell
