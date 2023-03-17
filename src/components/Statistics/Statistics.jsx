import PropTypes from 'prop-types'
import style from './Statistics.module.scss'

const Statistics = ({ title, data }) => {
    return (
        <section className={style.statistics}>
            {title && <h2 className={style.title}>{title}</h2>}

            <ul className={style.statList}>
                {data.map((item) => {
                    return <li key={item.id} className={style.item}>
                        <span className={style.label}>
                            {item.label}
                        </span>
                        <span className={style.percentage}>
                            {item.percentage}
                        </span>
                    </li>
                })}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Statistics
