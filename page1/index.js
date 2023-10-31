let btn = document.querySelector(".ajout");
let input = document.querySelector(".inp");
let boxs = document.querySelectorAll(".box");
let task = document.querySelectorAll(".task");
var drag=null;
btn.onclick = function() {
    if (input.value !== '') {
        boxs[0].innerHTML += `
            <div class="task tasktext" draggable="true">
                ${input.value}
            </div>`;
            input.value="";
    }
}
// dragstart
document.addEventListener('dragstart', e => {
    if (e.target.classList.contains('task')) {
        e.target.classList.add('ondrag');
        drag=task;
        console.log(drag);
    }
});
// dragEnd
document.addEventListener('dragend', e => { // Use 'dragend' for the drag end event
    if (e.target.classList.contains('task')) {
        e.target.classList.remove('ondrag');
        drag=null;
        console.log(drag);
    }
});
// dragover
boxs.forEach(box => {
    box.addEventListener('dragover',function(){
        console.log("dragover")
        this.style.backgroundColor = '#ffffff99';

    })
    box.addEventListener('dragleave',function(){
        console.log("dragover")
        this.style.backgroundColor = '#fff';

    })
    
});
