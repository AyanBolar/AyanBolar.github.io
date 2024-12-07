// JavaScript to handle smooth scroll or other interactive functionality
document.querySelector('.cta-button').addEventListener('click', () => {
  document.getElementById('tech-stacks').scrollIntoView({ behavior: 'smooth' });
});
