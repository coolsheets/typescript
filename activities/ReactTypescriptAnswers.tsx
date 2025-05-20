// Activity 1: Create a Basic Typed Component
// Task: Create a functional component that takes a required name prop and displays a greeting.
// Greeting.tsx
import React from "react";

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;



// Activity 2: Optional Prop Practice
// Task: Add an optional age prop that conditionally displays a sentence.
import React from "react";

interface UserInfoProps {
  name: string;
  age?: number;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      {age && <p>Age: {age}</p>}
    </div>
  );
};

export default UserInfo;



// Activity 3: useState with Type
// Task: Build a counter using useState with type number.
import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default Counter;



// Activity 4: useEffect with useState
// Task: Create a timer that increases every second.
import React, { useState, useEffect } from "react";

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>Time: {seconds}s</p>;
};

export default Timer;


// Activity 5: Type an Event Handler
// Task: Create a text input that logs the typed value. Type the change event correctly.
import React from "react";

const TextInput: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return <input type="text" onChange={handleChange} />;
};

export default TextInput;



// Activity 6: Use useRef with a DOM Element
// Task: Focus an input on component mount.
import React, { useRef, useEffect } from "react";

const FocusInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} type="text" placeholder="Type here..." />;
};

export default FocusInput;



// Activity 7: Button Component with Typed Props
// Task: Create a reusable button component with a label and click handler.
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

export default CustomButton;


// Activity 8: Context API with TypeScript
// Task: Create and use a context to show the current user name.
// UserContext.tsx
import React, { createContext, useContext } from "react";

interface UserContextType {
  name: string;
  isLoggedIn: boolean;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC = ({ children }) => {
  const user = { name: "Jimmothy", isLoggedIn: true };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);

// UserProfile.tsx
import React from "react";
import { useUser } from "./UserContext";

const UserProfile: React.FC = () => {
  const user = useUser();

  if (!user) return <div>No user data</div>;
  return <h1>Welcome, {user.name}!</h1>;
};

export default UserProfile;