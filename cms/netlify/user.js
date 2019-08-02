class User {
  isLoggedIn() {
    if (window) {
      return !!window.netlifyIdentity.currentUser()
    }
    return false
  }
}
export default User
