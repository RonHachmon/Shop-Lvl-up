import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 250px;
    height: 30px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px;
    text-indent: 5px;
    font-size: 14px;
`;

interface InputProps {
    placeholder?: string;
    value?: string;
    onValueChanged: (value: string) => void
}

const Input = ({
    placeholder,
    value,
    onValueChanged
}: InputProps) => {
    const [searchValue, setSearchValue] = useState(value);

    const innerOnValueChanged = (inputValue: string) => {
        setSearchValue(inputValue);
        onValueChanged(inputValue)
    }

    useEffect(() => {
        setSearchValue(value);
    }, [value])

    return (
        <StyledInput
            type="text"
            placeholder={placeholder}
            value={searchValue}
            onChange={e=>innerOnValueChanged(e.target.value)}
        />
    )
}

export default Input;

Input.defaultProps = {
    placeholder: 'Search'
}