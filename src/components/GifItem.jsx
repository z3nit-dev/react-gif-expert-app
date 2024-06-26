import PropTypes from 'prop-types'

export const GifItem = ({url, title}) => {
  return (
    <div className='card'>
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string
}