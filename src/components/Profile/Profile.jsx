import PropTypes from 'prop-types'; // ES6
import style from './Profile.module.scss'


const Profile = ({
  username = 'Petra Marica',
  tag = 'pmarica',
  location = 'Salvador, Brasil',
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats = {
    followers: 1000,
    views: 200,
    likes: 35
  }
}) => {
  return (
    <div className={style.profile}>
      <div className={style.profile__description}>
        <img
          src={avatar}
          alt="User avatar"
          className={style.profile__avatar}
        />
        <p className={style.profile__name}>{username}</p>
        <p className={style.profile__tag}>@{tag}</p>
        <p className={style.profile__location}>{location}</p>

        <ul className={style.stats}>
          <li >
            <span className={style.stats__label}>Followers</span>
            <span className={style.stats__quantity}>{stats.followers}</span>
          </li>
          <li >
            <span className={style.stats__label}>Likes</span>
            <span className={style.stats__quantity}>{stats.views}</span>
          </li>
          <li >
            <span className={style.stats__label}>Views</span>
            <span className={style.stats__quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
}



export default Profile
