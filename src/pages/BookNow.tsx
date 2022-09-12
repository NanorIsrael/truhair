import Card from "../components/card";

function BookNow() {
    const images = [{photo:'Butterfly-braids.jpeg', name:'Butterfly Braids'}, {photo:'crocheting.jpg', name:'Crocheting'}, {photo:'distress-locks.jpg', name:'Distress-Locks'}, {photo:'gel-pony.jpg', name:'Gel Pony'}, {photo:'corn-row.jpg', name:'Corn Row'}, {photo:'boho.jpg', name:'Boho'}]
    return <div className='bg-gray-500  text-center text-white ' >
        <p className="text-center py-4">Click on the service you want, to book <strong>now!</strong></p>
        <div className="flex justify-center flex-wrap align-center">
        { images.map(img => <Card img={img}/>)}
        </div>
        </div>
} 

export default BookNow;