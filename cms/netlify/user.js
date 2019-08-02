class User {
  isLoggedIn() {
    if (!global && window) {
      return !!window.netlifyIdentity.currentUser()
    }
    return false
  }
}
export default User
