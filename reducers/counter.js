/**
 * 定義 reducer
 * 它好像是 store 的一部分,
 * 只有 reducer 會改變整個 store 的內容
 * 另外 default 的意思就是專指回傳這個
 * 有人 import a from "./counter.js"
 * a 指的就是 counter()
 *
 * 但如果沒有寫 default
 * 那就要寫 import {counter} from "./counter.js"
 */
export default function counter(state=0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + action.value;
  default:
    return state;
  }
}