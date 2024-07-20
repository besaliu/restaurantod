import createHome from "./home";
import createMenu from "./menu";
import createAbout from "./about";
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu')
  menu.addEventListener('click', createMenu);

  const home = document.getElementById('home')
  home.addEventListener('click', createHome);

  const about = document.getElementById('About')
  about.addEventListener('click', createAbout)
  createHome();
});
