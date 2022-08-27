import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import App from "./components/App";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

// Variable
const routes = (
    <Routes>
        <Route exact path="/" element={<App />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route path="*" element={<NotFound />}/>
    </Routes>
);

export default routes;
