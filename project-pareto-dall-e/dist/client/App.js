"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const home_1 = require("./pages/home");
const NotFound_1 = require("./pages/NotFound");
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement("p", null, "Pareto Image Generatior"),
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { index: true, element: React.createElement(home_1.default, null) }),
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(home_1.default, null) },
                React.createElement(react_router_dom_1.Route, { path: "/*", element: React.createElement(NotFound_1.default, null) })))));
}
exports.default = App;
//# sourceMappingURL=App.js.map