import {
  Model, prop, model
} from 'mobx-keystone'
import { uniqueId } from 'lodash'

export const FORMDATAFIELD_MODEL_KEY = 'formdatafield'

@model(FORMDATAFIELD_MODEL_KEY)
export class FormDataFieldModel extends Model({
  type: prop<string>(),
  id: prop<string>(() => uniqueId()),
  fieldCode: prop<string|undefined>(),
  name: prop<string>(),
}) {

  toJSON (): any {
    return {
      id: this.id,
    }
  }
}
