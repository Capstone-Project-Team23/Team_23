const isAuthenticated = (authenticated, action) => {
  switch(action.type) {
      case "YES": 
      return authenticated = true;
      case "NO" :
          return authenticated = false;
      default:
          return false;
  }
}

export default isAuthenticated