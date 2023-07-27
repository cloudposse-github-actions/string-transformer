export function kebabcase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2")
    //eslint-disable-next-line no-useless-escape
    .replace(/[\s_\/]+/g, '-')
    .toLowerCase().replace('/', '-');
}