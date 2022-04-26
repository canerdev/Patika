let userForm = document.querySelector('#userForm')
userForm.addEventListener('submit', formHandler) 

function formHandler() {
    event.preventDefault()
    const USER_NAME = document.querySelector('#name')
    const SCORE = document.querySelector("#score")
    
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value) 
        localStorage.setItem('name', USER_NAME.value)
        localStorage.setItem('score', SCORE.value)
        USER_NAME.value = ''
        SCORE.value = ''
    } else {
        alert('yanlis bilgi girdiniz')
    }

}

let userListDOM = document.querySelector('#userList')

const addItem = (name, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
    ${name}
    <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add('list-group-item',  'list-group-item-secondary', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
} 


// additem i tamamla 
// listeyi ekle 
// hata mesaji gonder alert ile 
// sayi seyini ayarla mavi olan 

