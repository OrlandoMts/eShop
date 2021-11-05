import React from 'react';
import '../styles/global.scss';
import {Layout} from '../containers/Layout';
import {Login} from '../containers/Login'

function App() {
    return (
        <div>
            <Layout>
                <Login />
            </Layout>
        </div>
    )
}

export default App
