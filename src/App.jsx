import './App.css'
import { Route, Routes } from "react-router-dom";
import {Suspense} from 'react';
import Header from "./Page/Header.jsx";
import MainPage from "./Page/MainPage.jsx";

function App() {

  return (
      <>
        <Header />
        <div style={{display: 'flex'}}>
            <Suspense fallback={<div>Loading ...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
      </>
  )
}

export default App
