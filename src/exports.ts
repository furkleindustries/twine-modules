import {
  parse,
} from 'css';
import {
  parseModule,
} from 'esprima';
import {
  Map,
} from 'immutable';
import {
  TAbstractSyntaxTree,
} from '../node_modules/twine-tree/src/AbstractSyntaxTree/TAbstractSyntaxTree';

export interface IModuleContext {
  dontCache?: true;
  cache?: Map<string, any>;
  passages: Map<string, TAbstractSyntaxTree>;
}

export function require(passageName: string, context: IModuleContext) {
  let value;
  if (typeof context !== 'object' || !context) {
    throw new Error('Invalid invocation. No context was provided.');
  } else if (typeof context.cache === 'object' &&
    context.cache &&
    passageName in context.cache &&
    context.dontCache !== true)
  {
    value = this.cache[passageName];
  } else {
    const passage = context.passages.get(passageName);
    if (!passage) {
      throw new Error(`No passage named ${passageName} exists.`);
    }

    value = generateValue(passage);
  }

  if (typeof context.passages !== 'object' || !context.passages) {
    throw new Error('The context.passages property was not an object.');
  }

  if (typeof value === 'undefined') {
    
  }

  return value;
}

export function generateValue(passage: TAbstractSyntaxTree) {
  if (!Array.isArray(passage)) {
    throw new Error('The passage argument is not an array.');
  }

  if (passage)
}