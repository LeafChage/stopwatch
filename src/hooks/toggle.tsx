import { useState } from "react"

export const useToggle = (on: boolean = false): [boolean, () => void] => {
    const [flag, setFlag] = useState(on);
    return [
        flag,
        () => setFlag(!flag)
    ];
}

