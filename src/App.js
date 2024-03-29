import {Routes, Route} from "react-router-dom";
import {Home} from "./page/Home";
import {Details} from "./page/Details";
import {Cart} from "./page/Cart";
import {useLocation} from "react-router-dom";
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";


function App() {

    const location = useLocation()
    const details = location.state?.background


    return (
        <div className='scrollbar-hide font-rubik'>

            <Header/>

            <Routes location = {details || location}>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/cart-shop' element={<Cart/>}/>
            </Routes>


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
