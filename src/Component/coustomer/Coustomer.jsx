import Image from "react-bootstrap/Image";
import './coustomer.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from "axios";
import {useEffect, useState} from "react";

const Img = (obj) => {

    return(<div className={'d-flex justify-content-center mx-4 py-4 '}>


    <div  className={'item'}>
        <Image
            src={obj.logo}
            height={'100px'}

        />
    </div>
    </div>

    )

}
const client = axios.create({
    baseURL: process.env.REACT_APP_URL,

});
const Activity=()=>{
    const [companyData, setCompanyData] = useState ([])
    useEffect ( () => {
        client.get('our/company/').then((r)=>{
            if(r.status===200){
                setCompanyData(r.data)
            }

        })
    }, [] );
    return(<div className={'mt-3 our-cous'}>
        <h1 className={'text-center text-primary2 '}>OUR CUSTOMERS</h1>
    <OwlCarousel autoWidth={false} className='owl-theme Activity' loop autoplay={true}  items={5}  responsive={
        { 0:{
        items:1
    },
        600:{
        items:2
    },
        1000:{
        items:5
    }}
    }>
        {companyData.map(Img)}
    </OwlCarousel></div>
)
}
export default Activity