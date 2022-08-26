declare const _sfc_main: import("vue").DefineComponent<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:visible"[], "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    title: string;
}>;
export default _sfc_main;
