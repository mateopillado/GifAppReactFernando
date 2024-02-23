export const GifItem = ({id,title,urls}) => {

    return (
        <div className="card">
            <p> {title} </p>
            <p> { id } </p>
            <img src={urls} alt="" />
        </div>
    )
}
