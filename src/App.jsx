import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from 'react';
import Header from "./component/Header/Header.jsx";
import MainPage from "./Page/Main/MainPage.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Basket from "./component/Basket/Basket.jsx";
import Login from "./Page/Login/Login.jsx";
import Register from "./Page/Register/Register.jsx";
import PasswordReminder from "./Page/Login/PasswordReminder.jsx";
import BasketPage from "./Page/Basket/BasketPage.jsx";
import Filter from "./Page/PageFilter/Filter.jsx";
import Contact from "./Page/Contact/Contact.jsx";

function App() {

    return (
        <>
            <Link to='/' className='upHeaderLink'>Підпишіться на розсилку та отримайте знижку 5% на все!</Link>
            <Header/>
            <Basket />
            <main style={{display: 'flex'}}>
                <Suspense fallback={<div>Loading ...</div>}>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/password-reminder" element={<PasswordReminder />}/>
                        <Route path="/register" element={<Register />}/>
                        <Route path="/basket" element={<BasketPage />}/>
                        <Route path="/contact" element={<Contact />}/>
                        <Route path="/filter" element={<Filter />}/>
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </>
    )
}

export default App
