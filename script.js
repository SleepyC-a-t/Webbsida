// Hämta elementen från HTML
const aiBtn = document.getElementById('aiBtn');
const aiModal = document.getElementById('aiModal');
const closeBtn = document.getElementById('closeBtn');

// Öppna modalen när man klickar på AI-knappen
aiBtn.addEventListener('click', () => {
  aiModal.style.display = 'flex'; // Ändrar från 'none' till 'flex' för att visa den centrerat
});

// Stäng modalen när man klickar på krysset
closeBtn.addEventListener('click', () => {
  aiModal.style.display = 'none';
});

// Stäng modalen om man klickar utanför själva rutan (på den mörka bakgrunden)
window.addEventListener('click', (event) => {
  if (event.target === aiModal) {
    aiModal.style.display = 'none';
  }
});