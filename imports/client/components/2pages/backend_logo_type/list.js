import React, { Component, PropTypes } from 'react'
import DataTable from './table'

class List extends Component {
  constructor(props) {
    super(props);
    this.location = FlowRouter.current().context;
  }
  render() {
    const { loading, list, pagination, currentItem, modalVisible, modalType } = this.props;
    const userListProps = {
      dataSource: list,
      loading,
      pagination: pagination,
      location,
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
