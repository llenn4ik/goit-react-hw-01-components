import React from 'react';
import styles from './TransactionHistory.module.css';

function TransactionHistory({items}) {
return (
<table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

{  items.map(({id, type, amount, currency}) => (
<tbody key={id}>
    <tr >
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
   
 
 </tbody>
))
}
</table>
)
}
export default TransactionHistory