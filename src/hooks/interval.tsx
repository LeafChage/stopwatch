import { useRef, useState } from "react";

export type StopWatchCondition = | "pausing" | "running" | "initialized";
type StopWatchState = {
    currentMs: number,
    condition: StopWatchCondition,
}
const StopWatchState = {
    init: (): StopWatchState => ({
        currentMs: 0,
        condition: "initialized",
    })
} as const;

const conditionRule = <T,>(
    condition: StopWatchCondition,
    is: StopWatchCondition,
    fn: () => T
) => {
    if (condition !== is) { throw `fatal the condition should be ${is}` }
    return fn();
}

export type StopWatch = {
    condition: StopWatchCondition,
    currentMs: number,
    pause: () => void,
    start: () => void,
    restart: () => void,
    reset: () => void,
};
export const useStopwatch = (intervalMs: number = 100): StopWatch => {
    const [state, setState] = useState<StopWatchState>(StopWatchState.init);
    const intervalID = useRef<number>(null);
    const previous = useRef<number>(Date.now());

    const start = () => conditionRule(state.condition, "initialized", () => {
        console.info("start")
        previous.current = Date.now();
        setState({ currentMs: 0, condition: "running", })
        intervalID.current = setInterval(() => {
            const now = Date.now();
            const dt = now - previous.current;

            previous.current = now
            setState(prev => ({
                currentMs: prev.currentMs + dt,
                condition: "running"
            }))
        }, intervalMs)
    });

    const pause = () => conditionRule(state.condition, "running", () => {
        console.info("pause")
        clearInterval(intervalID.current!); // should be not null;

        const now = Date.now();
        const dt = now - previous.current;
        setState(prev => ({
            currentMs: prev.currentMs + dt,
            condition: "pausing"
        }))
    });

    const restart = () => conditionRule(state.condition, "pausing", () => {
        console.info("restart")
        previous.current = Date.now();
        setState({ currentMs: state.currentMs, condition: "running", })
        intervalID.current = setInterval(() => {
            const now = Date.now();
            const dt = now - previous.current;
            previous.current = Date.now();
            setState(prev => ({
                currentMs: prev.currentMs + dt,
                condition: "running"
            }))
        }, intervalMs)
    });

    const reset = () => conditionRule(state.condition, "pausing", () => {
        console.info("reset")
        setState(StopWatchState.init())
    });

    return {
        ...state,
        start,
        restart,
        pause,
        reset,
    }
}
