function animateProjects () {
  // const commands = String.raw`NathanMausert@internal-Tessier-Ashpool/:~ cd 
  // ../Ono-Sendai/Dixie-Flatline/FREESIDE-SERVER.js :~ ls`;

const Project = String.raw`

  const Projects = [

    Lfg: {
      Desc: {
        "Full Stack React App made in
        collaboration with my fellow 
        students for a final project."
      },
      Technologies: {
        "3rd party API, Full CRUD,
        JWT authentication, Coupled
        front/back end."
      }
    },

    Coding-Cooler: {
      Desc: {
        "Full Stack application made
        with Django."
      },
      Technologies: {
        "Python, EJS, Authentication,
        Full CRUD, PostgreSQL."
      }
    },

    Monster-Hunter-Lists: {
      Desc: {
        "Full Stack Application made
        with Express."
      },
      Technologies: {
        "3rd party API, Full CRUD,
        Google OAuth, MongoDb."
      }
    },

    Dim-Wood: {
      Desc: {
        "Full adventure game made 
        with javaScript."
      },
      Technologies: {
        "javaScript, HTML, CSS."
      }
    }

  ]

export default Projects
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
RenderString("NathanMausert@internal-Tessier-Ashpool: ACCESS GRANTED");
await Delay(2000);
RenderString("\n");
await TypeString("\n(freeside-server) -> git:(main)");
await TypeString("\n(freeside-server) -> git:(main) ls");
await Delay(800);
RenderString('\nABOUTME.txt  projects  package-lock.json  package.json  winter_mute\n');
await Delay(1000);
await TypeString("\n(freeside-server) -> git:(main) cd projects");
RenderString("\n");
RenderString('\nLFG  Coding-cooler  Monster-Hunter-Lists  Dim-Wood-Adventure\n');
await DrawLines( Project );
await DrawLines("\n(freeside-server) -> git:(main) ");
await TypeString("\n DISCONNECTED")
})();

}

export default animateProjects