function Card({info}){
    return (
        <>
            <h1 className="text-2xl font-bold text-blue-900">Hello {info.name}, age: {info.age}</h1>
            {info.likes.map((like, index) => (
                <li key={index} className="text-lg text-blue-700">{like}</li>
            ))}
        </>
    )
}   
export default Card;