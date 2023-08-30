import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './components/Home/Home.jsx'
import Product from './components/Products/Products.jsx'
import Header from './components/Header/Header.jsx'
import { dividerClasses } from "@mui/material";
import Footer from './components/Footer/Footer.jsx'
import Newsletter from './components/Footer/Newsletter/Newsletter.jsx'
import SingleProduct from './components/SingleProduct/SingleProduct.jsx'
import AppContext from './utils/context.jsx'

import Category from "./components/Category/Category.jsx";



function App() {
    return (
        
        <BrowserRouter>
        <AppContext>
          
                  <Header/>
     
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/category/:id" element={<Category/>}/>
            <Route path="/product/:id" element={<SingleProduct/>}/>
            </Routes>
            <Newsletter/>
            <Footer/>
            </AppContext>  
            </BrowserRouter>
        
    );


}

export default App;
