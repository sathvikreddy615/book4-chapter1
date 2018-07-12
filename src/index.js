import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import registerServiceWorker from "./registerServiceWorker";
import KennelCompany from "./KennelCompany";
import css from "./index.css";

ReactDOM.render((
<Router>
    <KennelCompany />
</Router>
), document.querySelector("#root"));

registerServiceWorker()
