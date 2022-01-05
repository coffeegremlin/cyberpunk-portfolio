import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Landing.css'

// Assets

const Landing = () => {
  return (
    <>
    <body className=''>
      <div className='container on'>
        <h3 className='title'>CONNECTION ESTABLISHED</h3>
        <div className='box--outer'>
          <div className='box'>
            <div className='box--inner'>
              <div className='content'>
                <div className='holder'>
                  <b>Welcome to coffeegremlin subsystems</b>: the high-performance development solutions with&nbsp;a&nbsp;soul. Please enter your VIP user credentials.<br/>
                  <div className='row'>
                    <div className='col col__left label'>
                      Login
                    </div>
                    <div className='col col__center'>
                      <input type="text" id="login" maxlength="32" value="COFFEEGREMLIN_GUEST" readonly />
                    </div>
                  </div>
                  <form method="post" action="/about">
                    <div className='row'>
                      <div className='col col__left label'>
                        Password
                      </div>
                      <div className='col col__center'>
                        <input type="password" id="password" name="password" placeholder="" data-error="" maxlength="32" autocomplete="new-password"
                        autofocus="true"/>
                      </div>
                    </div>
                    {/* <b class="flash">ACCESS DENIED</b> */}
                    <div className='row'>
                        <NavLink className='submit' to='/about'>
                        [login]
                        </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </>
  )
}

export default Landing