import { FC } from "react";

interface MyComponentProps {
    name: string;
    age?: number;
    greeting: string;
}

 const FunctionalComponent: FC<MyComponentProps> = (
    { name, age = 18, greeting }
) => {
    return (
        <div>
            <h1>{greeting}, {name}!</h1>
            <p>Age: {age}</p>
        </div>
    );
};

export default FunctionalComponent