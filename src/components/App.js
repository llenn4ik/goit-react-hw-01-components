import React from 'react';
import Profile from './Profile';
import Statistic from './Statistic-profile';
import user from '../json/user.json';
import Statistics from './Statistics';
import statsData from '../json/statistical-data.json';
import FriendsList from './Friend-list';
import friends from '../json/friend-list.json'


export default function App() {
    return(
      <>
      <Profile user={user} avatar={user.avatar} />
      <Statistic stats={user.stats} /> 
      <Statistics title="Upload stats" stats={statsData} />
      <FriendsList friends={friends} />
      </>
    )
  }
  