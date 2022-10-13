import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

export const FilterBox = ({ value, onChange }) => {
        return (
            <FilterLabel>Find contacts by name <br/>
                <FilterInput
                    type="text"
                    name="name"
                    value={value}
                    onChange={onChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required/>
            </FilterLabel>
        )
}
    
FilterBox.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}