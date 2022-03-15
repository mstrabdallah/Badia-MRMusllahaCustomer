
export default function ({ route, store, redirect, app, i18n }) {

  // check cookie

  if (app.$cookies.get('token')) {
    store.state.auth.checkAuth = true;
    store.state.auth.token = app.$cookies.get('token');
  }

  const checkUser = store.state.auth.checkAuth;
  //---------------


  // Visitor Access
  if (!checkUser && ['/login', '/', '/en', '/en/login'].includes(route.path)) {
    return false
  }

  //  Invalid Access For Visitor

  if (!checkUser) {
    if (i18n.locale === 'ar')
    return redirect('/login')
  else
    return redirect('/en/login')
  }

  //  Invalid Access For User
  if (checkUser && ['/login', '/en/login'].includes(route.path)) {
    if (i18n.locale === 'ar')
      return redirect('/')
    else
      return redirect('/en')

  }




}