import React, { ReactElement } from 'react'

export interface IErrorBoundaryPropTypes {
  children: React.ReactElement
}
export const ErrorBoundary:React.StatelessComponent<IErrorBoundaryPropTypes> = (
  props: IErrorBoundaryPropTypes
) => {
  const {
    children
  } = props
  return children
}
