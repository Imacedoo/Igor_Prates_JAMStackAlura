import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import propToStyle from '../../../theme/utils/propToStyle';

const InputWrapper = styled.div`
  margin-top: 14px;
`;

const Input = styled(Text)`
  width: 100%;
  padding: 12px 16px;
  border: none;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.secondary.main.contrastText};
  margin-top: 4px;
  height: 40px;
  ${propToStyle('height')};
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  label,
  tag,
  errorMessage,
  ...props
}) {
  return (
    <InputWrapper>
      <label htmlFor={name}>{label}</label>
      <Input
        as={tag}
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...props}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tag: PropTypes.string,
  errorMessage: PropTypes.string.isRequired,
};

TextField.defaultProps = {
  placeholder: '',
  tag: 'input',
};
