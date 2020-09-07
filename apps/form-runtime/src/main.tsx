import React from 'react'
import { render } from 'react-dom'
import { documentReady } from 'html-ready'

import { FormRuntime } from './app/app'

export interface IMountOptions {
  selector?: string
}

export function mount (options?: IMountOptions):void {
  const {
    selector = '[data-form-runtime]',
  } = options || {}
  const elements:HTMLElement[] = Array.from(document.querySelectorAll(selector))

  Array.from(elements)
    .forEach((element:HTMLElement) => {
      // TODO: replace with ElementDataSetConfig
      const { ...props } = element.dataset || {}
      render(<FormRuntime { ...props } />, element.parentElement)
    })
}

documentReady.then(() => {
  mount()
})
