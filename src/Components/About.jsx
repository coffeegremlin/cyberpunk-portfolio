import React from 'react';
import '../Styles/About.css'
import DaemonChoice from './Nav';

// Assets

const About = (props) => {

  const [showTerminal, setShowTerminal] = React.useState(false)
  const [showDaemons, setShowDaemons] = React.useState(false)
  const onClick = () => setShowTerminal(true)
  const onLoadDaemons = () => setShowDaemons(true)

  // function loadDeck(daemon) {
  //   daemon.preventDefault();
  // }
  // function dragStart(daemon) {
  //   daemon.dataTransfer.setData('text', daemon.target.id);
  // }
  // function dragDrop(daemon) {
  //   daemon.preventDefault();
  //   let data = daemon.dataTransfer.getData('text');
  //   daemon.target.appendChild(document.getElementById(data));
  // }

  function animate () {
    const commands = String.raw`NathanMausert@internal-Tessier-Ashpool/:~ cd 
    ../Ono-Sendai/Dixie-Flatline/FREESIDE-SERVER.js :~ ls`;

const tessier = String.raw`

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
   ______   ______     ______     ______     __     ______     ______        
  /\__  _\ /\  ___\   /\  ___\   /\  ___\   /\ \   /\  ___\   /\  == \       
  \/_/\ \/ \ \  __\   \ \___  \  \ \___  \  \ \ \  \ \  __\   \ \  __<       
     \ \_\  \ \_____\  \/\_____\  \/\_____\  \ \_\  \ \_____\  \ \_\ \_\     
      \/_/   \/_____/   \/_____/   \/_____/   \/_/   \/_____/   \/_/ /_/     
                                                                            
   ______     ______     __  __     ______   ______     ______     __        
  /\  __ \   /\  ___\   /\ \_\ \   /\  == \ /\  __ \   /\  __ \   /\ \       
  \ \  __ \  \ \___  \  \ \  __ \  \ \  _-/ \ \ \/\ \  \ \ \/\ \  \ \ \____  
   \ \_\ \_\  \/\_____\  \ \_\ \_\  \ \_\    \ \_____\  \ \_____\  \ \_____\ 
    \/_/\/_/   \/_____/   \/_/\/_/   \/_/     \/_____/   \/_____/   \/_____/ 
                                                                            
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
`;

const Kuang = String.raw`
<--- FILE READS --->

About Me:

I'm moving and soon to be Los Angeles based. When it comes to my work, 
I have an interest in projects that improve users lives.
I aim to solve problems on both interpersonal and logistical levels.
I'm driven by a passion for providing 
tangible and meaningful results I can be proud of.
My aim is to offer well thought out and expertly crafted solutions
to complex problems with intention and strong communication skills.
My background in medical welding and project management
of prototype cryogenic pressure vessels, as well as my B.S.
in Audio Engineering have given me solid troubleshooting fundamentals 
and an aptitude for managing expansive projects with unexpected issues.
My education at General Assembly has given me practical hands-on experience with
computer science fundamentals and the industries most in demand technologies.
Currently, I'm looking for either a role in
full stack web development, or game development!
Also I'm a fan of William Gibson's Neuromancer.

See you in Chiba City,
Nathan Mausert

<--- FILE END --->
`;

let blink = document.querySelector('.blink');
// const code = document.querySelector('.code');

const RandomNumber = (min, max) => {
	return Math.floor(Math.random() * max) + min
};

const Delay = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time))
};

// const ResetTerminal = () => {
// 	code.innerHTML = '<span className="blink">█</span>';
// 	blink = document.querySelector('.blink');
// };

// ^^^^^ FIX THIS ^^^^^

const RenderString = characters => {
	blink.insertAdjacentHTML('beforeBegin', characters);
};

const TypeString = async characters => {
	for(const character of characters.split('')) {
		await Delay(RandomNumber(50, 50));
		RenderString(character);
	}
}

const DrawLines = async ( characters, min = 50, max = 500 ) => {
	for(const line of characters.split('\n')) {
		await Delay(RandomNumber(min, max));
		RenderString(`${line}\n`);
	}
}

const DrawCommands = async commands => {
	for( const line of commands.split('\n')){
		// Seperate the directory and the command
		const [currentDir, command] = line.split(':~ ');

		// Print the directory, type the command and finish with new line
		RenderString(`${currentDir}:~ `);
		await TypeString(command);
		RenderString('\n');
	}
}

(async()=> {
	await DrawCommands("/:~ ssh NathanMausert@internal-Tessier-Ashpool -p 2000");
	await Delay(1000);
	RenderString("NathanMausert@internal-Tessier-Ashpool password:");
	await Delay(2000);
  RenderString("\n");
	await TypeString("npm run Kuang.js");
	await DrawCommands(commands);
	RenderString('\ntessier.js  FREESIDE-SERVER.js  BOCKRIS-SERVER.js\n\n');
	await DrawCommands('NathanMausert@internal-Tessier-Ashpool/ICE:~ node tessier.js');
	await DrawLines( tessier );
  await TypeString("\n\ncd Hosaka-Storage/Ono-Sendai/ROM/McCoy-Pauley.py\n");
  // add delete me message from mccoy here
	await Delay(2000);

	await DrawCommands('/:~ ssh NathanMausert@internal-Tessier-Ashpool KEY=3db7ca618243da1ba3bc76ab14bcf07b node KUANG.js');
  await DrawLines("\nCONNECTED");
  await DrawLines("\n(freeside-server) -> git:(main) ls");
  await DrawLines("\n(freeside-server) -> git:(main) ABOUTME.txt  package-lock.json  package.json  winter_mute");
	await DrawLines( Kuang );
  await DrawLines("\n(freeside-server) -> git:(main) ");
  await TypeString("rm -rf McCoy-Pauley.py")
  await DrawLines("\n(freeside-server) -> git:(main) ");
  await TypeString("\n DISCONNECTED")
})();

  }

  const TextLoad = () => {
    return (
      <>
        <div className="scanline"></div>
        <pre><span className="blink">█</span></pre>
      </>
    )
  }

  const Terminal = (props) => {
    return(
      <div>
        <h5>Kuang MK IV I.C.E. Breaker loaded.</h5>
        <h5>target.FREESIDE-SERVER.js /:~ NATHAN-MAUSERT-PORTFOLIO Node.js</h5>
        <h5>FILE: '../../Information/ABOUTME.txt'</h5>
        <h3>Ready Case?</h3>
        <button className='hack' onClick={animate}>Let's ride console cowboy</button>
        <TextLoad/>
    </div>
    )
  }



  return (
    <>
    <button className='hack' onClick={onLoadDaemons}>Available Daemons</button>
    {showDaemons ? <DaemonChoice/> : null}
    <div className=''>
      <h1>BOCKRIS SYSTEMS GmbH</h1>
      <h5>Link established to Hosaka ONO-SENDAI Cyberspace 7</h5>
      <h5>Load Kuang MK IV I.C.E. Breaker?</h5>
      <button className='hack' type='submit' onClick={onClick}>YES</button>
      {/* Add a box around terminal to limit its size or make it scroll on overflow. vvvvv */}
    {showTerminal ? <Terminal/> : null}
    </div>
    </>
  )
  
}

export default About