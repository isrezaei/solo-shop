import {Routes, Route} from "react-router-dom";
import {Main} from "./Components/Home/Main";
import {DetailsPreRender} from "./Components/Products_Page/Products_Rendering/DetailsPreRender";
import {Pre_Render} from "./Components/Cart_Shop/Pre_Render";
import {ModalGalleryPreRender} from "./Components/Modals_Page/ModalGalleryPreRender";
import {response} from "./Components/Header/Search/Response";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";


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

            <link rel="stylesheet" type="text/css" charSet="UTF-8"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>


            <Header/>

            <Routes location = {modalGallery || location}>
                <Route path='/' exact element={<Main/>}/>
                <Route path='/details/:productId' element={<DetailsPreRender/>}/>
                <Route path='/cart-shop' element={<Pre_Render/>}/>
            </Routes>

            {
                modalGallery && (
                    <Routes>
                        <Route path='quick/:productId' element={<ModalGalleryPreRender/>}/>
                    </Routes>
                )
            }

            <Footer/>

        </div>
    )
}

export default App;
