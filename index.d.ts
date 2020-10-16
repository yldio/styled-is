type BooleanProps<T> = {
  [P in keyof T]: T[P] extends boolean ? P : never;
}[keyof T];

export function match<T>(propName: keyof T, propValue: T[keyof T]);
export function isNot<T>(...propName: BooleanProps<T>[]);
export function isOr<T>(...propName: BooleanProps<T>[]);
export function isSomeNot<T>(...propName: BooleanProps<T>[]);

export default function is<T>(...propName: BooleanProps<T>[]);
