import c1 from '../../assets/c1.png';
import c2 from '../../assets/c2.png';
import c3 from '../../assets/c3.png';
import c4 from '../../assets/c4.png';
import c5 from '../../assets/c5.png';
import Image from "react-bootstrap/Image";
import './coustomer.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const img_srcs=[

       c1,
        c2,
        c3,
    c4,
            
            c5

]
const Img = (obj) => {

    return(<div className={'d-flex justify-content-center mx-4 py-4 '}>


    <div  className={'item'}>
        <Image
            src={obj}
            height={'40px'}

        />
    </div>
    </div>

    )

}

const Activity=()=>{
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
    }dots>
        {img_srcs.map(Img)}
    </OwlCarousel></div>
)
}
export default Activity