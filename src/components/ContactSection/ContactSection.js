import { ContactList } from "components/ContactList/ContactList";
import { FilterBox } from "components/Filter/Filter";
import { TopText } from "components/App/App.styled";

export const ContactSection = ({value, onChange, filter, onDelete }) => {
    return (
        <>
        <TopText>Contacts</TopText>
        <FilterBox value={value} onChange={onChange}/>
        <ContactList filter={filter} onDelete={onDelete} />
        </>
    )
}