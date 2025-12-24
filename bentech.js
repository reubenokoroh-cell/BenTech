document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });

});

document.querySelectorAll('.btn, .submit-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.blur(); // Removes focus/hover state
  });
});
