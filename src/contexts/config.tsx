import { createContext } from "react"

export type DesignConfig = {
    isShowingImage: boolean
}

export const DesignContext = createContext<DesignConfig>({
    isShowingImage: false,
});

export type DesignHandler = {
    toggleImage: () => void
};

export const DesignHandleContext = createContext<DesignHandler>({
    toggleImage: () => { throw "fatal" }
});

