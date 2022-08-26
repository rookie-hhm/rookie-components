declare enum Char {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F",
    G = "G",
    H = "H",
    I = "I",
    J = "J",
    K = "K",
    L = "L",
    M = "M",
    N = "N",
    O = "O",
    P = "P",
    Q = "Q",
    R = "R",
    S = "S",
    T = "T",
    U = "U",
    V = "V",
    W = "W",
    X = "X",
    Y = "Y",
    Z = "Z"
}
export interface CityInfo {
    id: number;
    spell: string;
    name: string;
}
export interface ProvinceInfo {
    id?: string;
    name: string;
    data: string[];
}
export declare type SelectType = '按省份' | '按城市';
declare type ChinaProvince = '直辖市' | '港澳' | 'A' | 'C' | 'H' | 'G' | 'F' | 'L' | 'J' | 'N' | 'Q' | 'S' | 'T' | 'X' | 'Y' | 'Z';
export declare type Cities = Partial<Record<Char, CityInfo[]>>;
export declare type Provinces = {
    [K in ChinaProvince]: ProvinceInfo[];
};
export {};
