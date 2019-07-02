export const state = () => ({
  title: 'Example Post Title',
  subtitle: 'Example Post Subtitle',
  featureImage: null,
  content: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          consequuntur est eum fuga obcaecati officia omnis ratione tempore
          vitae. Animi ipsa modi optio quidem quo, reprehenderit repudiandae
          tenetur unde veniam?
              </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          consequuntur est eum fuga obcaecati officia omnis ratione tempore
          vitae. Animi ipsa modi optio quidem quo, reprehenderit repudiandae
          tenetur unde veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          consequuntur est eum fuga obcaecati officia omnis ratione tempore
          vitae. Animi ipsa modi optio quidem quo, reprehenderit repudiandae
          tenetur unde veniam?
        </p>
    `
})
export const mutations = {
  set(state, { title, subtitle, content }) {
    state.title = title
    state.subtitle = subtitle
    state.content = content
  }
}
export const actions = {
  set({ commit }, postSlug) {
    const { data, content } = require(`~/content/posts/${postSlug}.md`).default
    commit('set', {
      ...data,
      content
    })
  }
}
