import React, { PropTypes } from 'react'
import { Button, Table, Popconfirm } from 'antd'

function list({
  location,
  loading,
  dataSource,
  pagination,
  onPageChange,
  onDeleteItem,
  onEditItem
}) {
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
      title: 'Active',
      dataIndex: 'active',
      key: 'active'
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
        const path = `${location.pathname}/${row._id}`
        return <a href={path}>Edit</a>
      }
    }
  ]
  return (
    <div>
      <Button className="editable-add-btn" type="ghost" >Add New</Button>
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

list.propTypes = {
  onPageChange: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  dataSource: PropTypes.array,
  loading: PropTypes.any,
  pagination: PropTypes.any
}

export default list
