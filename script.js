// Henter addTodo button
const addTodo = document.getElementById('addTodo')
// tell kor mange li-element som blir laga.
let count = 0

// eventlistner som utfører koden som ligg inn i den når den registrere et *klikk*.  
addTodo.addEventListener('click', function () {
    event.preventDefault(); // forhindre at nettsio refreshe etter et trykk på Add item knappen
    // lage ein variabel og hente element fra html
    const todoInput = document.getElementById('todoInput')
    const todoDisplay = document.getElementById('todoDisplay')
    // Lager ein variabel og lager et element i html 
    const todoItem = document.createElement('li')
    const deleteTodo = document.createElement('button')
    const todoText = document.createElement('span')
    // gir 'deleteTodo' tekst innholdet 'Done'
    deleteTodo.textContent = 'Done'
    // sjekke om todoInput.value er tom. (at du ikkje har skreve nåke i input-felte)
    if (todoInput.value === '') {
        // dont add
    }   else { /* hvis du har skreve nåke så får todoItem tekstinnholde til 
    todoInput verdien (da du har skreve i input-felte), så får todoItem ein button som barn
    og så får 'todoDisplay' 'todoItem' som barn og vises som et li-element på nettsiden.
    og til slutt tømmes input-felte for innhold (verdi) for å spella å viska ut da forriga du skreiv*/ 
    todoText.textContent = todoInput.value
    todoItem.appendChild(todoText)
    todoItem.appendChild(deleteTodo)
    todoDisplay.appendChild(todoItem)
    todoInput.value = ''
    // sett todoItem usynlig mens den rekne ut høgden til elemente sånn at den kan bli henta seinara.
    // detta for å får rette høgden på lengre teksta på mindre skjerma.
    todoItem.style.visibility = 'hidden'
    let itemHeight = todoItem.scrollHeight
    // sett stylingen til todoItem sånn at når den blir laga så får den ein height på 0.
    todoItem.style.height = '0'
    todoItem.style.minHeight = '0'
    // holder telling på li-element som blir lagt til
    count++
    // liten timeout sånn at ette elemente er laga så får den stylingen fra css.
    // sånn at den 'vokse' inn.
    
        setTimeout(() => {
            todoItem.style.visibility = ''
            todoItem.style.minHeight = ''
            // gir den ferdig kalkulerte høgden til elemente
            todoItem.style.height = `${itemHeight}px`
            setTimeout(() => {
                // fjerne fastsatt høgde, sånn at height er auto etter at animasjon er ferdig.
                // for meir responsiv høgde hvis du endre skjerm størrelse etter elemente har komt inn.
                todoItem.style.height = ''
            }, 300);
        }, 250);
    }

    // deklarere at isClicked er 'false'
    let isClicked = false

    // Eventlistner for å slette 'seg selv' når du trykker på X knappen.
    // Og så blir den minde og så sletta for å få animasjon på at den forsvinne,
    // samme som at den 'vokse' inn.
    deleteTodo.addEventListener('click', function () {
        if (isClicked) {
            todoItem.style.minHeight = '0'
            todoItem.style.height = '0'
            setTimeout(() => {
                todoItem.remove()
            }, 300);
        } else {
            // do nothing
        }
    // holder telling på li-element som blir fjerna
    count--
    })

    // gir ein class til oddetall og ein class til partall for å veksle mellom bakgrunnsfarge på kvert li-element.
    if (count % 2 !== 0) {
        todoItem.classList.add('first-color')
    } else {
        todoItem.classList.add('second-color')
    }

    // høre ette om du trykke på todoText
    todoItem.addEventListener('click', function() {
        // hvis isClicked er false, lag ei linja igjennom teksten og sei i fra at isClicked er true 
        if (!isClicked) {
            // liten switch på knappen fra (grønn og 'done' tekst) til (rød og 'X' tekst)
            // sånn at du må 'styrka' den av listo før du kan sletta den.
        todoText.style.textDecoration = 'line-through'
        todoItem.style.filter = 'brightness(80%)'
        deleteTodo.style.backgroundColor = 'red'
        deleteTodo.textContent = 'X'
        isClicked = true
        // hvis isClicked er true, fjern linjo fra teksten hvis du trykke igjen.
        // hvis du strøk nåke ut med et uhell så kan du trykka på 'todoItem' igjen 
        // for å gjera om utstrykinge. og så blir knappen tilbake til grønn og 'done' tekst.
        } else if (isClicked) {
            todoText.style.textDecoration = 'none'
            todoItem.style.filter = ''
            deleteTodo.style.backgroundColor = 'green'
            deleteTodo.textContent = 'Done'
            isClicked = false
        }
    })

})