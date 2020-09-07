import React from 'react'
import { observer } from 'mobx-react'

import { Form } from './Form'

@observer
export class FormContainer extends React.Component {
  render () :React.ReactNode {
    return (
      <Form
        schema={dataSchema}
        uiSchema={uiSchema}
        formData={formData}
        onChange={onFormDataChange}
        {...props}
      />
    )
  }
}
