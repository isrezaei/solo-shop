import { Routes, Route} from "react-router-dom";
import {HomePreRender} from "./Components/HomePage/HomePreRender";
import {DetailsPreRender} from "./Components/DetailsPage/DetailsPreRender";
import {CartPagePreRender} from "./Components/CartPage/CartPagePreRender";
import {Header} from "./Components/Header/Header";
import {useSelector} from "react-redux";
import {SortBySelect} from "./Redux/MasterDataSlice";



function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' exact element={<HomePreRender/>}/>
                <Route path='/details/:productId' element={<DetailsPreRender/>}/>
                <Route path='/cart-shop' element={<CartPagePreRender/>}/>
            </Routes>
        </>
    )
}

export default App;
