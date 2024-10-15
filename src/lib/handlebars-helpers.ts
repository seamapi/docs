export const eq = (v1: unknown, v2: unknown): boolean => {
  return v1 === v2
}

export const or = (...args: unknown[]): boolean => {
  // remove the last argument, which is the Handlebars options object
  args.pop()

  return args.some(Boolean)
}
