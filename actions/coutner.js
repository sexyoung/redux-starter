// 定義 constant (常數)
const INCREMENT = 'INCREMENT';

export function increment(value = 1) {
  return {
    type: INCREMENT,
    value
  }
}
