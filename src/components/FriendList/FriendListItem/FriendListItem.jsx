import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendsListItem = ({ avatar, name, isOnline, id }) => (
  <li className={css.item} key={id}>
    <span className={`${css.status} ${isOnline ? css.onLine : css.offLine}`}>
      {isOnline ? 'Online' : 'Offline'}
    </span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendsListItem.propTypes = PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
}).isRequired;
