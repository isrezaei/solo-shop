import {Routes, Route} from "react-router-dom";
import {RootPreRender} from "./Components/HomePage/_RootPreRendering/RootPreRender";
import {DetailsPreRender} from "./Components/DetailsPage/DetailsPreRender";
import {CartPreRender} from "./Components/CartPage/CartPreRender";
import {ModalGalleryPreRender} from "./Components/ModalPage/ModalGalleryPreRender";
import {_RootPreRenderSearch} from "./Components/Header/LiveSearch/_RootPreRenderSearch";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";


function App() {

    const location = useLocation()

    const modalGallery = location.state?.background
    const searchComponent = location.state?.background

    useEffect(()=>{
        if (modalGallery || searchComponent)
        {
            document.body.style.overflow = 'hidden'
        }
        return ()=> document.body.style.overflow = 'auto'

    } , [modalGallery , searchComponent ])

    return (
        <div className='scrollbar-hide font-rubik'>

            <Routes location = {modalGallery || location}>
                <Route path='/' exact element={<RootPreRender/>}/>
                <Route path='/details/:productId' element={<DetailsPreRender/>}/>
                <Route path='/cart-shop' element={<CartPreRender/>}/>
            </Routes>

            {
                modalGallery && (
                    <Routes>
                        <Route path='quick/:productId' element={<ModalGalleryPreRender/>}/>
                    </Routes>
                )
            }

            {
                searchComponent && (
                    <Routes>
                        <Route path='/search' element={<_RootPreRenderSearch/>}/>
                    </Routes>
                )
            }
        </div>
    )
}

export default App;
