import React from 'react'
import { render } from 'react-dom'
import { documentReady } from 'html-ready'
import { Provider } from 'mobx-react'

import { ErrorBoundary } from './app/components/ErrorBoundary'
import { FormContainer } from './app/components/FormContainer'
import { StoreFactory } from './app/store'

export interface IMountOptions {
  selector: string
}

export function mount (options: IMountOptions):void {
  const {
    selector = '[data-form-runtime]',
  } = options
  const elements:HTMLElement[] = Array.from(document.querySelectorAll(selector))

  Array.from(elements)
    .forEach((element:HTMLElement) => {
      const { value, ...props } = element.dataset || {}
      const stores = StoreFactory()
      const instance = (
        <ErrorBoundary>
          <Provider {...stores}>
            <FormContainer
              { ...props }
            />
          </Provider>
        </ErrorBoundary>
      )

      render(instance, element.parentElement)
    })
}

documentReady.then(() => {
  mount()
})
