const inputBox:HTMLElement = document.getElementById(
    elementId: 'input-box')

const listContainer:HTMLElement = document.getElementById(elementId:'list-container')

function addTask() {
    if (inputBox.value === ''){
        alert('You should write something!')
    }
    else {
        let li:HTMLElement = document.createElement(tagName:'li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
    }
    inputBox.value = ''
}
