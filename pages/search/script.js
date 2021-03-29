let btn = document.querySelector('.btn-search')
btn.addEventListener('click', async () => {
  let input = document.querySelector('.input-search').value;

  var convertToPascal = string =>  {// converte a primeira letra em maiusculo
    return string
    .replace(/([\W].)/, (match, chr) => chr.toUpperCase())
    .replace(/./, match => match.toUpperCase())
  };

  if(!input) {
    alert('Please write a wizard');
  }

  let formatedInput = convertToPascal(input)

  let wizards = await getWizard()

  let findWizard = wizards.filter(wizard => formatedInput.includes(wizard.name));

  let render = document.querySelector('.render-search');
  let searchWizard = `
    <a>
      <img class="img-wizard" src="${findWizard[0].image}" alt="wizard"/>
    </a>
    <h2>${findWizard[0].name}</h2>
    <h3>${findWizard[0].house}</h3>
  `
  render.innerHTML = searchWizard;

  document.querySelector('.input-search').value = '';

});
