import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './FormInputStyles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''} `}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
