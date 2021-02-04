import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ContactForm from './ContactForm';
import { act } from "react-dom/test-utils";

test('renders Form', () => {
    render(<ContactForm />);
})

test('renders all form inputs', async () => {
    render(<ContactForm />);

    // test form config i.e. htmlFor=id for label > inputs
    const fNameInput = screen.getByLabelText(/first name/i);
    const lNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const msgTxt = screen.getByLabelText(/message/i);

    // test for placeholders
    const fNamePH = screen.getByPlaceholderText(/edd/i);
    const lNamePH = screen.getByPlaceholderText(/burke/i);
    const emailPH = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);

    // onChange
    act( () => {
       
        fireEvent.change(fNameInput, {target: {value: 'Aaron'}});
        fireEvent.change(lNameInput, {target: {value: 'Burns'}});
        fireEvent.change(emailInput, {target: {value: 'abc@123.xyz'}});
        fireEvent.change(msgTxt, {target: {value: 'This is a message in a test'}});
 
    });
    // test that form updates
    expect(fNameInput).toHaveValue('Aaron');
    expect(lNameInput).toHaveValue('Burns');
    expect(emailInput).toHaveValue('abc@123.xyz');
    expect(msgTxt).toHaveValue('This is a message in a test');

    
    // config assertions
    expect(fNameInput).toBeTruthy();
    expect(lNameInput).toBeTruthy();
    expect(emailInput).toHaveAttribute('placeholder', expect.stringContaining('bluebill'));
    expect(msgTxt).toBeTruthy;


    // placeholders assertion
    expect(fNamePH).toBeTruthy();
    expect(lNamePH).toBeTruthy();
    expect(emailPH).toBeTruthy();

    // button
    const subBut = screen.getByText(/submit/i);

    expect(subBut).toBeTruthy();
    act( () => {
        fireEvent.click(subBut);
    });

    // const newContact = await screen.findByTestId('readout');

    // expect(newContact).toHaveTextContent('Aaron')

    // expect(newContact).toHaveTextContent(/burns/i);




})