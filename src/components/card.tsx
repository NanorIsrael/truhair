



const  Card = ({img, onHover}: any) => {

    return (
    <div className="card mb-6 m-4" onMouseOver={onHover}>
        <div className="card-image bg-white rounded overflow-hidden shadow-md w-100 h-80 m-2 lg:w-64 m-1 ">
            <img src={`/images/hair-styles/` + img.photo} alt='' className='w-full h-full object-cover'/>
        </div>
        <div className="item-info" >
            <p>{img.name}</p>
        </div>
       
    </div>
    )
}
export default Card;


