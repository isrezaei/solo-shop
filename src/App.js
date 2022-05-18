import { Routes, Route} from "react-router-dom";
import {HomePreRender} from "./Components/HomePage/HomePreRender";
import {DetailsPreRender} from "./Components/DetailsPage/DetailsPreRender";
import {CartPagePreRender} from "./Components/CartPage/CartPagePreRender";
import {ModalGallery} from "./Components/ModalPage/ModalGallery";
import {Header} from "./Components/Header/Header";
import {useLocation} from "react-router-dom";


function App() {

    const location = useLocation()

    console.log(location.state)

    const background = location.state && location.state.background


    return (
        <div className='font-rubik'>
            <Header/>

            <Routes location = {background || location}>
                <Route path='/' exact element={<HomePreRender/>}/>
                <Route path='/details/:productId' element={<DetailsPreRender/>}/>
                <Route path='/cart-shop' element={<CartPagePreRender/>}/>
            </Routes>

            {
                background && (
                    <Routes>
                        <Route path='quick/:productId' element={<ModalGallery/>}/>
                    </Routes>
                )
            }

        </div>
    )
}

export default App;
