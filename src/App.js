import React, {Suspense, lazy} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/page/Main';

const Home = lazy(() => import('./pages/Home'));
const Website = lazy(() => import('./pages/Mypage'));

const Festival = lazy(() => import('./pages/Festival Page/Festival'));


const Market = lazy(() => import('./pages/Market Page/Market'));
const RegistMenu = lazy(() => import('./pages/Register/RegistMenu'));
const Search = lazy(() => import('./pages/Search/Search'));
const Not = lazy(() => import('./pages/ETC/Not'));
const LoginForm = lazy(() => import('./pages/Login Page/LoginForm'));


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
                </Routes>
            </Suspense>
        </BrowserRouter>

    );
}

export default App;