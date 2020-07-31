import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./styles/index.scss";
import Button from "../src/components/Button";
import Input from "../src/components/Input";
import Radio from "./components/Radio";
import Icon from "./components/Icon"

library.add(fas);
const App = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
            <Button>123</Button>
            <Input prefix={<div>1123</div>}/>
            <Input suffix={<div>1123</div>}/>
            <Input />
            <Radio value="1">123456</Radio>
            <Radio value="2">123456</Radio>
            <Icon theme="success" icon={["fas", "coffee"]} style={{fontSize:"18px"}}/>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("app"));

export { default as Button } from "./components/Button";
export default App;
