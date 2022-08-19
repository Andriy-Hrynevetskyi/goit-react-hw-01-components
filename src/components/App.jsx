import React from 'react';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Statistic';
import { FriendList } from './FriendList/FriendList';
import { TransactionsTable } from './TransactionsHistory/TransactionsTable';
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionsTable transactions={transactions} />
    </div>
  );
};
