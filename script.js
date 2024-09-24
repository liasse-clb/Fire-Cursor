let mouseX, mouseY;
document.addEventListener('mousemove', (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
  createParticles(mouseX, mouseY);
});
setInterval(() => {
  if (mouseX !== undefined && mouseY !== undefined) {
    createParticles(mouseX, mouseY);
  }
}, 30); 
function createParticles(x, y) {
  for (let i = 0; i < 10; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const colors = [
      'rgba(255, 0, 0, 0.9)', 
      'rgba(255, 165, 0, 0.9)', 
      'rgba(255, 223, 0, 0.9)' 
    ];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    particle.style.left = `${x + Math.random() * 30 - 15}px`;
    particle.style.top = `${y - Math.random() * 40}px`; 
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 1500);
  }
}