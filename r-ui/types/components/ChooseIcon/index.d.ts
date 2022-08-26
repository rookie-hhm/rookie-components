declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            title: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            visible: {
                type: BooleanConstructor;
                required: true;
                default: boolean;
            };
            title: {
                type: StringConstructor;
                required: true;
                default: string;
            };
        }>> & {
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "title">;
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
        $emit: (event: "update:visible", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            visible: {
                type: BooleanConstructor;
                required: true;
                default: boolean;
            };
            title: {
                type: StringConstructor;
                required: true;
                default: string;
            };
        }>> & {
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        }, {
            keys: import("vue").Ref<string[]>;
            props: {
                visible: boolean;
                title: string;
            };
            copy: (key: string) => void;
            dialogVisible: import("vue").Ref<boolean>;
            emits: (event: "update:visible", ...args: any[]) => void;
            handleClick: () => void;
            toLine: (value: string) => string;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:visible"[], string, {
            title: string;
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
        visible: {
            type: BooleanConstructor;
            required: true;
            default: boolean;
        };
        title: {
            type: StringConstructor;
            required: true;
            default: string;
        };
    }>> & {
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        keys: import("vue").Ref<string[]>;
        props: {
            visible: boolean;
            title: string;
        };
        copy: (key: string) => void;
        dialogVisible: import("vue").Ref<boolean>;
        emits: (event: "update:visible", ...args: any[]) => void;
        handleClick: () => void;
        toLine: (value: string) => string;
    }> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        required: true;
        default: string;
    };
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
}, {
    keys: import("vue").Ref<string[]>;
    props: {
        visible: boolean;
        title: string;
    };
    copy: (key: string) => void;
    dialogVisible: import("vue").Ref<boolean>;
    emits: (event: "update:visible", ...args: any[]) => void;
    handleClick: () => void;
    toLine: (value: string) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:visible"[], "update:visible", {
    title: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
