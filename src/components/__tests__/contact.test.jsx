import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test('should load Contact Us Component', () => { 
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeIn
 })

test('should load Contact Us Component', () => { 
    render(<Contact />);

    const submit = screen.getByText("Submit");

    expect(submit).toBeInTheDocument();
 })

test('should load Contact Us Component', () => { 
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
 })

test('should load 2 inputBoxes on the Contact Us Component', () => { 
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes);

    // inputBoxes.map((input) => expect(input).toBeInTheDocument());

    expect(inputBoxes.length).not.toBe(3);
    expect(inputBoxes.length).toBe(2);

 })