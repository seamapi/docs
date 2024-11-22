import { capitalCase, noCase } from 'change-case'

export const eq = (v1: unknown, v2: unknown): boolean => {
  return v1 === v2
}

export const or = (...args: unknown[]): boolean => {
  // remove the last argument, which is the Handlebars options object
  args.pop()

  return args.some(Boolean)
}

export const add = (v1: number, v2: number): number => {
  return v1 + v2
}

export const toNoCase = (str: string): string => {
  return noCase(str)
}

export const toCapitalCase = (str: string): string => {
  return capitalCase(str)
}
