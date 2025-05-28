export interface GenericMapById<T> {
  [index: string]: T;
}

export interface GenericMap {
  [index: string]: GenericMap | any;
}

export interface GenericDataMapType {
  [index: string]: GenericItemMap;
}

export interface GenericItemMap {
  id: string;
  text: string;
}


// Ex. type PickedMerchant = NestedPick<Data, 'merchant', 'debit'>;
export type NestedPick<T, K extends keyof T, NK extends keyof T[K]> = Pick<T, K> & { [P in K]: Pick<T[K], NK> };

