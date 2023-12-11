import PropTypes from 'prop-types'

function Header({headText,bgColor,textColor}) {
//? varibles
const headerStyles ={
    backgroundColor: bgColor,
    color: textColor,
}

//? JSX
  return (
    <header style={headerStyles}>
      <div className="container">
          <h1>{headText}</h1>
      </div>
    </header>
  )
}

//! Set Default values
Header.defaultProps = {
    headText: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

//! Type Check
Header.propTypes={
    headText: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header
