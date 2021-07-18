import Styled from 'styled-components';
import PropTypes from 'prop-types';

export const SearchInput = Styled.input`
    -webkit-appearance: none;
    outline: none;

    border: 1px solid gray;
    border-radius: 20px;
    padding: 10px 15px;

    min-width: 400px;
    height: 20px;

    font-style: italic;
`;


SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func,
}
