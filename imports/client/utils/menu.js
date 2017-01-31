module.exports = [
  {
    key: 'dashboard',
    name: 'Dashboard',
    icon: 'laptop'
  },
  {
    key: 'users',
    name: 'User',
    icon: 'user'
  },
  {
    key: 'ui',
    name: 'Product',
    icon: 'camera-o',
    clickable: false,
    child: [
      {
        key: 'ico',
        name: 'Product Item'
      },
      {
        key: 'search',
        name: 'Product List'
      }
    ]
  },
  {
    key: 'navigation',
    name: 'Payment',
    icon: 'setting',
    child: [
      {
        key: 'navigation1',
        name: 'Payment Local'
      },
      {
        key: 'navigation2',
        name: 'Payment Global',
        child: [
          {
            key: 'navigation21',
            name: 'Setting System'
          },
          {
            key: 'navigation22',
            name: 'Setting Local'
          }
        ]
      }
    ]
  }
]
