import React from 'react';
import MacWindow from './MacWindow';
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({windowName, windowState, setwindowState}) => {
  const commands = {
    about: {
      description: 'Display information about me',
      fn: () => `Hi! I'm Himanshu Sonkusre, a passionate Full Stack Developer and UI/UX Enthusiast. I love building beautiful, functional web applications and learning new technologies.`
    },
    skills: {
      description: 'Show my technical skills',
      fn: () => `Technical Skills:
  Frontend:   React, Vue, JavaScript, TypeScript, HTML, CSS, SCSS
  Backend:    Node.js, Express, Python, Django
  Database:   MongoDB, PostgreSQL, MySQL
  Tools:      Git, Docker, AWS, Figma
  Other:      REST APIs, GraphQL, Agile Methodology`
    },
    projects: {
      description: 'List my portfolio projects',
      fn: () => `My Portfolio Projects:
  1. Portfolio Website    - Personal portfolio with macOS-like UI
  2. E-commerce App      - Full-stack shopping platform
  3. Task Manager        - Productivity application
  4. Chat Application    - Real-time messaging app
  5. Weather Dashboard  - Weather tracking application
  
Type 'open [project-name]' to learn more about a project.`
    },
    contact: {
      description: 'Display contact information',
      fn: () => `Contact Information:
  Email:    himanshusonkusre@example.com
  GitHub:   github.com/himanshusonkusre
  LinkedIn: linkedin.com/in/himanshusonkusre
  Twitter:  @himanshusonkusre
  
Feel free to reach out!`
    },
    whoami: {
      description: 'Display current user info',
      fn: () => `guest user - Welcome to my interactive portfolio CLI!
  
This is a simulated terminal environment where you can 
explore information about me and my work.`
    },
    ls: {
      description: 'List directory contents',
      fn: () => `Documents/
  about.txt
  skills.txt
  projects.txt
  contact.txt
  
Images/
  profile.jpg
  banner.png
  
Downloads/
  resume.pdf
  
Notes/
  todos.txt
  ideas.md`
    },
    welcome: {
      description: 'Show welcome message',
      fn: () => `╔════════════════════════════════════════════════════════════╗
║          Welcome to Himanshu's Portfolio CLI v1.0          ║
╠════════════════════════════════════════════════════════════╣
║  Type 'help' to see all available commands                ║
║  Type 'about' to learn more about me                       ║
║  Type 'projects' to view my work                           ║
║  Type 'contact' to get in touch                            ║
╚════════════════════════════════════════════════════════════╝`
    },
    github: {
      description: 'Open GitHub profile',
      fn: () => `Opening GitHub profile...
  https://github.com/himanshusonkusre
  
(This would open the URL in a new tab)`
    },
    linkedin: {
      description: 'Open LinkedIn profile',
      fn: () => `Opening LinkedIn profile...
  https://linkedin.com/in/himanshusonkusre
  
(This would open the URL in a new tab)`
    },
    email: {
      description: 'Send me an email',
      fn: () => `Opening email client...
  mailto:himanshusonkusre@example.com
  
(This would open your default email client)`
    },
    cat: {
      description: 'Display file contents',
      fn: (args) => {
        const filename = args[0];
        const files = {
          'about.txt': 'Hi! I am Himanshu Sonkusre, a passionate developer...',
          'skills.txt': 'React, Node.js, JavaScript, Python...',
          'projects.txt': 'Portfolio, E-commerce, Chat App...',
          'contact.txt': 'Email: himanshusonkusre@example.com',
          'resume.txt': 'Full Stack Developer with 3+ years of experience...'
        };
        if (!filename) return 'Usage: cat [filename]\nTry: about.txt, skills.txt, projects.txt, contact.txt';
        return files[filename] || `File not found: ${filename}\nTry: about.txt, skills.txt, projects.txt, contact.txt`;
      }
    },
    date: {
      description: 'Show current date and time',
      fn: () => {
        const now = new Date();
        return now.toString();
      }
    },
    echo: {
      description: 'Print text to terminal',
      fn: (args) => args.join(' ') || ''
    },
    version: {
      description: 'Show CLI version',
      fn: () => 'Portfolio CLI v1.0.0\nBuilt with React and react-console-emulator'
    },
  };

  const welcomeMessage = `╔════════════════════════════════════════════════════════════╗
║          Welcome to Himanshu's Portfolio CLI v1.0          ║
╠════════════════════════════════════════════════════════════╣
║  Type 'help' to see all available commands                ║
║  Type 'about' to learn more about me                       ║
║  Type 'skills' to view my technical skills                 ║
║  Type 'projects' to view my portfolio projects             ║
║  Type 'contact' to get in touch                            ║
╚════════════════════════════════════════════════════════════╝

Available commands:
  help        - List all available commands
  about       - Display information about me
  skills      - Show my technical skills
  projects    - List my portfolio projects
  contact     - Display contact information
  whoami      - Display current user info
  ls          - List directory contents
  clear       - Clear the terminal screen
  welcome     - Show welcome message
  github      - Open GitHub profile
  linkedin    - Open LinkedIn profile
  email       - Send me an email
  cat         - Display file contents (Usage: cat [filename])
  date        - Show current date and time
  echo        - Print text to terminal (Usage: echo [text])
  version     - Show CLI version

Try typing a command above!`;

  return (
    <MacWindow windowName={windowName} windowState={windowState} setwindowState={setwindowState}>
        <div className="cli-window">
            <Terminal 
            commands={commands}
            welcomeMessage={welcomeMessage}
            promptLabel={'himanshusonkusre:~$'}
            promptLabelStyle = {{color:"#00ff00"}}
            />
        </div>
    </MacWindow>
  );
}

export default Cli;
