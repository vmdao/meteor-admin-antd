import React from 'react';
import Page from '../../../components/2pages/backend_logo_category/list';
import { compose } from 'react-komposer';

function composer(props, onData) {
  onData(null, {
    items: { name: 'hello' }
  })
}
export default compose(composer)(Page);

