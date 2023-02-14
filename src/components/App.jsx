import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from '../components/Statistics/Statistics';
import data from '../data/data/data.json';
import { FriendList } from './Friends/Friends';
import friends from '../data/friends/friends.json';
import { Transactions } from './Transaction/Transaction';
import TransactionData from '../data/transactions/transactions.json';
console.log(user);
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* React homework template */}
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div class="">
        <Statistics datas={data} />
      </div>
      <div>
        <FriendList friends={friends} />.
      </div>
      <div class="">
        <Transactions pays={TransactionData} />
      </div>
    </div>
  );
};
