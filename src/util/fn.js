import {
  memoizeWith,
  identity,
} from 'ramda';

export const mem = fn => memoizeWith( identity, fn );
