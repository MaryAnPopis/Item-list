let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

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
    deleteButton.className = 'btn btn-danger btn-sm foat-right delete';
    deleteButton.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteButton);

    // Append li to list
    itemList.appendChild(li);
}