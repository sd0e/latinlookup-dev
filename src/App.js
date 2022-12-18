import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
    const [searchBoxOpen, setSearchBoxOpen] = useState(false);
    const [aboutBoxOpen, setAboutBoxOpen] = useState(false);
    const [refresh, setRefresh] = useState(false);

    return (
        <Layout searchBoxOpen={searchBoxOpen} setSearchBoxOpen={setSearchBoxOpen} aboutBoxOpen={aboutBoxOpen} setAboutBoxOpen={setAboutBoxOpen}>
            <Routes>
                <Route path="/" exact element={<Home searchBoxOpen={searchBoxOpen} setSearchBoxOpen={setSearchBoxOpen} setAboutBoxOpen={setAboutBoxOpen} setRefresh={setRefresh} refresh={refresh} />} />
            </Routes>
        </Layout>
    );
}

export default App;