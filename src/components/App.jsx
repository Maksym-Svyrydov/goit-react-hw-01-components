import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from '../components/Statistics/Statistics';
import data from '../data/data/data.json';
import { FriendList } from './Friends/Friends';
import friends from '../data/friends/friends.json';
import { Transactions } from './Transaction/Transaction';
import TransactionData from '../data/transactions/transactions.json';
import { Container, GlobalStyle } from '../components/GlobalStyled';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />.
      <Transactions pays={TransactionData} />
    </Container>
  );
};
