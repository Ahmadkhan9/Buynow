import React from 'react'
import { FontInputLabel, Group, Input } from './forminput.style'
const FormInput = ({title , ...props}) => {
  return (
    <Group>
    {title && (<FontInputLabel shrink={props.value.length}>{title}</FontInputLabel>)}
    <Input  {...props}/>
    </Group>
  )
}

export default FormInput