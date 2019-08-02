class User {
  isLoggedIn() {
    return !!window.netlifyIdentity.currentUser()
  }
}
export default User
