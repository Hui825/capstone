import React, {Suspense, lazy, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/page/Main';






const Home = React.lazy(() => import('./pages/Home'));
const Website = React.lazy(() => import('./pages/Mypage'));

const Festival = React.lazy(() => import('./pages/Festival-Page/festival.js'));

const Market = React.lazy(() => import('./pages/Market Page/market.js'));
const RegistMenu = React.lazy(() => import('./pages/Register/RegistMenu'));
const Search = React.lazy(() => import('./pages/Search/Search.jsx'));
const Not = React.lazy(() => import('./pages/ETC/Not'));
const LoginForm = React.lazy(() => import('./pages/Login Page/LoginForm'));
const FestivalMore = React.lazy(() => import('./pages/Festival-Page/festivalmore.jsx'));




const App = () => {

    return (
        <BrowserRouter>
            <Suspense fallback={<Main />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/website" element={<Website />} />
                    <Route path="/Festival" element={<Festival />} />
                    <Route path="/Market" element={<Market />} />
                    <Route path="/RegistMenu" element={<RegistMenu />} />
                    <Route path='/search/:searchId' element={<Search />} />
                    <Route path="/LoginForm" element={<LoginForm />} />
                    <Route path="*" element={<Not />} />
                    <Route path="/Festival/:index" element={<FestivalMore />} />
                </Routes>
            </Suspense>
        </BrowserRouter>

    );
  }
  export default App;
