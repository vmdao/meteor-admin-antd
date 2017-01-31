import React, { PropTypes } from 'react'
import { Table, Popconfirm } from 'antd'

function list({
  loading,
  dataSource,
  pagination,
  onPageChange,
  onDeleteItem,
  onEditItem
}) {
  const columns = [
    {
      title: 'Heymen',
      dataIndex: 'avatar',
      key: 'avatar',
      className: 'avatar',
      render: (text) => <img width={24} src={text} />
    }, {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '昵称',
      dataIndex: 'nickName',
      key: 'nickName'
    }, {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email'
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address'
    }, {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime'
    }, {
      title: '操作',
      key: 'operation',
      width: 100,
      render: (text, record) => (
        <p>
          <a onClick={() => onEditItem(record)} style={{
            marginRight: 4
          }}>编辑</a>
          <Popconfirm title='确定要删除吗？' onConfirm={() => onDeleteItem(record.id)}>
            <a>删除</a>
          </Popconfirm>
        </p>
      )
    }
  ]

  return (
    <div>
      <Table
        className='table'
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        onChange={onPageChange}
        pagination={pagination}
        simple
        rowKey={record => record.id}
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
