<<<<<<< HEAD
import React from 'react';
import '../index.scss';
import RouteConfig from './route-config';
import RouterViews from './router-views';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <RouterViews routes = {RouteConfig.routes}></RouterViews>
        </BrowserRouter>
    </div>
  );
}

export default App;
=======
import React from 'react';
import '../index.scss';
import RouteConfig from './route-config';
import RouterViews from './router-views';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <RouterViews routes = {RouteConfig}></RouterViews>
        </BrowserRouter>
    </div>
  );
}

export default App;
>>>>>>> 77107653a473225fd6a03345c1a98c335d39c710
