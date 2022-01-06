import React from 'react';
import '../Styles/About.css'
// import rendering from '../Assets/aboutFunction';

// Assets

const About = (props) => {

  function animate () {
    const commands = String.raw`NathanMausert@internal-Tessier-Ashpool/:~ cd 
    ../Ono-Sendai/Dixie-Flatline/FREESIDE-SERVER.js :~ ls`;

const beep = String.raw`

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
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
                                                                                  
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #`;

const Kuang = String.raw`
About Me:
I'm New York and Los Angeles based. When it comes to my work, 
I have an interest in projects that improve users lives.
I aim to solve problems on both interpersonal and logistical levels.
I'm driven by a passion for providing tangible and meaningful results I can be proud of.
My aim is to offer well thought out and expertly crafted solutions to complex problems with intention and strong communication skills.
My background in medical welding and project management of prototype cryogenic pressure vessels gives me solid troubleshooting fundamentals 
and an aptitude for managing expansive projects with unexpected issues.
My education at General Assembly has given me practical hands-on experience with
computer science fundamentals and the industries most in demand technologies.
Currently, I'm looking for either a role in full stack web development, or game development!
Also I'm a fan of William Gibson's Neuromancer.
See You Chiba City.
`;

let blink = document.querySelector('.blink');
const code = document.querySelector('.code');

const RandomNumber = (min, max) => {
	return Math.floor(Math.random() * max) + min
};

const Delay = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time))
};

const ResetTerminal = () => {
	code.innerHTML = '<span class="blink">█</span>';
	blink = document.querySelector('.blink');
};

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


// Start the code
(async()=> {
	await DrawCommands("/:~ ssh NathanMausert@internal-Tessier-Ashpool -p 2000");
	await Delay(1000);
	RenderString("NathanMausert@internal-Tessier-Ashpool password:");
	await Delay(3000);
  RenderString("\n")
	RenderString("npm run Kuang.js ");
	await DrawCommands(commands);
	RenderString('\nbeep.js   FREESIDE-SERVER.js\n\n    BOCKRIS-SERVER.js\n\n');
	await DrawCommands('NathanMausert@internal-Tessier-Ashpool/ICE:~ node KUANG.js');
  await DrawCommands(commands);
	await DrawLines( beep );
	await TypeString("\n\ncd ./Hosaka-Storage/Ono-Sendai/ROM/McCoy-Pauley.py \nLOG: Case, you better keep your promise after this");
	await Delay(2000);
  ResetTerminal();
	await DrawLines("\nNathanMausert@internal-Tessier-Ashpool:~ KEY=3db7ca618243da1ba3bc76ab14bcf07b node KUANG.js");
  await DrawLines("\nCONNECTED")
  await DrawLines("\n(freeside-server) -> git:(main) ls")
  await DrawLines("\n(freeside-server) -> git:(main) ABOUTME.txt  package-lock.json  package.json  winter_mute")
  await DrawLines("\n(freeside-server) -> git:(main) code .")
	await DrawLines(Kuang);
  await DrawLines("\n(freeside-server) -> git:(main) ")
  
})();

  }

  const Terminal = () => {
    return(
      <div>
        <p>Kuang MK IV I.C.E. Breaker loaded.</p>
        <p>target.FREESIDE-SERVER.js /:~ NATHAN-MAUSERT-PORTFOLIO Node.js</p>
        <p>FILE: '../../Information/AboutMe.txt'</p>
        <h4>Ready Case?</h4>
      <button className='hack' onClick={animate}>Let's ride console cowboy</button>
      <div class="scanline"></div>
      <pre class=""><span class="blink">█</span></pre>
    </div>
    )
  }

  const [showTerminal, setShowTerminal] = React.useState(false)
  const onClick = () => setShowTerminal(true)

  return (
    <div>
      <h1>BOCKRIS SYSTEMS GmbH</h1>
      <p>Link established to Hosaka ONO-SENDAI Cyberspace 7</p>
      <p>Load Kuang MK IV I.C.E. Breaker?</p>
      <button className='hack' type='submit' onClick={onClick}>YES</button>
      {showTerminal ? <Terminal/> : null}
    </div>
  )
  
}

export default About