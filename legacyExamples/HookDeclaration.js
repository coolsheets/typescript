"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ThemeContext = (0, react_1.createContext)("light");
const MyComponent = () => {
    const theme = (0, react_1.useContext)(ThemeContext);
    return (0, jsx_runtime_1.jsxs)("p", { children: ["The current theme is ", theme, "."] });
};
const FunctionalComponent = ({ name, age, greeting }) => {
    const [users, setUsers] = (0, react_1.useState)([]);
    // const [users, setUsers] = useState<Users[]>([ 
    //     {
    //         name: "Jimmothy",
    //         login: "Jim",
    //         email: "Jimmothy@example.com"
    //     }
    // ]);
    const [theme, setTheme] = (0, react_1.useState)("light");
    return ((0, jsx_runtime_1.jsxs)(ThemeContext.Provider, { value: theme, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h1", { children: [greeting, ", ", name, "!"] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Age: ", age] })] }), (0, jsx_runtime_1.jsx)(MyComponent, {})] }));
};
exports.default = FunctionalComponent;
