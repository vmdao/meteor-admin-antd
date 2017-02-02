export default {
  namespace: 'app',
  state: {
    login: false,
    loading: false,
    user: {
      name: 'vmdao'
    },
    loginButtonLoading: false,
    menuPopoverVisible: false,
    siderFold: localStorage.getItem('antdAdminSiderFold') === 'true',
    darkTheme: localStorage.getItem('antdAdminDarkTheme') !== 'false',
    isNavbar: document.body.clientWidth < 769
  }
}
