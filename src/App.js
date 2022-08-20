import {Route, Routes} from "react-router-dom";
import {useState} from "react";

import './App.css';
import Layout from "./Layout/Layout";
import Main from "./pages/Main/Main";
import {strings} from "./language/Language";


function App() {
    const [lan, setLan] = useState(strings._props.en);

    return (
        <div className="App">
            <Routes>
                <Route path={''} element={<Layout setLan={setLan} lan={lan}/>}>
                    <Route index element={<Main lan={lan}/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
