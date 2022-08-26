export interface AreaResult {
    province: string;
    city: string;
    area: string;
}
export declare type AreaItem = {
    code: string;
    name: string;
    children?: AreaItem[];
};
