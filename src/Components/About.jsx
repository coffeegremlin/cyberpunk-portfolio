import React from 'react';
import '../Styles/About.css'
// import rendering from '../Assets/aboutFunction';

// Assets

const About = (props) => {

  function showICE () {
    
  }

  function animate () {
    const commands = String.raw`Krang@internal-Tessier-Ashpool/:~ cd 
Krang@Dixie-Flatline/Wintermute/:~ ls`;

const beep = String.raw`


          _____                    _____                    _____                    _____          
         /\    \                  /\    \                  /\    \                  /\    \         
        /::\    \                /::\    \                /::\    \                /::\    \        
       /::::\    \              /::::\    \              /::::\    \              /::::\    \       
      /::::::\    \            /::::::\    \            /::::::\    \            /::::::\    \      
     /:::/\:::\    \          /:::/\:::\    \          /:::/\:::\    \          /:::/\:::\    \     
    /:::/__\:::\    \        /:::/__\:::\    \        /:::/__\:::\    \        /:::/__\:::\    \    
   /::::\   \:::\    \      /::::\   \:::\    \      /::::\   \:::\    \      /::::\   \:::\    \   
  /::::::\   \:::\    \    /::::::\   \:::\    \    /::::::\   \:::\    \    /::::::\   \:::\    \  
 /:::/\:::\   \:::\ ___\  /:::/\:::\   \:::\    \  /:::/\:::\   \:::\    \  /:::/\:::\   \:::\____\ 
/:::/__\:::\   \:::|    |/:::/__\:::\   \:::\____\/:::/__\:::\   \:::\____\/:::/  \:::\   \:::|    |
\:::\   \:::\  /:::|____|\:::\   \:::\   \::/    /\:::\   \:::\   \::/    /\::/    \:::\  /:::|____|
 \:::\   \:::\/:::/    /  \:::\   \:::\   \/____/  \:::\   \:::\   \/____/  \/_____/\:::\/:::/    / 
  \:::\   \::::::/    /    \:::\   \:::\    \       \:::\   \:::\    \               \::::::/    /  
   \:::\   \::::/    /      \:::\   \:::\____\       \:::\   \:::\____\               \::::/    /   
    \:::\  /:::/    /        \:::\   \::/    /        \:::\   \::/    /                \::/____/    
     \:::\/:::/    /          \:::\   \/____/          \:::\   \/____/                  ~~          
      \::::::/    /            \:::\    \               \:::\    \                                  
       \::::/    /              \:::\____\               \:::\____\                                 
        \::/____/                \::/    /                \::/    /                                 
         ~~                       \/____/                  \/____/                                  


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #`;

const Krang = String.raw`

             ..    ,,,,,,    ,,,,,,      ,,,,, .,,,,     ,,,,, .,,,,,,,,,,,,,    .,,,,,,    ,,,,,  
 #############/   #######.   #######    ###### /####,    (#### /##############   #######.   #####  
 #####((((((((/   ########   ########  ####### /####,    (#### /####*   /#####  *########   #####  
 #####((((*      #########.  ################# /####,    (#### /####*   ######  #########.  #####  
 ############.   #### (####  ################# /####,    (#### /############## *#### #####  (*,..  
 .############  #####  ####. ################# /####,    (##(( *,.    .,*/((##  ####/ #####  ####( 
   /##########*,####,  (###( (,.    .,*/( ##### #####     ####( (###########   #####  *####  ####( 
            (### ####   (#### ##### .###* ##### ######(/######, (####. #####(  ####/   ##### ####( 
            /###.###,    ####.#####  ###  ####( .#############  (####.  #####.(####    /#### ####(
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
		await Delay(RandomNumber(100, 200));
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
	await DrawCommands("/:~ ssh coffeegremlin@internal-Tessier-Ashpool -p 2000");
	await Delay(7000);
	RenderString("coffeegremlin@internal-Tessier-Ashpool password: ");
	await Delay(2000);
	RenderString("npm run Dixie-Flatline.js");
	await DrawCommands(commands);
	RenderString('\nKrang.js    BOCKRIS-SERVER.js\n\n');
	await DrawCommands('coffeegremlin@internal-Tessier-Ashpool/ICE:~ node KRANG.js');
	await DrawLines( beep );
	await TypeString("\n\n ROM --McCoy Pauley-- LOG: Case, you better keep your promise after this. Sense/Net existence is no fun.");
	await Delay(2000);
	ResetTerminal();
	await DrawCommands('coffeegremlin@internal-Tessier-Ashpool:~ KEY=3db7ca618243da1ba3bc76ab14bcf07b node KRANG.js');
	await DrawLines(Krang);
  
})();

  }

  const Terminal = () => {
    return(
      <div>
        <p>Krang MK. IV I.C.E. Breaker loaded.</p>
        <p>Target: NATHAN MAUSERT PORTFOLIO Node.js</p>
        <p>FILE: '../../AboutMe.txt'</p>
        <h4>Ready Case?</h4>
      <button className='hack' onClick={animate}>Let's ride console cowboy</button>
      <div class="scanline"></div>
      <pre class="code"><span class="blink">█</span></pre>
    </div>
    )
  }

  const [showTerminal, setShowTerminal] = React.useState(false)
  const onClick = () => setShowTerminal(true)

  return (
    <div>
      <h1>BOCKRIS SYSTEMS GmbH</h1>
      <p>Link established to ONO-SENDAI Cyberspace 7</p>
      <p>Load Krang MK. IV I.C.E. Breaker?</p>
      <button className='hack' type='submit' onClick={onClick}>YES</button>
      {showTerminal ? <Terminal/> : null}
    </div>
  )

  
}

export default About