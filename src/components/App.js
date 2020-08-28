import React from 'react';
import Profile from './Profile/Profile';
import Statistic from './Statistic-profile/Statistic-profile';
import user from '../json/user.json';
import Statistics from './Statistics/Statistics';
import statsData from '../json/statistical-data.json';
import FriendsList from './Friend-list/Friend-list';
import friends from '../json/friend-list.json'
import transactions from '../json/transactions.json';
import TransactionHistory from './Transaction-history/Transaction-history'


export default function App() {
    return(
      <>
      <Profile user={user} avatar={user.avatar} />
      <Statistic stats={user.stats} /> 
      <Statistics title="Upload stats" stats={statsData} />
      <FriendsList friends={friends} />
      <TransactionHistory  items={transactions} />
      </>
    )
  }
  