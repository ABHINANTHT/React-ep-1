import React from "react";
import ReactDOM from "react-dom/client"

const parent =  React.createElement(
    "div", 
    {id: "parent"},  

   [
    React.createElement(
        "div", 
        {id: "chaild"},

        [

            React.createElement(
                "h1", {}, "Hello World This Me H1 Tag"),
            React.createElement(
                "h2", {}, "Hello World This Me H1 Tag"),
        ]
       

   
    ),
    React.createElement(
        "div", 
        {id: "chaild2"},

        [

            React.createElement(
                "h1", {}, "Hello World This Me H1 Tag"),
            React.createElement(
                "h2", {}, "Hello World This Me H1 Tag"),
        ]
       

   
    ),
   ]
       
);
  
console.log(parent);
    

   

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);
