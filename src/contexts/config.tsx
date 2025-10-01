import { createContext } from "react"

export type Config = {
    isShowingImage: boolean
}

export const ConfigContext = createContext<Config>({
    isShowingImage: false
});

