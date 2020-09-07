import {
  prop, model, ExtendedModel
} from 'mobx-keystone'

import { LayoutModel } from './LayoutModel'

export const LAYOUTFIELD_MODEL_KEY = 'layoutfield'

@model(LAYOUTFIELD_MODEL_KEY)
export class LayoutFieldModel extends ExtendedModel(LayoutModel, {
  name: prop<string>(),
  title: prop<string>(),
  description: prop<string>(),
}) {}
