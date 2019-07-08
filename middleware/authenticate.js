export default function({ app, redirect }) {
    const cookieIsLoggedIn = app.$cookies.get('login');
    if (cookieIsLoggedIn != null) {
        if (!cookieIsLoggedIn.isLoggedIn) {
            return redirect('/');
        }
    } else {
        return redirect('/');
    }
}