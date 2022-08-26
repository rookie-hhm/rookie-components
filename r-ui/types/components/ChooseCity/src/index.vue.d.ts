import { SelectType, CityInfo } from './types';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    originCityOptions: ({
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    } | {
        id: number;
        spell: string;
        name: string;
    })[];
    visible: import("vue").Ref<boolean>;
    cityList: import("vue").Ref<{
        A?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        B?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        C?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        D?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        E?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        F?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        G?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        H?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        I?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        J?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        K?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        L?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        M?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        N?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        O?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        P?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        Q?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        R?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        S?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        T?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        U?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        V?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        W?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        X?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        Y?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
        Z?: {
            id: number;
            spell: string;
            name: string;
        }[] | undefined;
    }>;
    provinceList: import("vue").Ref<{
        C: {
            id?: string | undefined;
            name: string;
            data: string[];
        }[];
        A: {
            id?: string | undefined;
            name: string;
            data: string[];
        }[];
        F: {
            id?: string | undefined;
            name: string;
            data: string[];
        }[];
        G: {
            id?: string | undefined;
            name: string;
            data: string[];
        }[];
        H: {
            id?: string | undefined;
            name: string;
            data: string[];
        }[];
        J: {
            id?: string | undefined;
            name: string;
            data: string[];
        }[];
        L: {
            id?: string | undefined;
            name: string;
            data: string[];
        }[];
        N: {
            id?: string | undefined;
            name: string;
            data: string[];
        }[];
        Q: {
            id?: string | undefined;
            name: string;
            data: string[];
        }[];
        S: {
            id?: string | undefined;
            name: string;
            data: string[];
        }[];
        T: {
            id?: string | undefined;
            name: string;
            data: string[];
        }[];
        X: {
            id?: string | undefined;
            name: string;
            data: string[];
        }[];
        Y: {
            id?: string | undefined;
            name: string;
            data: string[];
        }[];
        Z: {
            id?: string | undefined;
            name: string;
            data: string[];
        }[];
        直辖市: {
            id?: string | undefined;
            name: string;
            data: string[];
        }[];
        港澳: {
            id?: string | undefined;
            name: string;
            data: string[];
        }[];
    }>;
    cityValue: import("vue").Ref<string>;
    selectType: import("vue").Ref<SelectType>;
    selectedCityValue: import("vue").Ref<string>;
    cityOptions: import("vue").Ref<{
        id: number;
        spell: string;
        name: string;
    }[]>;
    emits: (event: "change", ...args: any[]) => void;
    tagList: import("vue").ComputedRef<string[]>;
    handleClick: (id: string) => void;
    handleSelect: (data: CityInfo) => void;
    handleProvinceSelect: (data: string) => void;
    filterMethod: (value: any) => void;
    handleSelectChange: (value: CityInfo) => void;
    cityData: {
        A: {
            id: number;
            spell: string;
            name: string;
        }[];
        B: {
            id: number;
            spell: string;
            name: string;
        }[];
        C: {
            id: number;
            spell: string;
            name: string;
        }[];
        D: {
            id: number;
            spell: string;
            name: string;
        }[];
        E: {
            id: number;
            spell: string;
            name: string;
        }[];
        F: {
            id: number;
            spell: string;
            name: string;
        }[];
        G: {
            id: number;
            spell: string;
            name: string;
        }[];
        H: {
            id: number;
            spell: string;
            name: string;
        }[];
        J: {
            id: number;
            spell: string;
            name: string;
        }[];
        K: {
            id: number;
            spell: string;
            name: string;
        }[];
        L: {
            id: number;
            spell: string;
            name: string;
        }[];
        M: {
            id: number;
            spell: string;
            name: string;
        }[];
        N: {
            id: number;
            spell: string;
            name: string;
        }[];
        P: {
            id: number;
            spell: string;
            name: string;
        }[];
        Q: {
            id: number;
            spell: string;
            name: string;
        }[];
        R: {
            id: number;
            spell: string;
            name: string;
        }[];
        S: {
            id: number;
            spell: string;
            name: string;
        }[];
        T: {
            id: number;
            spell: string;
            name: string;
        }[];
        W: {
            id: number;
            spell: string;
            name: string;
        }[];
        X: {
            id: number;
            spell: string;
            name: string;
        }[];
        Y: {
            id: number;
            spell: string;
            name: string;
        }[];
        Z: {
            id: number;
            spell: string;
            name: string;
        }[];
    };
    provinceData: {
        A: {
            name: string;
            id: string;
            data: string[];
        }[];
        C: {
            name: string;
            id: string;
            data: string[];
        }[];
        F: {
            name: string;
            id: string;
            data: string[];
        }[];
        G: ({
            name: string;
            id: string;
            data: string[];
        } | {
            name: string;
            data: string[];
            id?: undefined;
        })[];
        H: ({
            name: string;
            id: string;
            data: string[];
        } | {
            name: string;
            data: string[];
            id?: undefined;
        })[];
        J: ({
            name: string;
            id: string;
            data: string[];
        } | {
            name: string;
            data: string[];
            id?: undefined;
        })[];
        L: {
            name: string;
            id: string;
            data: string[];
        }[];
        N: ({
            name: string;
            id: string;
            data: string[];
        } | {
            name: string;
            data: string[];
            id?: undefined;
        })[];
        Q: {
            name: string;
            id: string;
            data: string[];
        }[];
        S: ({
            name: string;
            id: string;
            data: string[];
        } | {
            name: string;
            data: string[];
            id?: undefined;
        })[];
        T: {
            name: string;
            id: string;
            data: string[];
        }[];
        X: ({
            name: string;
            id: string;
            data: string[];
        } | {
            name: string;
            data: string[];
            id?: undefined;
        })[];
        Y: {
            name: string;
            id: string;
            data: string[];
        }[];
        Z: {
            name: string;
            id: string;
            data: string[];
        }[];
        直辖市: {
            name: string;
            id: string;
            data: string[];
        }[];
        港澳: {
            name: string;
            id: string;
            data: string[];
        }[];
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
