document.addEventListener('DOMContentLoaded', function() {
  const ageSlider = document.getElementById('kid-age');
  const ageDisplay = document.getElementById('age-display');
  
  // Update the age display based on the slider's value
  ageSlider.oninput = function() {
    ageDisplay.textContent = `Your kid is ${this.value} years old`;
  };

  // Function to collect selected values and characters and create a story
  function createStory() {
    const age = ageSlider.value;
    const values = document.querySelectorAll('.extra-values input[type="checkbox"]:checked');
    const characters = document.querySelectorAll('.characters input[type="checkbox"]:checked');

    let selectedValues = [];
    values.forEach((value) => {
      selectedValues.push(value.nextElementSibling.textContent.trim());
    });

    let selectedCharacters = [];
    characters.forEach((character) => {
      selectedCharacters.push(character.nextElementSibling.textContent.trim());
    });

    // Example of creating a simple story. You can expand this based on your requirements.
    const story = `Once upon a time, in a land far away, a ${selectedCharacters.join(", ")} learned about ${selectedValues.join(", ")}. And they all lived happily ever after.`;
    
    // For demonstration purposes, we'll just log the story to the console.
    // In a real application, you might want to display this on the webpage.
    console.log(story);
    alert(story); // Alternatively, show the story in an alert.
  }

  // Add event listener to the "Create story" button
  const createStoryButton = document.querySelector('button');
  createStoryButton.addEventListener('click', createStory);
});
