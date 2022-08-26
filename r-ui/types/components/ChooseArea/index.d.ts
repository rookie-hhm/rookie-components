declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            [x: number]: string;
        } | {}> & Omit<({} & (Readonly<readonly string[] | import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
            [x: string]: unknown;
        }>>>> & {
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        })) & (import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<readonly string[] | import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
            [x: string]: unknown;
        }>>>> & {
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }), never>;
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
        $emit: (event: "update:value", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<readonly string[] | import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
            [x: string]: unknown;
        }>>>> & {
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentPropsOptions<{
                [x: string]: unknown;
            }>>>> & {
                "onUpdate:value"?: ((...args: any[]) => any) | undefined;
            }>>;
            provinceDataList: import("vue").Ref<{
                code: string;
                name: string;
                children?: any[] | undefined;
            }[]>;
            cityDataList: import("vue").Ref<{
                code: string;
                name: string;
                children?: any[] | undefined;
            }[]>;
            areasDataList: import("vue").Ref<{
                code: string;
                name: string;
                children?: any[] | undefined;
            }[]>;
            province: import("vue").Ref<string>;
            city: import("vue").Ref<string>;
            area: import("vue").Ref<string>;
            emits: (event: "update:value", ...args: any[]) => void;
            setDefaultValue: () => void;
            setDefaultSelectList: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:value"[], string, {
            [x: number]: string;
        } | {}> & {
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
    } & (Readonly<readonly string[] | import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>> & {
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }) & import("vue").ShallowUnwrapRef<{
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentPropsOptions<{
            [x: string]: unknown;
        }>>>> & {
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }>>;
        provinceDataList: import("vue").Ref<{
            code: string;
            name: string;
            children?: any[] | undefined;
        }[]>;
        cityDataList: import("vue").Ref<{
            code: string;
            name: string;
            children?: any[] | undefined;
        }[]>;
        areasDataList: import("vue").Ref<{
            code: string;
            name: string;
            children?: any[] | undefined;
        }[]>;
        province: import("vue").Ref<string>;
        city: import("vue").Ref<string>;
        area: import("vue").Ref<string>;
        emits: (event: "update:value", ...args: any[]) => void;
        setDefaultValue: () => void;
        setDefaultSelectList: () => void;
    }> & {} & import("vue").ComponentCustomProperties & Readonly<readonly string[] | import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>> & {
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    };
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<readonly string[] | import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>> & {
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentPropsOptions<{
        [x: string]: unknown;
    }>>>> & {
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }>>;
    provinceDataList: import("vue").Ref<{
        code: string;
        name: string;
        children?: any[] | undefined;
    }[]>;
    cityDataList: import("vue").Ref<{
        code: string;
        name: string;
        children?: any[] | undefined;
    }[]>;
    areasDataList: import("vue").Ref<{
        code: string;
        name: string;
        children?: any[] | undefined;
    }[]>;
    province: import("vue").Ref<string>;
    city: import("vue").Ref<string>;
    area: import("vue").Ref<string>;
    emits: (event: "update:value", ...args: any[]) => void;
    setDefaultValue: () => void;
    setDefaultSelectList: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:value"[], "update:value", {
    [x: number]: string;
} | {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default _default;
