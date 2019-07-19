export default {
  async getAll(axios) {
    const categories = await axios.$get('api/categories.json')
    return categories
  }
}
