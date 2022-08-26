import { RuleItem } from './rules';
import { DeepPartial } from '../../../types/utils';
export declare type OriginFormItem = {
    type: 'cascader' | 'checkbox' | 'checkbox-group' | 'checkbox-button' | 'color-picker' | 'date-picker' | 'input' | 'input-number' | 'radio' | 'radio-group' | 'radio-button' | 'rate' | 'select' | 'option' | 'slider' | 'switch' | 'time-picker' | 'time-select' | 'transfer' | 'upload' | 'editor';
    modelKey?: string;
    slotName: string;
    value?: any;
    prop: string;
    on: {
        [key: string]: Function;
    };
    attrs: {
        [key: string]: any;
    };
    itemAttrs: {
        label: string;
        rules: RuleItem | RuleItem[];
        'label-width': string | number;
        required: boolean;
        error: string;
        'show-message': boolean;
        'inline-message': boolean;
        size: 'large' | 'default' | 'small';
    };
    children?: FormItem[];
};
export declare type FormItem = DeepPartial<Omit<OriginFormItem, 'type' | 'value' | 'children'>> & Pick<OriginFormItem, 'type' | 'value' | 'children'>;
