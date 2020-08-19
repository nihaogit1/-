import {useContext} from "react"

import storeContext from "../context/Storecontext"
const useStore = () =>{
    return useContext(storeContext)
}
export default useStore

