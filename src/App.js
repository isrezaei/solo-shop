import { Routes, Route} from "react-router-dom";
import {HomePreRender} from "./Components/HomePage/HomePreRender";
import {DetailsPreRender} from "./Components/DetailsPage/DetailsPreRender";
import {CartPagePreRender} from "./Components/CartPage/CartPagePreRender";
import {Header} from "./Components/Header/Header";


function App() {

    return (
        <div className='font-rubik'>
            <Header/>
            <Routes>
                <Route path='/' exact element={<HomePreRender/>}/>
                <Route path='/details/:productId' element={<DetailsPreRender/>}/>
                <Route path='/cart-shop' element={<CartPagePreRender/>}/>
            </Routes>
        </div>
    )
}

export default App;
