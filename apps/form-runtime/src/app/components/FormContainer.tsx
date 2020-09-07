import React, { ReactElement } from "react";

import { Form } from './Form'
import { useStore } from '../lib/store';

export function FormContainer({
  ...props
}): ReactElement {
  const store = useStore()

  const handleChange = (formData) => {
    store.change(formData)
  }

  const handleSubmit = (formData) => {
    store.submit(formData)
  }

  return (
    <Form
      {...props}
      schema={store.schema}
      uiSchema={store.uiSchema}
      formData={store.formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )
}
