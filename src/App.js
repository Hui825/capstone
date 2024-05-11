import React, {Suspense, lazy, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/page/Main';
import { useEffect } from 'react';

import { db } from './firebase';
import { getDoc, doc, collection, getDocs, getDocFromCache } from 'firebase/firestore'

const Home = lazy(() => import('./pages/Home'));
const Website = lazy(() => import('./pages/Mypage'));

const Festival = lazy(() => import('./pages/Festival Page/Festival'));

const Inner = lazy(() => import('./pages/Festival Page/Inner'));

const Market = lazy(() => import('./pages/Market Page/Market'));
const RegistMenu = lazy(() => import('./pages/Register/RegistMenu'));
const Search = lazy(() => import('./pages/Search/Search'));
const Not = lazy(() => import('./pages/ETC/Not'));
const LoginForm = lazy(() => import('./pages/Login Page/LoginForm'));



const App = () => {

    let [a,b] = useState('안녕요');

    return (
        <BrowserRouter>
            <Suspense fallback={<Main />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/website" element={<Website />} />
                    <Route path="/Festival" element={<Festival />} />
                    <Route path="/Inner" element={<Inner />} />
                    <Route path="/Market" element={<Market />} />
                    <Route path="/RegistMenu" element={<RegistMenu />} />
                    <Route path='/search/:searchId' element={<Search />} />
                    <Route path="/LoginForm" element={<LoginForm />} />
                    <Route path="*" element={<Not />} />
                </Routes>
            </Suspense>
        </BrowserRouter>

    );
  }
  export default App;
