import React, { Component, PropTypes } from 'react'
import { Row, Col, Card } from 'antd'
import NumberCard from '../components/dashboard/numberCard'
import Sales from '../components/dashboard/sales'

import { color } from '../utils'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff'
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render() {
    const { sales, quote, numbers, recentSales, comments, completed, browser, cpu, user} = this.props;
    const numberCards = numbers.map((item, key) => (<Col key={key} lg={6} md={12}>
      <NumberCard {...item} />
    </Col>))
    return (
      <Row gutter={24}>
        {numberCards}
        <Col lg={18} md={24}>
          <Card bordered={false} bodyStyle={{
            padding: '24px 36px 24px 0'
          }}>
            <Sales data={sales} />
          </Card>
        </Col>
        <Col lg={12} md={24}>
          <Card bordered={false} {...bodyStyle}>
            <RecentSales data={recentSales} />
          </Card>
        </Col>
      </Row>
    )
  }

}

Dashboard.propTypes = {
  weather: PropTypes.object,
  sales: PropTypes.array,
  quote: PropTypes.object,
  numbers: PropTypes.array,
  recentSales: PropTypes.array,
  comments: PropTypes.array,
  completed: PropTypes.array,
  browser: PropTypes.array,
  cpu: PropTypes.object,
  user: PropTypes.object
}

export default Dashboard
