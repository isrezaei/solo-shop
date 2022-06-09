export const ActiveImagePortion = ({props}) =>
{

    const {detailsImage , activeOptions , product} = props

    return (
        <>
            <img className='w-full sticky top-0 z-10 m-auto' src={detailsImage[activeOptions.activeImage]} alt={product}/>
            <div>
                <div>
                    <p>Get free delivery, or pick up available items at an Apple Store</p>
                </div>
                <div>
                    <p>Free and easy returns</p>
                </div>
            </div>
        </>
    )
}