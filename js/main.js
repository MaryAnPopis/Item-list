let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter evento
filter.addEventListener('keyup', filterItems);

function addItem(e) {
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById('item').value;

    // Create new <li></li>
    let li = document.createElement('li');
    // Add class name
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button
    let deleteButton = document.createElement('button');
    // Add classes to delete button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    deleteButton.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteButton);

    // Append li to list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm("Are you sure?")) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items
function filterItems(e) {
    // Convert to loweCase
    let text = e.target.value.toLowerCase();
    // Get the li's
    let items = itemList.getElementsByTagName('li');
    // Convert array
    Array.from(items).forEach(function(item){
        // Get the item name
        let itemName = item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1 ){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });

}