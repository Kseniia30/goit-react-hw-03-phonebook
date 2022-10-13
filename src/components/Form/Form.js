import { nanoid } from "nanoid";
import { Component } from "react";
import { FormBox, LabelBox, MainInput, AddBTN } from "./Form.styled";

export class SubmitForm extends Component {
    state = {
        name: "",
        number: ''
    }
    handleChange = evt => {
        const { name, value } = evt.target
        this.setState({ [name]: value })
    }

    onFormSubmit = evt => {
        evt.preventDefault()
        const contact = {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number
        }
        this.props.onSubmit(contact)
        console.log(contact);
        this.reset()
    }
    reset = () => {
        this.setState({
            name: "",
            number: ""
        })
    }

    render() {
        const {name, number} = this.state
        return (
            <FormBox onSubmit={this.onFormSubmit}>
                <LabelBox>Name <br/>
                    <MainInput
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required/>
                </LabelBox> <br/>
                <LabelBox>Number <br/>
                    <MainInput
                        type="tel"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required/>
                </LabelBox> <br/>
                <AddBTN type="submit">Add contact</AddBTN>
            </FormBox>
        )}
}