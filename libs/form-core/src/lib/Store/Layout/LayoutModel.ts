import {
  Model, prop, model
} from 'mobx-keystone'

export const LAYOUT_MODEL_KEY = 'layout'

@model(LAYOUT_MODEL_KEY)
export class LayoutModel extends Model({
  name: prop<string>(),
}) {}
