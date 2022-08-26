export declare type DeepPartial<T> = {
    [P in keyof T]?: Partial<T[P]>;
};
