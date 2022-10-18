const  Card = ({img}: any) => (
    <div className="mb-6 mt-4">
        <div className="bg-white rounded overflow-hidden shadow-md w-100 h-80 m-2 lg:w-64 m-1 ">
            <img src={`/images/hair-styles/` + img.photo} alt='' className='w-full h-full object-cover'/>
        </div>
        <p>{img.name}</p>
    </div>
)
export default Card;


