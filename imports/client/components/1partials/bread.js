import React, { PropTypes } from 'react'
import { Breadcrumb, Icon } from 'antd'
import { menu } from '../../utils'

let pathSet = []
const getPathSet = function (menuArray, parentPath) {
  parentPath = parentPath || '/';
  menuArray.map(item => {
    pathSet[(parentPath + item.key).replace(/\//g, '-').hyphenToHump()] = {
      path: parentPath + item.key,
      name: item.name,
      icon: item.icon || '',
      clickable: item.clickable === undefined
    }
    if (item.child) {
      getPathSet(item.child, parentPath + item.key + '/')
    }
  })
}
getPathSet(menu)

function Bread({ location }) {
  let pathNames = []
  location.pathname.substr(1).split('/').map((item, key) => {
    if (key > 0) {
      pathNames.push((pathNames[key - 1] + '-' + item).hyphenToHump())
    } else {
      pathNames.push(('-' + item).hyphenToHump())
    }
  })
  const breads = pathNames.map((item, key) => {
    if (!(item in pathSet)) {
      item = 'Edit'
    }
    if (!pathSet[item]) { // when is edit
      const pathNameParentEdit = pathNames[key - 1];
      const pathSetParentEdit = pathSet[pathNameParentEdit];
      pathSet[item] = {
        path: pathNameParentEdit,
        name: pathSetParentEdit.name + ' Edit',
        icon: pathSetParentEdit.icon || '',
        clickable: pathSetParentEdit.clickable === undefined
      }
    };
    return (
      <Breadcrumb.Item key={key} {...((pathNames.length - 1 === key) || !pathSet[item].clickable) ? '' : { href: '#' + pathSet[item].path }}>
        {pathSet[item].icon
          ? <Icon type={pathSet[item].icon} />
          : ''}
        <span>{pathSet[item].name}</span>
      </Breadcrumb.Item>
    )
  })

  return (
    <div className='bread'>
      <Breadcrumb>
        <Breadcrumb.Item href='/brandgod'><Icon type='home' />
          <span>Home</span>
        </Breadcrumb.Item>
        {breads}
      </Breadcrumb>
    </div>
  )
}

Bread.propTypes = {
  location: PropTypes.object
}

export default Bread
