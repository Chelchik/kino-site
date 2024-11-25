import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import { lazy, Suspense } from 'react';
import Loader from '../src/components/Loader'

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('./components/Home'));
const Kino= lazy(() => import('./Kino/KinoPage'));

function App() {
    return (
        <div id="root">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <Suspense fallback={<Loader />}>
                        <Layout />
                        </Suspense>
                    }>
                        <Route index path='/' element={<Home />} />
                        <Route path='Kino/KinoPage/:id' element={
                            <Suspense fallback={<Loader />}>
                                <Kino /> 
                            </Suspense>
                        } />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
