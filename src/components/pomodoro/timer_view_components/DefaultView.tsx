import React from 'react'

const DefaultView = () => {
  return (
    <div className='timer-view'>
      <div className='default-view'>
        <span className='no-high'>
          <p style={{textAlign: 'center', margin: '0', fontWeight: 'bold', fontSize: '4vw'}}>
            KEEP <br/> CALM
          </p>
          <p style={{textAlign: 'center', margin: '0', fontSize: '2vw'}}>
            AND
          </p>
          <p style={{textAlign: 'center', margin: '0', fontWeight: 'bold', fontSize: '4vw'}}>
            USE <br/> POMODORO
          </p>
        </span>
      </div>
    </div>



  )
}

export default DefaultView