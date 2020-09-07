import {
  Model, prop, model, modelAction
} from 'mobx-keystone'
import * as flat from 'flat'

import { LayoutFormModel } from '../Layout/LayoutFormModel'
import { FormDataFieldPrimitiveModel } from '../FormDataField/FormDataFieldPrimitiveModel'
import { FormRuleModel } from '../Rules/RuleModel'
import { computed } from 'mobx'

export const FORM_MODEL_KEY = 'form'

@model(FORM_MODEL_KEY)
export class FormModel extends Model({
  /**
   * User Interface
   */
  layout: prop<LayoutFormModel|undefined>(),

  /**
   * Form Data
   */
  data: prop<FormDataFieldPrimitiveModel[]>(() => []),

  /**
   * Form Rules
   */
  rules: prop<FormRuleModel[]>(() => []),
}) {

  @modelAction
  submit (formData) {
    console.log(formData)
  }

  // TODO: implement a property transform here instead
  // https://mobx-keystone.js.org/propertyTransforms
  @modelAction
  change (formData): void {
    const flattened = flat(formData)
    Object.keys(flattened)
      .reduce((newFields, fieldId) => {
        const field = this.data.find(field => fieldId === field.fieldId)
        if (field) {
          field.value = flattened[fieldId]
        }
        return [...newFields, fieldId]
      }, [])
      .forEach(newFieldId => {
        const newField = new FormDataFieldPrimitiveModel({
          fieldId: newFieldId,
          value: flattened[newFieldId]
        })
        this.data.push(newField)
      })
  }

  // TODO: implement a property transform here instead
  // https://mobx-keystone.js.org/propertyTransforms
  @computed
  get formData (): any {
    const flattened = this.data.reduce((result, field) => ({
      ...result,
      [field.fieldId]: field.value
    }), {})

    return flat.unflatten(flattened)
  }

  @computed
  get schema (): any {
    return {}
  }

  @computed
  get uiSchema (): any {
    return {}
  }
}
