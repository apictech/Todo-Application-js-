// var h = document.createElement('h1')

// var myValue = document.createTextNode('Hello World!')

// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h);

// let val = 5

// while (val > 0) {
//     console.log(val);
//     val--;
// }


// The above code is not for project purpose and just for practice.



// From here onwards the project will start.


var ul = document.getElementById('list');
var listItem




// Selected the items.

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)


var removeAllButton = document.getElementById('removeAll')
removeAllButton.addEventListener('click', removeEveryItem)


// Binded functions with elements for functioning.

function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)

    if (item === ''){
        let para = document.createElement('p')
        para.className = 'visual'
        para.textContent = 'Enter Your todo'
        let parent = document.getElementById('controls')
        // let firstChild = parent.firstChild

        setTimeout(() => {
            parent.insertBefore(para, add)
        }, 3);
        
    }else{
        // create li
        li = document.createElement('li');
        
        // create checkbox
        var checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        checkBox.setAttribute('id', 'check')

        // create label
        var label = document.createElement('label')
        label.setAttribute('for', 'item') //optional

        // add these elements on web page

        ul.appendChild(label);
        li.appendChild(checkBox);
        label.appendChild(textnode);
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])

        setTimeout(() => {
            li.className = 'visual';
        }, 2);

        input.value = ''

    }


}

function removeItem() {
    listItem = ul.children
    for(let index = 0; index < listItem.length; index++){
        while (listItem[index] && listItem[index].children[0].checked) {
            ul.removeChild(listItem[index])
        }
        
    }
}

function removeEveryItem() {
    listItem = ul.children
    for(let index = 0; index < listItem.length; index++){
        while (listItem[index] && listItem[index].children[0]) {
            ul.removeChild(listItem[index])
        }
        
    }
}

