export function kebabcase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_/]+/g, '-')
    .toLowerCase().replace('/', '-');
}