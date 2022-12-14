import Card from "../components/card";
import {useEffect, useState} from 'react';

function BookNow() {
    const images = [{photo:'Butterfly-braids.jpeg', name:'Butterfly Braids'}, {photo:'crocheting.jpg', name:'Crocheting'}, {photo:'distress-locks.jpg', name:'Distress-Locks'}, {photo:'gel-pony.jpg', name:'Gel Pony'}, {photo:'corn-row.jpg', name:'Corn Row'}, {photo:'boho.jpg', name:'Boho'}, {photo:'Butterfly-braids.jpeg', name:'Butterfly Braids'}, {photo:'crocheting.jpg', name:'Crocheting'}, {photo:'distress-locks.jpg', name:'Distress-Locks'}]
    const [visible, setVisible] = useState(3);
    // const [card, setCard] = useState()

    useEffect(() => {
      
    }, [])

    const loadMore = () => {
        setVisible(prev => prev + 3)
    }


    return (
    <div className='bg-primary-color-light text-center primary-dark' >
        <div className="item-center w-90 block-center">
            <p className="text-center pt-24 text-2xl pb-8 md:pt-32">Click on the service you want, to book <strong>now!</strong></p>
            <div className="grid-cta">
                { images.slice(0, visible).map((img, index) => <Card img={img} key={index} />)}
            </div>
            <button onClick={loadMore} className="btn mb-8 primary-color bg-primary-dark w-full py-7" >Load More</button>
        </div>
        
    </div>
        )
} 

export default BookNow;