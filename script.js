const checkboxes = document.querySelectorAll('.namaz');
const dateDisplay = document.getElementById('date');

function updateDate() {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateDisplay.textContent = today.toLocaleDateString('en-US', options);
}

function loadTracker() {
  checkboxes.forEach((box, index) => {
    const status = localStorage.getItem(`namaz${index}`);
    box.checked = status === 'true';
    box.addEventListener('change', () => {
      localStorage.setItem(`namaz${index}`, box.checked);
    });
  });
}

function resetTracker() {
  checkboxes.forEach((box, index) => {
    box.checked = false;
    localStorage.setItem(`namaz${index}`, 'false');
  });
}

updateDate();
loadTracker();