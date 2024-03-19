// Función para actualizar la edad en el display
function updateAgeDisplay(value) {
  document.getElementById('age-output').textContent = value;
}

// Función para recoger los valores y personajes seleccionados y crear la historia
function createStory() {
  const age = document.getElementById('kid-age').value;
  const valuesCheckboxes = document.querySelectorAll('.extra-values input[type="checkbox"]:checked');
  const charactersCheckboxes = document.querySelectorAll('.characters input[type="checkbox"]:checked');

  // Recolectar valores seleccionados
  const selectedValues = Array.from(valuesCheckboxes).map(cb => cb.nextSibling.textContent.trim());
  // Recolectar personajes seleccionados
  const selectedCharacters = Array.from(charactersCheckboxes).map(cb => cb.nextSibling.textContent.trim());

  // Aquí puedes añadir la lógica para generar la historia usando los valores y personajes seleccionados
  const story = `Una historia para un niño de ${age} años, que enseña valores de ${selectedValues.join(', ')} con personajes como ${selectedCharacters.join(', ')}.`;

  // Por ahora, vamos a mostrar la historia en un alerta. En una aplicación real, probablemente querrás mostrar esto en la interfaz de usuario.
  alert(story);
}

// Agregar event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Actualizar la edad cuando se mueve el slider
  const ageSlider = document.getElementById('kid-age');
  ageSlider.addEventListener('input', function() {
    updateAgeDisplay(this.value);
  });


<script src="script.js"></script>


  // Manejar el click del botón de crear historia
  const createStoryButton = document.querySelector('button');
  createStoryButton.addEventListener('click', createStory);
});
