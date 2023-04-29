import {Routes, Route} from "react-router-dom";
import {Home} from "./page/Home";
import {Details} from "./page/Details";
import {Cart} from "./page/Cart";
import {ModalGalleryPreRender} from "./Components/Home/Products/Modals_Page/ModalGalleryPreRender";
import {response} from "./Components/Header/Search/Response";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";


function App() {

    const location = useLocation()

    const modalGallery = location.state?.background
    const details = location.state?.background


    return (
        <div className='scrollbar-hide font-rubik'>

            <link rel="stylesheet" type="text/css" charSet="UTF-8"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>


            <Header/>

            <Routes location = {modalGallery || details || location}>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/cart-shop' element={<Cart/>}/>
            </Routes>

            {
                modalGallery && (
                    <Routes>
                        <Route path='quick/:productId' element={<ModalGalleryPreRender/>}/>
                    </Routes>
                )
            }

            {
                details && (
                    <Routes>
                        <Route path='/details/:productId' element={<Details/>}/>
                    </Routes>
                )
            }

            <Footer/>

        </div>
    )
}

export default App;
