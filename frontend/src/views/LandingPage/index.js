import React from 'react'
import Carousell from './Carousel';
import Contact from './Contact';
import Footer2 from './Footer2';
import Gallery from './Gallery';

const LandingPageView = () => {
    React.useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <div>

            <Carousell />
            <div className="mobile-left1">
                <Gallery />
            </div>
            <div>
                <Footer2 />
            </div>

        </div>
    )
}
export default LandingPageView