import {
  ExtendedModel, prop, model
} from 'mobx-keystone'

import { LayoutModel } from './LayoutModel'
import { LayoutFieldModel } from './LayoutFieldModel'

export const LAYOUTSECTION_MODEL_KEY = 'layoutsection'

@model(LAYOUTSECTION_MODEL_KEY)
export class LayoutSectionModel extends ExtendedModel(LayoutModel, {
  name: prop<string>(),
  title: prop<string>(),
  fields: prop<LayoutFieldModel[]>(() => []),
}) {}
