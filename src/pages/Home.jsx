import { useState } from "react"
import Navbar from "../components/Navbar"
import banner1 from "../assets/banner 1.jpg"
import banner2 from "../assets/banner 2.jpg"
import banner3 from "../assets/banner 3.jpg"
import banner4 from "../assets/banner 4.jpg"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import CardProduct from "../components/CardProduct"
import { useSelector } from "react-redux"

const Home = () => {
    const [bannerData] = useState([
        {
            title: "Banner 1",
            image: banner1
        },
        {
            title: "Banner 2",
            image: banner2
        },
        {
            title: "Banner 3",
            image: banner3
        },
        {
            title: "Banner 4",
            image: banner4
        }
    ])

    const { product } = useSelector(root => root)
   
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
            <Navbar />
            <div className="container p-4">
                <Slider {...settings}>
                    {
                        bannerData.map((banner, index) => (
                            <img src={banner.image} alt={banner.title} key={index} />
                        ))
                    }
                </Slider>
            </div>
            <div className="container p-4">
                <div className="row">
                    {
                        product?.map((product, index) => <CardProduct key={index} {...product} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Home