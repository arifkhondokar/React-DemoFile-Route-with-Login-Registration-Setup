import { TextField } from '@mui/material'
import React from 'react'

const MuiInput = ({variant, labeltext, style, type, value, name, onChange, id}) => {
  return (
    <>
    <TextField onChange={onChange} className={style} value={value} variant={variant} label={labeltext}  type={type} name={name}  />
    </>
  )
}

export default MuiInput