"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("../App");
describe('App', function () {
    it('renders without crashing', function () {
        var div = document.createElement('div');
        ReactDOM.render(<App_1["default"] />, div);
    });
});
