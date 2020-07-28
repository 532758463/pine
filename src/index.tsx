import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./styles/index.scss";
import Button from "../src/components/Button";
import Input from "../src/components/Input";
import Radio from "./components/Radio"

library.add(fas);
const App = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-around", marginTop:"20px"}}>
            <Button>123</Button>
            <Input/>
            <Radio>
                123456
            </Radio>
            <Radio>
                123456
            </Radio>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("app"));

export { default as Button } from "./components/Button";
export default App;
