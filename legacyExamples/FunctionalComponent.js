"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const FunctionalComponent = ({ name, age = 18, greeting }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h1", { children: [greeting, ", ", name, "!"] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Age: ", age] })] }));
};
exports.default = FunctionalComponent;
