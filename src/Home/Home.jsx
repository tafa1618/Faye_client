import React from 'react'
import './Styles.css'
import PageB from '../PageB'

const Home = () => {
  return (
    <>
            <h1 style={{ color: 'orange', textAlign: 'left' }} className='logo'>
        {' '}
        Website
      </h1>
      <h2
        style={{ color: 'orange', textAlign: 'right' }}
        className='inscription top-left'
      >
        <i className='fa-solid fa-user-large'></i> s'inscrire
      </h2>
      <div>
        <h5 className='accroche'>
          Trouvez votre prestataire de service en un seul click!
        </h5>
      </div>
      <div className='container-one'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <button type='button' className='btn boutton'>
                Click Me!
              </button>
            </div>
            <div className='col'>
              <a href='/pageb'>
                <button type='button' className='btn boutton'>
                  Page B!
                </button>
              </a>
            </div>
            <div className='col'>
              <a href='./pageB.html'>
                {' '}
                <button type='button' className='btn boutton'>
                  Page C!
                </button>
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm'>
              <button type='button' className='btn boutton'>
                Click Me!
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
