export default function createMenu() {
  const container = document.getElementById('content');
  container.innerHTML = ''; 
  
  const menuDiv = document.createElement('div');
  const heading = document.createElement('h1');
  heading.textContent = 'Menu';
  menuDiv.appendChild(heading);

  const p = document.createElement('p');
  p.textContent = 'Check out our delicious menu...';
  menuDiv.appendChild(p);

  container.appendChild(menuDiv);
}
