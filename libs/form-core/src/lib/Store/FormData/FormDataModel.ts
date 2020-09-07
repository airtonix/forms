import {
  Model, prop, model
} from 'mobx-keystone'

import { FormDataFieldModel } from '../FormDataField/FormDataFieldModel'

export const FORMDATA_MODEL_KEY = 'formdata'

export interface IFormData { [key: string]: any }

@model(FORMDATA_MODEL_KEY)
export class FormDataModel extends Model({
  fields: prop<FormDataFieldModel[]>(() => [])
}) {

  toJSON (): IFormData {
    return this.fields.reduce((result, field) => ({
      ...result,
      [field.id]: field.toJSON()
    }), {})
  }
}
