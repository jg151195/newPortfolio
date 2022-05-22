import pokemonIMG from "./imgs/pokemon.png"
import calc from "./imgs/calc.png"
import todolist from "./imgs/todolist.png"

const projects = [
    {
    name: "Todo List",
    img: todolist,
    description: "App to write down all the things you need to do and, once you've done it, you mark it.",
    languages: ["React.js","Javascript"],
    link: "https://github.com/jg151195/TodoList"
     },
    {
    name: "Pokedex",
    img: pokemonIMG,
    description: "Learning about useEffect and consuming an API in React.js, this app shows all pokemons from the first generation and info about them.",
    languages: ["React.js"],
    link: "https://github.com/jg151195/pokedex"
    },
    {
        name: "Calculator",
        img: calc,
        description: "First React.js project, learning about states. It does basic math operations.",
        languages: ["React.js"],
        link: "https://github.com/jg151195/calculator"
    }
]

export default projects
