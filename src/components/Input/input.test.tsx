import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { InputProps } from "./interface";
import Input from "./index";
import { prefixClassName } from "../utils/constants"


const defaultProps: InputProps ={
    onChange: jest.fn(),
    placeholder: "test-input"
}

describe("test Input component", () => {
    it("should render the correct default input", () => {
        const wrapper = render(<Input {...defaultProps}/>);
        const defaultNode = wrapper.getByPlaceholderText("test-input") as HTMLInputElement;

        expect(defaultNode).toBeInTheDocument();
        expect(defaultNode).toHaveClass(`${prefixClassName}-input-inner`);
        fireEvent.change(defaultNode, { target: { value: "123" }});
        expect(defaultProps.onChange).toHaveBeenCalled();
        expect(defaultNode.value).toEqual("123");
    });

    it("should render the prefix input", ()=> {
        const wrapper = render(<Input {...defaultProps} prefix={<div>111</div>}/>)
        const input = wrapper.getByPlaceholderText("test-input") as HTMLInputElement;
        const prefix = wrapper.getByText("111");
        expect(input).toBeInTheDocument();
        expect(prefix.parentNode).toHaveClass(`${prefixClassName}-input-prefix`);
        fireEvent.change(input, { target: { value: "123" }});
        expect(defaultProps.onChange).toHaveBeenCalled();
        expect(input.value).toEqual("123");
    })

    it("should render the suffix input", ()=> {
        const wrapper = render(<Input {...defaultProps} suffix={<div>111</div>}/>)
        const input = wrapper.getByPlaceholderText("test-input") as HTMLInputElement;
        const suffix = wrapper.getByText("111");
        expect(input).toBeInTheDocument();
        expect(suffix.parentNode).toHaveClass(`${prefixClassName}-input-suffix`);
        fireEvent.change(input, { target: { value: "123" }});
        expect(defaultProps.onChange).toHaveBeenCalled();
        expect(input.value).toEqual("123");
    })
})
