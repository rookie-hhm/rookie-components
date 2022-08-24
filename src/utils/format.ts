/**
 *
 * @param value
 * @returns Zs --> -zs
 */
export const toLine = (value: string): string => {
  return value.replace(/(^[A-Z|a-z])/g, '-$1').toLowerCase()
}