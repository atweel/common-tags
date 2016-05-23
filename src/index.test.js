'use strict'

import test from 'ava'

import {
  TemplateTag,
  trimResultTransformer,
  stripIndentTransformer,
  replaceResultTransformer,
  inlineArrayTransformer,
  splitStringTransformer,
  commaLists,
  commaListsAnd,
  commaListsOr,
  html,
  inlineLists,
  oneLineInlineLists,
  oneLine,
  oneLineCommaLists,
  oneLineCommaListsAnd,
  oneLineCommaListsOr,
  oneLineTrim,
  stripIndent,
  stripIndents
} from './'

test('common-tags exports all the right modules', (t) => {
  const exports = [
    TemplateTag,
    trimResultTransformer,
    stripIndentTransformer,
    replaceResultTransformer,
    inlineArrayTransformer,
    splitStringTransformer,
    commaLists,
    commaListsAnd,
    commaListsOr,
    html,
    inlineLists,
    oneLine,
    oneLineInlineLists,
    oneLineCommaLists,
    oneLineCommaListsAnd,
    oneLineCommaListsOr,
    oneLineTrim,
    stripIndent,
    stripIndents
  ]

  t.plan(exports.length)

  exports.forEach((module) => {
    t.true(typeof module === 'function')
  })
})
