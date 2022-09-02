// When I click Submit
let form = document.getElementById('addForm');
let itemList = document.getElementById('items')
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
// Add a li elemnt with input content and classes
function addItem(e) {
  e.preventDefault();
  
  let newItem = document.getElementById('item');
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem.value));
  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete';
  deleteBtn.appendChild(document.createTextNode('X'))
  li.appendChild(deleteBtn);

  itemList.appendChild(li);
};
// When I click delete delete the element
function removeItem(e) {
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
};
// When I type in search input field 
// Compare results of input field to items
// If items don't much display none
// else do animation
//
//