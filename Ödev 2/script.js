let toDoInput = document.querySelector('#toDo')
let addBtn = document.querySelector('#addBtn')

function addToDo () {
    

    if (toDoInput.value && toDoInput.value.trim() != '') {
        const ulDOM = document.querySelector('.list-group')
        let liDOM = document.createElement('li')

        liDOM.innerHTML = `${toDoInput.value} <button class='deleteBtn' type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
          </svg>
        </button>`

        liDOM.classList.add("list-group-item", "mb-2", "d-flex", "align-items-center", "justify-content-between")
        
        ulDOM.appendChild(liDOM)
        toDoInput.value = ''
        
        liDOM.addEventListener('click', (e) => {
            e.target.classList.add('checked')
        })

        // delete items
        const deleteBtn = document.querySelector('li>button')
        var current_tasks = document.querySelectorAll(".list-group-item");
        for(var i=0; i<current_tasks.length; i++){ 
            deleteBtn.addEventListener('click', function(){
                this.parentElement.remove();
            })
        }

        // toast message
        var toastElList = [].slice.call(document.querySelectorAll('.toast-added'))
        var toastList = toastElList.map(function(toastEl) {
            return new bootstrap.Toast(toastEl)
        })
        toastList.forEach(toast => toast.show())

    } else if (!toDoInput.value) {
        // toast message 
        var toastElList = [].slice.call(document.querySelectorAll('.toast-failed'))
        var toastList = toastElList.map(function(toastEl) {
            return new bootstrap.Toast(toastEl)
        })
        toastList.forEach(toast => toast.show())
    }
}
addBtn.addEventListener('click', addToDo)

// done func

// function done(e) {
//     console.log('done')
// }
