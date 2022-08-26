declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            percentage: number;
            isAnimation: boolean;
            animationDuration: number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "percentage" | "isAnimation" | "animationDuration">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            percentage: number;
            isAnimation: boolean;
            animationDuration: number;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
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
    }>> & import("vue").ShallowUnwrapRef<{
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
    }> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    percentage: number;
    isAnimation: boolean;
    animationDuration: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
