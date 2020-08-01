import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./styles/index.scss";
import Button from "../src/components/Button";
import Input from "../src/components/Input";
import Radio from "./components/Radio";
import Icon from "./components/Icon";

library.add(fas);
const App = () => {
    enum E {
        A,
        B,
    }
    const getIndex = (enumObj: { A: number }): number => {
        return enumObj.A;
    };
    console.log(getIndex(E)); // 0

    return (
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
            <Button>123</Button>
            <Input
                prefix={<Icon theme="primary" icon={["fas", "search"]} style={{ fontSize: "18px" }} />}
                placeholder="请输入关键字"
                style={{width: "200px"}}
                size="lg"
            />
            <Input  size="sm"  style={{width: "200px"}} suffix={<Icon theme="primary" icon={["fas", "search"]} style={{ fontSize: "18px" }} />} />
            {/* <Input suffix={<div>1123</div>} />
            <Input />
            <Radio value="1">123456</Radio>
            <Radio value="2">123456</Radio>
            <Icon theme="success" icon={["fas", "coffee"]} style={{ fontSize: "18px" }} /> */}
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("app"));

export { default as Button } from "./components/Button";
export default App;
