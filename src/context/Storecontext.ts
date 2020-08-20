import {createContext} from "react"

import store from '../store/index'
// 创建消费者
export default createContext(store)