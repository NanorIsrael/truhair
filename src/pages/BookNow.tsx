import Card from "../components/card";
import {useState} from 'react';
// flex justify-center flex-wrap align-center

function BookNow() {
    const images = [{photo:'Butterfly-braids.jpeg', name:'Butterfly Braids'}, {photo:'crocheting.jpg', name:'Crocheting'}, {photo:'distress-locks.jpg', name:'Distress-Locks'}, {photo:'gel-pony.jpg', name:'Gel Pony'}, {photo:'corn-row.jpg', name:'Corn Row'}, {photo:'boho.jpg', name:'Boho'}]
    const [visible, setVisible] = useState(3);

    const loadMore = () => {
        setVisible(prev => prev + 3)
    }
   
    return (
    <div className='bg-primary text-center text-white' >
        <div className="item-center w-90 block-center">
            <p className="text-center pt-24 text-2xl">Click on the service you want, to book <strong>now!</strong></p>
            <div className="grid-cta">
                { images.slice(0, visible).map(img => <Card img={img}/>)}
            </div>
            <button onClick={loadMore} className="btn mb-8 primary-color bg-primary-dark w-full py-7" >Load More</button>
        </div>
        
    </div>
        )
} 

export default BookNow;