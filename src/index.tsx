import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./styles/index.scss";
import Button from "../src/components/Button";
library.add(fas);
const App = () => {
    return (
        <div>
            <Button>123</Button>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("app"));

export { default as Button } from "./components/Button";
export default App;
