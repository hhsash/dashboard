import { Route, Routes } from 'react-router-dom';
import Layout from './layouts';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Settings from './pages/Settings';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='' element={<Home />} />
                <Route path='orders' element={<Orders />} />
                <Route path='settings' element={<Settings />} />
                {/* <Route path='*' element={<NotFound />} /> */}
            </Route>
        </Routes>
    );
}

export default App;
