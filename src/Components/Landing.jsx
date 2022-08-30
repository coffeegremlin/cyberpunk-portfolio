import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Landing.css'
import TextPortrait from './TextPortrait';

// Assets

const Landing = (props) => {

  const [showHack, setShowHack] = useState(false)
  const onClick = () => setShowHack(true)

  const RenderHack = () => {
    return(
      <>
        <NavLink type='submit' className='submit' id='loginstatic' to='/about'>
                        [ Hack Into Site ]
        </NavLink>
      </>
    )
  }

  const WaitingButton = () => {
    return(
      <>
        <b> [ Awaiting user input ] </b>
      </>
    )
  }

  const WinterMutePrompt = () => {
    return(
      <>
        <div className='col col__left label' id="autherror">
          Error: Systems breached
        </div>
        <div className='col col__center'>
          <b>:: Here's some help getting in, "Case" ::</b>
        </div>
      </>
    )
  }

  const PasswordBox = () => {
    return(
      <>
      <div className='col col__left label'>
        Password
      </div>
      <div className='col col__center'>
        <input type="password" id="password" name="password" placeholder="_____________________" data-error="" maxlength="9" autocomplete="off" autofocus="true" to='/about' onClick={onClick}/>
      </div>
      </>
    )
  }

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
                      {/* Add some kind of psuedo loading bar to show hacking */}
                        {showHack ? <WinterMutePrompt/> : <PasswordBox/>}
                    </div>
                    {/* <b class="flash">ACCESS DENIED</b> */}
                    <div className='row'>
                        {/* <div className='submit' id='loginStatic'>--- ACCESS DENIED ---</div> */}
                        {/* Add in usestate so onclick it renders the hack button */}
                        {/* Set usestate False to be the first button instead of null and set true to be the actual login/hack button */}
                        <br/>
                        {showHack ? <RenderHack/> : <WaitingButton/>}
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