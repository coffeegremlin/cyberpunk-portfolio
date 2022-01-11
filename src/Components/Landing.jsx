import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Landing.css'

// Assets

const Landing = () => {
  return (
    <>
      <div className='container on'>
        <div class='scroll-container'>
          <h3 className='title'>CONNECTION ESTABLISHED</h3>
        </div>
        <div className='box--outer'>
          <div className='box'>
            <div className='box--inner'>
              <div className='content'>
                <div className='holder'>
                  <b>Welcome to coffeegremlin subsystems</b>: the high-performance development solutions utilizing&nbsp;Winter_Mute&nbsp;AI. Please enter your VIP user credentials.<br/>
                  <div className='row'>
                    <div className='col col__left label'>
                      Login
                    </div>
                    <div className='col col__center'>
                      <input type="text" id="login" maxlength="32" value="COFFEEGREMLIN_GUEST" readonly />
                    </div>
                  </div>
                  <form>
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
                        <div className='submit' id='loginStatic'>ACCESS DENIED</div>
                        <NavLink className='submit' to='/about'>
                        [Execute: PasswordCrack.js]
                        </NavLink>
                        {/* add in animation under this to run password crack */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='box'>
            © Nathan Mausert 2022
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing