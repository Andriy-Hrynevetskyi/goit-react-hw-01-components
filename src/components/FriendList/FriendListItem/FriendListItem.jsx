import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendsListItem = ({ avatar, name, isOnline, id }) => (
  <li className="item" key={id}>
    <span className={isOnline ? css.onLine : css.offLine}></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendsListItem.propTypes = PropTypes.exact({
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
}).isRequired;
