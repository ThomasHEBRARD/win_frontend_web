import React from 'react';
import styled from '@emotion/styled';

const DefaultTextField = styled.input`
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: solid 1px #e8e8e8;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    padding: 4px 0 4px 0;

    &:hover {
    }

    &:focus {
        border-bottom: solid 1px blue;
    }

`;

type FieldVariant = 'outlined' | 'default';
const getFieldVariant = {
    outlined: DefaultTextField,
    default: DefaultTextField,
};

export interface InputFieldProps {
    value: string;
    variant?: FieldVariant;
    style?: React.CSSProperties;
    disabled?: boolean;
    placeholder?: string;
    name?: string;
    type?: string;
    autoComplete?: string;
    onChange: (value: string) => void;
    onBlur?: () => void;
    onKeyDown?: (e: any) => void;
    autoFocus?: boolean;
}

const InputField = (props: InputFieldProps) => {
    const { variant = 'outlined', onChange, ...rest } = props;

    const StyledInputField = variant ? getFieldVariant[variant] : getFieldVariant.default;

    return <StyledInputField onChange={e => onChange(e.currentTarget.value)} {...rest} />;
};

export default InputField;