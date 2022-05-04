import { Routes, Route} from "react-router-dom";
import {HomePreRender} from "./Components/HomePage/HomePreRender";
import {DetailsPreRender} from "./Components/DetailsPage/DetailsPreRender";
import {Header} from "./Components/Header/Header";
import {useSelector} from "react-redux";
import {SortBySelect} from "./Redux/MasterDataSlice";



function App() {

    const Filter =  useSelector(state =>  SortBySelect(state , state.MasterDataSlice.sortBy))

    console.log(Filter)

    return (
        <>

            <Header/>

            <Routes>
                <Route path='/' exact element={<HomePreRender/>}/>
                <Route path='/details/:productId' element={<DetailsPreRender/>}/>
            </Routes>

        </>
    )
}

export default App;
