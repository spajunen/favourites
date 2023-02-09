import React from "react";
import NavBar from './NavBar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AddFavourite from './AddFavourite';
import Favourites from './Favourites';

const AppLayout: React.FC<{}> = () => {
    return(
        <div style={{padding: "20px"}}>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<AddFavourite />}/>
                    <Route path="/coffees" element={<Favourites beverage={"coffee"} />}/>
                    <Route path='/teas' element={<Favourites beverage={"tea"} />}/>
                </Routes>
            </Router>

        </div>
    );
};

export default AppLayout;