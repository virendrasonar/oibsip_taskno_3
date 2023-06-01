const addItemInput = document.querySelector('.addItemInput');
const addItemButton = document.querySelector('.addItemButton');
const listUl = document.querySelector('.list ul');

function attachListItemButtons(li) {
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);

  let edit = document.createElement('button');
  edit.className = 'edit';
  edit.textContent = 'Edit';
  li.appendChild(edit);
}

addItemButton.addEventListener('click', () => {
  let inputValue = addItemInput.value.trim();
  if (inputValue !== '') {
    let li = document.createElement('li');
    li.textContent = inputValue;
    attachListItemButtons(li);
    listUl.appendChild(li);
    addItemInput.value = '';
    li.style.backgroundColor = 'yellow';
    li.style.color = 'black';
  }
});

listUl.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const li = event.target.parentNode;

    if (event.target.className === 'remove') {
      let ul = li.parentNode;
      ul.removeChild(li);
    } else if (event.target.className === 'edit') {
      const text = li.firstChild.textContent;
      const editText = prompt('Edit the item:', text);
      if (editText !== null && editText !== '') {
        li.firstChild.textContent = editText;
      }
    }
  }
});

// Set background color and text color for existing list items
const listItems = listUl.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.backgroundColor = 'yellow';
  listItems[i].style.color = 'black';
}
