import React from 'react'
import { Provider } from 'mobx-react'

import { ErrorBoundary } from './components/ErrorBoundary'
import { FormContainer } from './components/FormContainer'
import { StoreFactory } from '@forms/form-core'


export function FormRuntime (props) {
  const stores = StoreFactory()
  return (
    <ErrorBoundary>
      <Provider {...stores}>
        <FormContainer
          { ...props }
        />
      </Provider>
    </ErrorBoundary>
  )
}
