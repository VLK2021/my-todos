import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import Main from "./pages/Main/Main";


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={''} element={<Layout/>}>
                    <Route index element={<Main/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
