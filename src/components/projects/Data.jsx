import kamarites from '../../../public/assets/kamarites.png';
import ahas from '../../../public/assets/ahas.png';
import serbisio from '../../../public/assets/serbisio.png';
import ilutomo from '../../../public/assets/ilutomo.png';

export const projectsData =[
  {
    id: 1,
    picture: kamarites,
    demo: "https://kamarites.netlify.app",
    github:"https://github.com/nov-salvador/NodeApp",
    title: "KaMarites",
    category: "Fullstack",
    description: "Social media web app. Technologies used are MongDB, ExpresJs, React, NodeJs."
  },
  {
    id: 2,
    picture: ahas,
    demo: "https://ahas.netlify.app",
    github:"https://github.com/nov-salvador/AHAS",
    title: "Ahas",
    category: "Javascript",
    description: "Old-school gaming with my very own Javascript Snake Game!."
  },
  {
    id: 3,
    picture: serbisio,
    demo: "https://serbisio.netlify.app",
    github:"https://github.com/nov-salvador/Serbisio-Team-Project",
    title: "Serbisio",
    category: "Fullstack",
    description: "Explore, Apply, Succeed: Your Gateway to Opportunity. A MERN stack web application."
  },
  {
    id: 4,
    picture: ilutomo,
    demo: "https://ilutomobaybe.netlify.app",
    github:"https://github.com/nov-salvador/React-RecipeWeb",
    title: "iLutoMo",
    category: "React",
    description: "From mouthwatering classics to innovative delights, discover the essence of homemade goodness. Using React stack."
  }
];

export const categories = ['All', 'Fullstack', 'React', 'Javascript']

