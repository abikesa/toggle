document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById('modeToggle');
  const body = document.body;
  const storedMode = localStorage.getItem('mode');

  if (storedMode === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '🌚 Dark Mode';
  } else {
    toggleButton.textContent = '🌞 Light Mode';
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    toggleButton.textContent = isDark ? '🌚 Dark Mode' : '🌞 Light Mode';
    localStorage.setItem('mode', isDark ? 'dark' : 'light');
  });
});
