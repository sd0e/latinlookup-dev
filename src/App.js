import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Redirect to="/" />
            </Switch>
        </Layout>
    );
}

export default App;