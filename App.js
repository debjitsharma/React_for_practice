// import React from "react";
import ReactDOM from "react-dom/client";
const a=100;
const Bravo= () => <h1 className="my name" tabIndex="5">Bravo is here</h1>
const dev= (<span>go go power rangers<Bravo/></span>)
const Parent= () => (<><Bravo/><h1 className="my name" tabIndex="5">This is me Nested Function Componenet</h1></>)
const Heading = () => (<><Parent/>{dev} <h1>This is me Function Componenet</h1></>);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
