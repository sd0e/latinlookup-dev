import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
    const [searchBoxOpen, setSearchBoxOpen] = useState(false);

    return (
        <Layout searchBoxOpen={searchBoxOpen} setSearchBoxOpen={setSearchBoxOpen}>
            <Routes>
                <Route path="/" exact element={<Home searchBoxOpen={searchBoxOpen} setSearchBoxOpen={setSearchBoxOpen} />} />
            </Routes>
        </Layout>
    );
}

export default App;