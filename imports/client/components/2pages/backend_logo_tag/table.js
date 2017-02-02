import React, { Component, PropTypes } from 'react'
import { Button, Table, Row, Popconfirm } from 'antd'
class TableList extends Component {
  constructor(props) {
    super(props);
  }
  handleClickNew(event) {
    const location = FlowRouter.current();
    FlowRouter.go(location.path + '/create')
  }
  render() {
    const {
      location,
      loading,
      dataSource,
      pagination,
      onPageChange,
      onDeleteItem,
      onEditItem
    } = this.props;
    const columns = [
      {
        title: 'Id',
        dataIndex: '_id',
        key: '_id',
        render: (text, row, index) => {
          return index + 1;
        }
      },
      {
        title: 'Code',
        dataIndex: 'code',
        key: 'code'
      }, {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Active',
        dataIndex: 'active',
        key: 'active',
        render: (text, row, index) => {
          return text ? 'On' : 'Off';
        }
      }, {
        title: 'Keyword',
        dataIndex: 'keyword',
        key: 'keyword'
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (text, row, index) => {
          const path = `${location.pathname}edit/${row._id}`
          return <a href={path}>Edit</a>
        }
      }
    ]
    return (
      <div>
        <Row style={{ marginBottom: 15 }}>
          <Button type="primary" onClick={this.handleClickNew}>New Model</Button>
        </Row>
        <Table
          className='table'
          bordered
          scroll={{ x: 800 }}
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          onChange={onPageChange}
          pagination={pagination}
          simple
          rowKey={record => record._id}
          />
      </div>
    )
  }
}

TableList.propTypes = {
  onPageChange: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  dataSource: PropTypes.array,
  loading: PropTypes.any,
  pagination: PropTypes.any
}

export default TableList;
