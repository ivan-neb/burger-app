import React from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends React.Component {
  state = { orders: [], loading: true };

  componentDidMount() {
    axios
      .get('/orders.json')
      .then(res => {
        const fetchedOrdersArray = [];

        // eslint-disable-next-line no-restricted-syntax
        for (const key in res.data) {
          const order = {
            ...res.data[key],
            id: key,
          };
          fetchedOrdersArray.push(order);
        }

        this.setState({ orders: fetchedOrdersArray, loading: false });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { orders } = this.state;
    const orderElements = orders.map(order => <Order data={order} key={order.id} />);
    return <div>{orderElements}</div>;
  }
}

export default withErrorHandler(Orders, axios);
