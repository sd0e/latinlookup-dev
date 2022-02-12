import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>
        </Layout>
    );
}

export default App;