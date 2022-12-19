import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import SwitchColorTheme from './scripts/SwitchColorTheme';

function App() {
    const [searchBoxOpen, setSearchBoxOpen] = useState(false);
    const [aboutBoxOpen, setAboutBoxOpen] = useState(false);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            SwitchColorTheme('DARK');
            setRefresh(Math.random());
        }
    }, []);

    return (
        <Layout searchBoxOpen={searchBoxOpen} setSearchBoxOpen={setSearchBoxOpen} aboutBoxOpen={aboutBoxOpen} setAboutBoxOpen={setAboutBoxOpen} refresh={refresh}>
            <Routes>
                <Route path="*" exact element={<Home searchBoxOpen={searchBoxOpen} setSearchBoxOpen={setSearchBoxOpen} setAboutBoxOpen={setAboutBoxOpen} setRefresh={setRefresh} refresh={refresh} />} />
            </Routes>
        </Layout>
    );
}

export default App;