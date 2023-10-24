import useBreakpoints from "./useBreakpoints";

export default function useBreakpointValues(breakpointValues) {
    const { active } = useBreakpoints();
    return breakpointValues[active];
}