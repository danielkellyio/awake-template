export const flattenResource = (resource) => {
  if (Array.isArray(resource)) {
    return resource.map(flattenResource)
  }
  if (!resource) return {}
  let local = resource
  local = Object.assign(local, resource.data)
  delete local.data
  return local
}
