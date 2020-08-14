import {BrowserRouter} from 'react-router-dom'

import React from 'react'

import RouterView from './router-view'

import RouterConfig from './router-config'

function Router() {
    return <BrowserRouter>
        <RouterView routes={RouterConfig}></RouterView>
    </BrowserRouter>
}

export default Router