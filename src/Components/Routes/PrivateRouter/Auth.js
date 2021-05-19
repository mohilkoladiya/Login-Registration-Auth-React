export const isAuthenticated = () => {
    if (localStorage.getItem('loginToken')) {
        return localStorage.getItem("loginToken")
    }
    else {
        return false
    }
}