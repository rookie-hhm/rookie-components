declare const _sfc_main: import("vue").DefineComponent<{
    percentage: {
        type: NumberConstructor;
        default: number;
    };
    isAnimation: {
        type: BooleanConstructor;
    };
    animationDuration: {
        type: NumberConstructor;
        default: number;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        percentage: {
            type: NumberConstructor;
            default: number;
        };
        isAnimation: {
            type: BooleanConstructor;
        };
        animationDuration: {
            type: NumberConstructor;
            default: number;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    startTime: undefined;
    diff: number;
    symbol: 1;
    preValue: number;
    step: (timestamp: number) => void;
    raf: null;
    updatePercentage: (end: number | undefined) => void;
    resetPercentage: () => void;
    currentPercentage: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    percentage: {
        type: NumberConstructor;
        default: number;
    };
    isAnimation: {
        type: BooleanConstructor;
    };
    animationDuration: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    percentage: number;
    isAnimation: boolean;
    animationDuration: number;
}>;
export default _sfc_main;
