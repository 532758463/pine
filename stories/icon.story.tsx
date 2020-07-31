import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../src/components/Button";
import Icon from "../src/components/Icon"



const IconUse = () => (
    <>  
    
           <Icon theme="success"  icon="coffee"  style={{fontSize:"18px"}}/>
    </>
);

// const IconLight = () => {
//    return <Icon theme="success" icon={["fal", "coffee"]} style={{fontSize:"18px"}}/>
// }

// const IconRegular = () => {
//   return  <Icon theme="success" icon={["far", "coffee"]} style={{fontSize:"18px"}}/>
// }

const IconSolid = () => {
   return <Icon theme="success" icon={["fas", "coffee"]}  style={{fontSize:"18px"}}/>
}


storiesOf("Icon", module)
    .add("Icon use", IconUse)
    // .add("Icon light", IconLight)
    // .add("Icon regular", IconRegular)
    .add("Icon solid", IconSolid)