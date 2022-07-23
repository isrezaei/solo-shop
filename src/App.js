import {Routes, Route} from "react-router-dom";
import {HomePreRender} from "./Components/HomePage/HomePreRender";
import {DetailsPreRender} from "./Components/DetailsPage/DetailsPreRender";
import {CartPreRender} from "./Components/CartPage/CartPreRender";
import {ModalGalleryPreRender} from "./Components/ModalPage/ModalGalleryPreRender";
import {useLocation} from "react-router-dom";


function App() {

    const location = useLocation()
    const background = location.state && location.state.background

    return (
        <div className='font-rubik'>
            <Routes location = {background || location}>
                <Route path='/' exact element={<HomePreRender/>}/>
                <Route path='/details/:productId' element={<DetailsPreRender/>}/>
                <Route path='/cart-shop' element={<CartPreRender/>}/>
            </Routes>

            {
                background && (
                    <Routes>
                        <Route path='quick/:productId' element={<ModalGalleryPreRender/>}/>
                    </Routes>
                )
            }
        </div>
    )
}

export default App;
