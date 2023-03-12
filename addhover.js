const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#fff';
    link.style.backgroundColor = '#8cd492';
    link.style.borderRadius = '10px';
    link.style.transition = 'all 0.3s ease';
  });

  link.addEventListener('mouseout', () => {
    link.style.color = '#000';
    link.style.backgroundColor = 'transparent';
    link.style.borderRadius = '0';
  });
});
