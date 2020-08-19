import React from 'react'

const errorMassege = (props) => {
  return (
    <div class="ui negative message">
        <div class="header">שגיאה</div>
  <p>{props.errMas}</p>
        </div>
  )
}

export default errorMassege
