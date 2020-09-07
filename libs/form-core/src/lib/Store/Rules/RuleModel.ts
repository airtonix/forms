import {
  Model, prop, model
} from 'mobx-keystone'

export const FORMRULE_MODEL_KEY = 'formrule'

@model(FORMRULE_MODEL_KEY)
export class FormRuleModel extends Model({
  name: prop<string>(),
  action: prop<string>(),
}) {}
