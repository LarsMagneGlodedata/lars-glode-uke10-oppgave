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
    // gir 'deleteTodo' tekst innholdet 'X'
    deleteTodo.textContent = 'X'
    // sjekke om todoInput.value er tom. (at du ikkje har skreve nåke i input-felte)
    if (todoInput.value === '') {
        // dont add
    }   else { /* hvis du har skreve nåke så får todoItem tekstinnholde til 
    todoInput verdien (da du har skreve i input-felte), så får todoItem ein button som barn
    og så får 'todoDisplay' 'todoItem' som barn og vises som et li-element på nettsiden.
    og til slutt tømmes input-felte for innhold (verdi) for å gjøre det enklere å legge til flere ting i listen.*/ 
    todoText.textContent = todoInput.value
    todoItem.appendChild(todoText)
    todoItem.appendChild(deleteTodo)
    todoDisplay.appendChild(todoItem)
    todoInput.value = ''
    // holder telling på li-element som blir lagt til
    count++
    }

    // deklarere at isClicked er 'false'
    let isClicked = false

    // Eventlistner for å slette 'seg selv' når du trykker på X knappen.
    deleteTodo.addEventListener('click', function () {
        if (isClicked) {
            todoItem.remove()
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

    // høre ette om du trykke på todoItem
    todoItem.addEventListener('click', function() {
        // hvis isClicked er false, lag ei linja igjennom teksten og sei i fra at isClicked er true 
        if (!isClicked) {
        todoText.style.textDecoration = 'line-through'
        isClicked = true
        // hvis isClicked er true, fjern linjo fra teksten hvis du trykke igjen.
        } else if (isClicked) {
            todoText.style.textDecoration = 'none'
            isClicked = false
        }
    })

})