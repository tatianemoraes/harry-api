async function getWizard() {
  try {
    const response = await fetch('http://hp-api.herokuapp.com/api/characters');
    const data = await response.json();
    return data;

  } catch (error) {
    alert('Wizard not found');
  }
}

// foi criado metodo getWizards
