import {
  prop, model, ExtendedModel
} from 'mobx-keystone'

import { LayoutModel } from './LayoutModel'
import { LayoutSectionModel } from './LayoutSectionModel'

export const LAYOUTPAGE_MODEL_KEY = 'layout-page'

@model(LAYOUTPAGE_MODEL_KEY)
export class LayoutPageModel extends ExtendedModel(LayoutModel, {
  sections: prop<LayoutSectionModel[]>(() => [])
}) {}
