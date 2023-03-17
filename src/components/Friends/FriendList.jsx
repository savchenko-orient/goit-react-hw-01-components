import PropTypes from 'prop-types'
import style from './FriendList.module.scss'

function FriendList({ data }) {
    return (
        <ul className={style.friendList}>
            {data.map(({ id, isOnline, avatar, name }) => {
                return (<li key={id} className={style.item}>
                    <span className={isOnline ? style.isOnline : style.isOffline}></span>
                    <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={style.name}>{name}</p>
                </li>)
            })
            }
        </ul>
    )
}

FriendList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FriendList
