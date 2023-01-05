import invariant from 'tiny-invariant'

export const shortAddress = (address: string): string => {
  invariant(address.length > 12, 'given address is valid?')
  const pre = address.substr(0, 6)
  const last = address.substr(-4)
  return `${pre}...${last}`
}

export const shortAddress1 = (address: string): string => {
  const pre = address.substr(0, address.length / 2 - 4)
  const last = address.substr(-(address.length / 2 - 6))
  return `${pre}...${last}`
}
