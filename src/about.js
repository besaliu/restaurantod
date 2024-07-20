export default function createAbout() {
  const container = document.getElementById('content');
  container.innerHTML = ''; 
  
  const menuDiv = document.createElement('div');
  const heading = document.createElement('h1');
  heading.textContent = 'About Us';
  menuDiv.appendChild(heading);

  const p = document.createElement('p');
  p.textContent = 'huaghsfipghuiahguiarhuighauirhguarh ruagpuarhguiahpgui auprhgauighuiah auriphgaruipgh.';
  menuDiv.appendChild(p);

  container.appendChild(menuDiv);
}
