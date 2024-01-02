import React from "react";
class ClassComponentDemo extends React.Component{
    render(){
        console.log("render()")
        return(
            <h1>Class Component</h1>
        );
    }
    constructor(){
        super()
        console.log("constructor()")
    }
}
export default ClassComponentDemo;