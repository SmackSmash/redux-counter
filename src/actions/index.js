import types from './types';

export const increment = () => ({ type: types.INCREMENT });
export const decrement = () => ({ type: types.DECREMENT });
export const reset = () => ({ type: types.DECREMENT });
export const add = number => ({ type: types.ADD, payload: number });
