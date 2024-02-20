export interface ILegendselectchangedParams {
    name: string;
    selected: Record<string, boolean>;
    type: string;
}

export interface IOnEvents {
    type: string;
    func: Function;
}

export interface ImutationsList {
    type: string;
}
