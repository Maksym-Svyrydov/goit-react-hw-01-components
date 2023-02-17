import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsListFollowers,
  StatsListViews,
  StatsListLikes,
  Labels,
  Quantity,
} from '../Profile/Profile styled';
// import css from '../Profile/profile.module.css';
export const Profile = ({
  avatar,
  username,
  tag,
  location,

  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsListFollowers>
          <Labels>Followers</Labels>
          <Quantity>{followers}</Quantity>
        </StatsListFollowers>
        <StatsListViews>
          <Labels>Views</Labels>
          <Quantity>{views}</Quantity>
        </StatsListViews>
        <StatsListLikes>
          <Labels>Likes</Labels>
          <Quantity>{likes}</Quantity>
        </StatsListLikes>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
