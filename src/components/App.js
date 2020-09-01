import React from 'react';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './Friend-list/Friend-list';
import TransactionHistory from './Transaction-history/Transaction-history'

import user from '../json/user.json';
import statsData from '../json/statistical-data.json';
import friends from '../json/friend-list.json'
import transactions from '../json/transactions.json';


 function App() {
    return(
      <>
        <Profile {...user} />
        <Statistics title="Upload stats" stats={statsData} />
        <FriendsList friends={friends} />
        <TransactionHistory  items={transactions} />
      </>
    )
  };
  
  export default App