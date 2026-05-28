
//document.querySelector(".claim").addEventListener("click", function() {
 //alert("Got it!");//funkvcja do przekształcenia z submit jak dla mnie

  //let test = document.getElementById("firstName");

  /*if(document.querySelectorAll('form > input').value.trim() ==="") {
    alert("Buuu!");
  }*/

  const form = document.querySelector('form');
  const emailInput = document.querySelector('input[type=email]');
  //const img = document.createElement('img'); =>=>PROBA WYKRZYKNIKA
  //img.setAttribute("src", "./images/icon-error.svg")
  //img.src = "./images/icon-error.svg"; =>=>PROBA WYKRZYKNIKA
  //const img = new Image();
  //img.src = "images/icon-error.svg";
  //img.src = './image/icon-error.svg';
//gdzieś trzeba dodać wyzerowanie przed kolejnym submit, a po jednej nieudanej próbie
  

  form.addEventListener('submit', (e) => {
      //form.addEventListener('submit', (e) => {
    let hasEmpty = false;
    console.log(e);

  
    for (let element of form.elements) {
      if (element.tagName === 'INPUT' && element.value.trim() === "") {

        hasEmpty = true;
        //const img = document.createElement("img");
        //img.src = "./images/icon-error.svg";
        let label = document.querySelector('label[for='+element.id);
        //let images = document.querySelector('img [for'+element.id);
        let images = element.nextElementSibling; //poprzedni this.
        if(element.id == "emailAddress"){

          label.textContent = "Looks like this is not an email";
          document.getElementById("emailAddress").placeholder = "email@example/com";
          document.getElementById("emailAddress").classList.add('error');
          
          //Kolor do zmiany na czerowny. Albo dodamy nową klasę aktywny placeholder, albo spróbujemy dodać kolor do wykrzyknika
          //document.getElementById("emailAddress").placeholder.style.color = "red";

        }
        else {
          label.textContent = element.placeholder + " cannot be empty"; 
        }
        

        element.parentElement.classList.add('activeInputGroup');
        element.classList.add('activeInput');
        
        images.classList.remove('hidden');
        //let container = document.querySelector('.inputGroup');
        //container.appendChild(img); =>PROBA WYKRZYKNIKA
        
        // Czy to wszystkie zmiany??
      }
      else {
          if(element.classList.contains('activeInput')){
            let label = document.querySelector('label[for='+element.id);
            let images = element.nextElementSibling; 

            element.parentElement.classList.remove('activeInputGroup');
            element.classList.remove('activeInput');
            label.textContent = "";
            images.classList.add('hidden');
            document.getElementById("emailAddress").classList.remove('error');
          }          

      }
    }


    if (hasEmpty || (!emailInput.value.includes('@'))) {
      e.preventDefault(); // Zablokuj wysłanie
      form.parentElement.classList.add('activePaper');


      if(hasEmpty) {
        alert("Formularz zawiera puste pola.");      
      }

      if(!emailInput.value.includes('@')) {
         alert("Adres e-mail musi zawierać znak @");
         //dopisać przykład w inpucie email@example/com i "Looks like this is not an email"
      }

    }
    else {
        element.classList.remove('activePaper');
    }

  }
);
