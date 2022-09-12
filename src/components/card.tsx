const  Card = ({img}: any) => (
    <div>
    <div className="bg-white rounded overflow-hidden shadow-md w-80 h-80 m-2 lg:w-64 m-1">
    <img src={`/images/hair-styles/` + img.photo} alt='' className='w-full h-full'/>
    </div>
    <p>{img.name}</p>
    </div>
)
export default Card;