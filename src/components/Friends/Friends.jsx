import PropTypes from 'prop-types';
import { List, Item, Status, Avatar, Name } from '../Friends/Friends.styled';
export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <Item stat={friend.isOnline} key={friend.id}>
          <Status stat={friend.isOnline}>{friend.isOnline}</Status>
          <Avatar src={friend.avatar} alt={friend.name} width="48" />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </List>
  );
};
export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
};
