declare const _sfc_main: import("vue").DefineComponent<Readonly<import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}>>, {
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:value"[], "update:value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<readonly string[] | import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>> & {
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}, {
    [x: number]: string;
} | {}>;
export default _sfc_main;
