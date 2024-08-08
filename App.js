import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// JSX - (transpiled before it reaches the JS) - Parcel - Babel
// JSX => Babel transpiles it to React.createElement => ReactElement(JS Object) => HTMLElement(render)

//React Element
const heading = ( 
    <h1 className="head" tabIndex="5">
        Namaste React Using JSX 🚀
    </h1>
);

//React Functional Component
const Title = () => ( 
    <h1 className="head" tabIndex="5">
        Namaste React Using JSX 🚀
    </h1>
);

const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1 className="heading">
            Namaste React Functional Component
        </h1>
    </div>
)

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(
    <StrictMode>
        <HeadingComponent/>
    </StrictMode>
)