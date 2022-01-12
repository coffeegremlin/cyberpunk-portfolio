import { render } from "@testing-library/react";

function animateAbout () {
  const commands = String.raw`NathanMausert@internal-Tessier-Ashpool/:~ cd 
  ../Ono-Sendai/Dixie-Flatline/FREESIDE-SERVER.js :~ ls`;

const tessier = String.raw`

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
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
                                                                          
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
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
  await Delay(RandomNumber(20, 20));
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
RenderString("NathanMausert@internal-Tessier-Ashpool password: LOCKED");
await Delay(2000);
RenderString("\n");
await TypeString("npm run Kuang.js");
await Delay(1000);
RenderString("\n");
RenderString('ls -a');
await Delay(500);
RenderString('\ntessier.js  FREESIDE-SERVER.js  BOCKRIS-SERVER.js');
RenderString("\n");
await DrawCommands('NathanMausert@internal-Tessier-Ashpool/ICE:~ ');
RenderString("\n");
await TypeString("npm run tessier.js");
await DrawLines( tessier );
await TypeString("\ncd Hosaka-Storage/Ono-Sendai/ROM/McCoy-Pauley.py\n");
RenderString("\n");
await TypeString("MESSAGE FROM: DixieFlatline");
RenderString("\n");
await TypeString('// You better keep your promise Case. Delete me after this. //')
RenderString("\n");
await Delay(2000);

await DrawCommands('/:~ ssh NathanMausert@internal-Tessier-Ashpool');
RenderString("\n");
await TypeString('KEY=3db7ca618243da1ba3bc76ab14bcf07b');
RenderString("\n");
await DrawLines("\nCONNECTED");
await Delay(1000);
await DrawLines("\n(freeside-server) -> git:(main) ls");
await DrawLines("\n(freeside-server) -> git:(main) ");
RenderString('\nABOUTME.txt  package-lock.json  package.json  winter_mute\n');
await DrawLines( Kuang );
await DrawLines("\n(freeside-server) -> git:(main) ");
await TypeString("rm -rf McCoy-Pauley.py")
await DrawLines("\n(freeside-server) -> git:(main) ");
await TypeString("\n DISCONNECTED")
})();

}

export default animateAbout