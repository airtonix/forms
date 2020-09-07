import React from 'react'
import ReactJsonSchemaForm from 'react-jsonschema-form'


export interface IFormPropTypes extends React.ReactPropTypes {}

export function Form (props: IFormPropTypes): React.ReactElement {
  return (
    <ReactJsonSchemaForm
      {...props}
    />
  )
}
