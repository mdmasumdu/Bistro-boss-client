import { useEffect, useState } from "react";
import Sectiontitle from "../../Shared/Sectiontitle/Sectiontitle";
import axios from "axios";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Testomonial = () => {

    const [reviews,setreviews] = useState([]);

    useEffect(()=>{
        axios.get("reviews.json")
        .then(data=>setreviews(data.data))
    },[])

    console.log(reviews)
    return (
        <div>
            <Sectiontitle heading={"What Our Client Say"}
            subheading={"Testomonial"}></Sectiontitle>


<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
              {
                reviews.map(review=>  <SwiperSlide key={review._id}>
                    <div className="mx-16 my-5 flex flex-col items-center">
                        <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                        />
                        <p className="py-5">{review.details}</p>
                        <h1 className="text-orange-500 text-3xl font-bold">{review.name}</h1>

                    </div>
                </SwiperSlide>)
              }
      </Swiper>
            
        </div>
    );
};

export default Testomonial;