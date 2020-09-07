import React from 'react'
import { observer } from 'mobx-react'

import { Form } from './Form'

@observer
export class FormContainer extends React.Component {
  handleChange = (formData) => {
    const {
      store
    } = this.props

    store.change(formData)
  }

  handleSubmit = (formData) => {
    const {
      store
    } = this.props

    store.submit(formData)
  }

  render () :React.ReactNode {
    const {
      store
    } = this.props

    return (
      <Form
        schema={store.dataSchema}
        uiSchema={store.uiSchema}
        formData={store.formData}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    )
  }
}
