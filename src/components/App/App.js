import { ContactSection } from "components/ContactSection/ContactSection";
import { SubmitForm } from "components/Form/Form";
import { Component } from "react";
import { Container, Title } from "./App.styled";

export class AppForm extends Component {
    state = {
        contacts: [],
        filter: ''
    }
    addFormInfo = (contact) => {
        if(!this.isInBook(contact.name)) {
            this.setState({ contacts: [contact, ...this.state.contacts] })
        }
        else {alert(`${contact.name} is already in contacts`)}
        
    }
    isInBook = name => {
        return this.state.contacts.find(contact => {
            return contact.name.toLowerCase() === name.toLowerCase()
        })
    }
    filterChange = evt => {
        this.setState({
            filter: evt.currentTarget.value
        })
    }
    filter = () => {
        const { filter, contacts } = this.state;
        const normalizedFilter = filter.toLowerCase();
        if (filter.length) {
            return contacts.filter(contact =>
                contact.name.toLowerCase().includes(normalizedFilter),
            )
        } else {
            return contacts;
        }
    }
    onDeleteContact = id => {
        this.setState(prevValue => ({
            contacts: prevValue.contacts.filter(contact => contact.id !== id)
        }))
    }

    componentDidMount() {
        const parsedContacts = JSON.parse(localStorage.getItem("contacts"))
        if (parsedContacts) {
            this.setState({contacts: parsedContacts})
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const newContacts = this.state.contacts
        const prevContacts = prevState.contacts

        if (newContacts !== prevContacts) {
            localStorage.setItem("contacts", JSON.stringify(newContacts))
        }
    }

    render() {
        return (
            <Container>
                <Title>Phonebook</Title>
                <SubmitForm onSubmit={this.addFormInfo} />

                {this.state.contacts.length !==0 ?
                    (<ContactSection value={this.state.filter} onChange={this.filterChange} filter={this.filter} onDelete={this.onDeleteContact} />) : null}
            </Container>
        )
    }
}