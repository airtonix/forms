import {
  ExtendedModel, prop, model
} from 'mobx-keystone'

import { FormDataFieldModel  } from './FormDataFieldModel'

export const FORMDATAFIELDPRIMITIVE_MODEL_KEY = 'formdatafield-primitive'

@model(FORMDATAFIELDPRIMITIVE_MODEL_KEY)
export class FormDataFieldPrimitiveModel extends ExtendedModel(FormDataFieldModel, {
  value: prop<string|number|boolean>()
}) {}
