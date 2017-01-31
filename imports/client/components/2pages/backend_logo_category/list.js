import React, { Component, PropTypes } from 'react'
import DataTable from './table'

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props)
    const { loading, list, pagination, currentItem, modalVisible, modalType } = this.props;
    const userListProps = {
      dataSource: list,
      loading,
      pagination: pagination,
      onPageChange(page) {
        const query = location.query
        dispatch(routerRedux.push({
          pathname: '/users',
          query: {
            ...query,
            page: page.current,
            pageSize: page.pageSize
          }
        }))
      },
      onDeleteItem(id) {
        dispatch({
          type: 'users/delete',
          payload: id
        })
      },
      onEditItem(item) {
        dispatch({
          type: 'users/showModal',
          payload: {
            modalType: 'update',
            currentItem: item
          }
        })
      }
    }
    return (
      <div className='content-inner'>
        <DataTable {...userListProps} />
      </div>
    )
  }
}

List.propTypes = {
  users: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}


export default List;
