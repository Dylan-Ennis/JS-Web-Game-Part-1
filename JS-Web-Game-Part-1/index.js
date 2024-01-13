
function newImage (path,left,bottom) {
    let blank = document.createElement('img')
blank.src = path
blank.style.position = 'fixed'
blank.style.left = left + 'px'
blank.style.bottom = bottom + 'px'
document.body.append(blank)
return blank
}


function newItem(path, left, bottom) {
    let blank = newImage(path, left, bottom)

blank.addEventListener('dblclick', function() {
    blank.remove()
})
}

newImage('assets/green-Character.gif',100,100)
newImage('assets/pine-tree.png',450,200)
newImage('assets/tree.png' ,200, 300)
newImage('assets/pillar.png' ,350, 100)
newImage('assets/crate.png' ,150, 200)
newImage('assets/well.png' ,500, 425)
newItem('assets/sword.png' ,500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)
 