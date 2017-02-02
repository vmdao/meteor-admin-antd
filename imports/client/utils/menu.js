module.exports = [
  {
    key: 'brandgod',
    name: 'Dashboard',
    icon: 'laptop'
  },
  {
    key: 'brandgod/users',
    name: 'User',
    icon: 'user',
  },
  {
    key: 'brandgod/app',
    name: 'App',
    icon: 'camera-o',
    clickable: false,
    child: [
      {
        key: 'logo_category',
        name: 'Category',
        child: [
          {
            key: '',
            name: 'Category List'
          },
          {
            key: 'create',
            name: 'Category Create'
          }
        ]
      },
      {
        key: 'logo_style',
        name: 'Styles',
        child: [
          {
            key: '',
            name: 'Style List'
          },
          {
            key: 'create',
            name: 'Style Create'
          }
        ]
      },
      {
        key: 'logo_suggestorder',
        name: 'Suggest Order',
        child: [
          {
            key: '',
            name: 'Suggest List'
          },
          {
            key: 'create',
            name: 'Suggest Create'
          }
        ]
      },
      {
        key: 'logo_tag',
        name: 'Tag Order',
        child: [
          {
            key: '',
            name: 'Tag List'
          },
          {
            key: 'create',
            name: 'Tag Create'
          }
        ]
      },
       {
        key: 'logo_type',
        name: 'Type',
        child: [
          {
            key: '',
            name: 'Type List'
          },
          {
            key: 'create',
            name: 'Type Create'
          }
        ]
      },
    ]
  }
]
