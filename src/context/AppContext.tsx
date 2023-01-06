import { createContext, useContext } from "react"
export type GlobalContent = {
  clickedLink: number
  setClickedLink:(c: number) => void
}
export const GlobalContext = createContext<GlobalContent>({
  clickedLink: 0, // set a default value
  setClickedLink: () => {},
})
export const useGlobalContext = () => useContext(GlobalContext)