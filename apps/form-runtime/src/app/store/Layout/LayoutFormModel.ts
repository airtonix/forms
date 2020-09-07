import {
  prop, model, ExtendedModel
} from 'mobx-keystone'

import { LayoutModel } from './LayoutModel'
import { LayoutPageModel } from './LayoutPageModel'

export const LAYOUTFORM_MODEL_KEY = 'layout-form'

@model(LAYOUTFORM_MODEL_KEY)
export class LayoutFormModel extends ExtendedModel(LayoutModel, {
  name: prop<string>(),
  pages: prop<LayoutPageModel[]>(() => [])
}) {}
