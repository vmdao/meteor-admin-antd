import React from 'react';
import Login from '../components/2pages/backend_dashboard/dashboard';
import { compose } from 'react-komposer';

function composer(props, onData) {
  onData(null, {
    items: { name: 'hello' }
  })
}

export default compose(composer)(Login);


