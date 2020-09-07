import {
  Model, prop, model
} from 'mobx-keystone'

import { LayoutFormModel } from '../Layout/LayoutFormModel'
import { FormDataFieldPrimitiveModel } from '../FormDataField/FormDataFieldPrimitiveModel'
import { FormDataFieldModel } from '../FormDataField/FormDataFieldModel'

export const FORM_MODEL_KEY = 'form'

@model(FORM_MODEL_KEY)
export class FormModel extends Model({
  layout: prop<LayoutFormModel|undefined>(),
  data: prop<FormDataFieldPrimitiveModel|FormDataFieldModel[]>(() => [])
}) {}
