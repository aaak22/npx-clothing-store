import React from 'react'
// import  './form-input.styles.scss'
import { Group, FormInputLabel, FormInputField  } from './form-input.styles'; 

const FormInput = ({ label, ...inputOptions }) => {
  return (
    <Group>
        <FormInputField {...inputOptions} />
        {label && (
            <FormInputLabel shrink={inputOptions.value.length}>{label}</FormInputLabel>
        )}
    </Group>
  )
}

export default FormInput;