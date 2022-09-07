// When I click Submit
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);
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
function filterItems(e) {
  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
};
// If items don't much display none
// else do animation
