import { PropType, nextTick } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<Readonly<import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}>>, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentPropsOptions<{
        [x: string]: unknown;
    }>>>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    generateModelKey: (modelKey?: string | undefined) => string;
    formRef: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly disabled: boolean;
            readonly labelPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "left" | "right" | "top", unknown>;
            readonly labelWidth: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly labelSuffix: string;
            readonly showMessage: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly validateOnRuleChange: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly hideRequiredAsterisk: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly inline: boolean;
            readonly inlineMessage: boolean;
            readonly statusIcon: boolean;
            readonly scrollToError: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            readonly model: ObjectConstructor;
            readonly rules: {
                readonly type: PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "right" | "top", unknown, "right", boolean>;
            readonly labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly inline: BooleanConstructor;
            readonly inlineMessage: BooleanConstructor;
            readonly statusIcon: BooleanConstructor;
            readonly showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly size: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly hideRequiredAsterisk: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly scrollToError: BooleanConstructor;
        }>> & {
            onValidate?: ((prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "labelPosition" | "labelWidth" | "labelSuffix" | "inline" | "inlineMessage" | "statusIcon" | "showMessage" | "disabled" | "validateOnRuleChange" | "hideRequiredAsterisk" | "scrollToError">;
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
        $emit: (event: "validate", prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly model: ObjectConstructor;
            readonly rules: {
                readonly type: PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "right" | "top", unknown, "right", boolean>;
            readonly labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly inline: BooleanConstructor;
            readonly inlineMessage: BooleanConstructor;
            readonly statusIcon: BooleanConstructor;
            readonly showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly size: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly hideRequiredAsterisk: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly scrollToError: BooleanConstructor;
        }>> & {
            onValidate?: ((prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => any) | undefined;
        }, {
            COMPONENT_NAME: string;
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly model: ObjectConstructor;
                readonly rules: {
                    readonly type: PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "right" | "top", unknown, "right", boolean>;
                readonly labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly inline: BooleanConstructor;
                readonly inlineMessage: BooleanConstructor;
                readonly statusIcon: BooleanConstructor;
                readonly showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly size: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly hideRequiredAsterisk: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly scrollToError: BooleanConstructor;
            }>> & {
                onValidate?: ((prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => any) | undefined;
            }>>;
            emit: (event: "validate", prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => void;
            fields: import("element-plus").FormItemContext[];
            formSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            formClasses: import("vue").ComputedRef<(string | {
                [x: string]: boolean | import("element-plus/es/utils").EpPropMergeType<StringConstructor, "left" | "right" | "top", unknown>;
            })[]>;
            addField: (field: import("element-plus").FormItemContext) => void;
            removeField: (field: import("element-plus").FormItemContext) => void;
            resetFields: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
            clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
            isValidatable: import("vue").ComputedRef<boolean>;
            obtainValidateFields: (props: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp>) => import("element-plus").FormItemContext[];
            validate: (callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
            doValidateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => Promise<boolean>;
            validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
            scrollToField: (prop: import("element-plus").FormItemProp) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            validate: (prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => boolean;
        }, string, {
            readonly disabled: boolean;
            readonly labelPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "left" | "right" | "top", unknown>;
            readonly labelWidth: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly labelSuffix: string;
            readonly showMessage: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly validateOnRuleChange: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly hideRequiredAsterisk: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly inline: boolean;
            readonly inlineMessage: boolean;
            readonly statusIcon: boolean;
            readonly scrollToError: boolean;
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        readonly model: ObjectConstructor;
        readonly rules: {
            readonly type: PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "right" | "top", unknown, "right", boolean>;
        readonly labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
        readonly labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly inline: BooleanConstructor;
        readonly inlineMessage: BooleanConstructor;
        readonly statusIcon: BooleanConstructor;
        readonly showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly size: {
            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
        readonly validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly hideRequiredAsterisk: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly scrollToError: BooleanConstructor;
    }>> & {
        onValidate?: ((prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        COMPONENT_NAME: string;
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly model: ObjectConstructor;
            readonly rules: {
                readonly type: PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "right" | "top", unknown, "right", boolean>;
            readonly labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly inline: BooleanConstructor;
            readonly inlineMessage: BooleanConstructor;
            readonly statusIcon: BooleanConstructor;
            readonly showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly size: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly hideRequiredAsterisk: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly scrollToError: BooleanConstructor;
        }>> & {
            onValidate?: ((prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => any) | undefined;
        }>>;
        emit: (event: "validate", prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => void;
        fields: import("element-plus").FormItemContext[];
        formSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        formClasses: import("vue").ComputedRef<(string | {
            [x: string]: boolean | import("element-plus/es/utils").EpPropMergeType<StringConstructor, "left" | "right" | "top", unknown>;
        })[]>;
        addField: (field: import("element-plus").FormItemContext) => void;
        removeField: (field: import("element-plus").FormItemContext) => void;
        resetFields: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
        clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
        isValidatable: import("vue").ComputedRef<boolean>;
        obtainValidateFields: (props: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp>) => import("element-plus").FormItemContext[];
        validate: (callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        doValidateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => Promise<boolean>;
        validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        scrollToField: (prop: import("element-plus").FormItemProp) => void;
    }> & {} & import("vue").ComponentCustomProperties) | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>>, {
    [x: number]: string;
} | {}>;
export default _sfc_main;
