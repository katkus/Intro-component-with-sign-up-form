const form = document.querySelector('form');
const emailInput = document.querySelector('input[type=email]');

form.addEventListener('submit', (e) => {

let hasEmpty = false;
  
for (let element of form.elements) {

  if (element.tagName === 'INPUT' && element.value.trim() === "") {

        hasEmpty = true;
        let label = element.parentElement.querySelector('label');
        let images = element.nextElementSibling;

        if(element.id == "emailAddress"){

          label.textContent = "Looks like this is not an email";
          element.placeholder = "email@example/com";
          element.classList.add('error');
        }
        else {
          label.textContent = element.placeholder + " cannot be empty"; 
        }
        
        element.parentElement.classList.add('activeInputGroup');
        element.classList.add('activeInput');
        images.classList.remove('hidden');
  }
  else {
    if(element.classList.contains('activeInput')){
      let label = element.parentElement.querySelector('label');
      let images = element.nextElementSibling; 

      element.parentElement.classList.remove('activeInputGroup');
      element.classList.remove('activeInput');
      label.textContent = "";
      images.classList.add('hidden');
      element.classList.remove('error');
    } 
  }
}

    if (hasEmpty || (!emailInput.checkValidity())) {
      e.preventDefault();
      form.parentElement.classList.add('activePaper');
    }
    else {
      form.parentElement.classList.remove('activePaper');
    }

  }
);
