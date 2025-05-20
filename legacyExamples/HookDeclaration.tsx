import { FC, useState, createContext, useContext } from "react";

interface MyComponentProps {
    name: string;
    age?: number;
    greeting: string;
}

interface Users {
    name: string;
    login: string;
    email: string;
}

type ThemeContextType = "light" | "dark";
const ThemeContext = createContext<ThemeContextType>("light");


const MyComponent = () => {
    const theme = useContext(ThemeContext);
    return <p>The current theme is {theme}.</p>;
};

const FunctionalComponent: FC<MyComponentProps> = (
    { name, age, greeting }
) => {
    const [users, setUsers] = useState<Users[]>([]);
    // const [users, setUsers] = useState<Users[]>([ 
    //     {
    //         name: "Jimmothy",
    //         login: "Jim",
    //         email: "Jimmothy@example.com"
    //     }
    // ]);
    const [theme, setTheme] = useState<ThemeContextType>("light");

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h1>{greeting}, {name}!</h1>
                <p>Age: {age}</p>
            </div>
            <MyComponent />
        </ThemeContext.Provider>
    );
};

export default FunctionalComponent