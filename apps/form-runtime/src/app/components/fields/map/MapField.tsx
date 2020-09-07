import React from 'react'


export interface IMapFieldPropTypes extends React.ReactPropTypes {}

export function MapField (props: IMapFieldPropTypes): React.ReactNode {
  return (
    <pre>
      MapField:
      { JSON.stringify(props, null, 2)}
    </pre>
  )
}
