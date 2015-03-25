function handleDragStart(e) {
this.style.opacity='0.5';
    }
var Produktua = document.querySelectorAll('#cont_products .product');
[].forEach.call(Produktua, function(pro) {
    pro.addEventListener('dragstart', handleDragStart, false);
    pro.addEventListener('drag', handleDragStart, false);
     pro.addEventListener('dragenter', handleDragStart, false);
     pro.addEventListener('dragleave', handleDragStart, false);
     pro.addEventListener('dragover', handleDragStart, false);
     pro.addEventListener('drag', handleDragStart, false);
     pro.addEventListener('drop', handleDragStart, false);
     pro.addEventListener('dragend', handleDragStart, false);
});
function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}
function handleDragEnter(e) {
    // this / e.target is the current hover target.
    this.classList.add('over');
}

function handleDragLeave(e) {
    this.classList.remove('over');  // this / e.target is previous target element.
}

var Produktua = document.querySelectorAll('#cont_products .product');
[].forEach.call(Produktuak, function(pro) {
    pro.addEventListener('dragstart', handleDragStart, false);
    pro.addEventListener('dragenter', handleDragEnter, false);
    pro.addEventListener('dragover', handleDragOver, false);
   pro.addEventListener('dragleave', handleDragLeave, false);
});
function handleDrop(e) {
    // this / e.target is current target element.
    if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
    }
    // See the section on the DataTransfer object.
    return false;
}

function handleDragEnd(e) {
    // this/e.target is the source node.
    [].forEach.call(Produktua, function (pro) {
        pro.classList.remove('over');
    });
}

var Produktua = document.querySelectorAll('#cont_products .product');
[].forEach.call(Produktua, function(pro) {
   pro.addEventListener('dragstart', handleDragStart, false);
   pro.addEventListener('dragenter', handleDragEnter, false);
   pro.addEventListener('dragover', handleDragOver, false);
   pro.addEventListener('dragleave', handleDragLeave, false);
    pro.addEventListener('drop', handleDrop, false);
    pro.addEventListener('dragend', handleDragEnd, false);
});
