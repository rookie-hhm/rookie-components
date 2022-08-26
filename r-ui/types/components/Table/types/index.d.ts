import type { ElTable } from 'element-plus';
import type { FormItem } from '../../Form/types/index';
export interface TableColumn {
    prop?: string;
    label?: string;
    width?: string;
    slotName?: string;
    component?: FormItem;
}
export declare type TableInstance = InstanceType<typeof ElTable>;
