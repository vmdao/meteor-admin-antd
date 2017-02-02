export default {
  namespace: 'users',

  state: {
    list: [],
    loading: false,
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    pagination: {
      //showSizeChanger: total => `Have ${total} result`,
      //showQuickJumper: true,
      showTotal: total => `Have ${total} result`,
      current: 1,
      total: null
    }
  },
}
