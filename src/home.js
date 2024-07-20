import restaurantpic from './restaurant.webp';

export default function createHome() {

  const container = document.getElementById('content');
  container.innerHTML = ''
  const homepage = document.createElement('div');
  homepage.className = 'homepage';

  const left = document.createElement('div');
  const right = document.createElement('div');
  
  const bg = document.createElement('img');
  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to Odin Restaurant!';
  
  const p = document.createElement('p');
  p.textContent = 'Here we serve yummy food aoijfdioafhuiehfiuahsiofhsioughi shriughfsiuhgioshrgouhsuiogh sghriusoghouishguoisgurhu';
  
  left.appendChild(heading);
  left.appendChild(p);
  
  bg.src = restaurantpic;
  right.appendChild(bg);
  
  homepage.appendChild(left);
  homepage.appendChild(right);
  
  container.appendChild(homepage);
}
