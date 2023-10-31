let btn = document.querySelector(".ajout");
    let input = document.querySelector(".inp");
    let boxs = document.querySelectorAll(".box");
    var drag = null;
    
    btn.onclick = function() {
        if (input.value !== '') {
            boxs[0].innerHTML += `
                <div class="task tasktext" draggable="true">
                    ${input.value}
                </div>`;
            input.value = "";
        }
    }
    
    // dragstart
    document.addEventListener('dragstart', e => {
        if (e.target.classList.contains('task')) {
            e.target.classList.add('ondrag');
            drag = e.target;
        }
    });
    
    // dragend
    document.addEventListener('dragend', e => {
        if (e.target.classList.contains('task')) {
            e.target.classList.remove('ondrag');
            drag = null;
        }
    });
    
    // dragover and drop for each box
    boxs.forEach(box => {
        box.addEventListener('dragover', function(e) {
            e.preventDefault();
            console.log("dragover");
            this.style.backgroundColor = '#ffffff99';
        });
    
        box.addEventListener('dragleave', function(e) {
            e.preventDefault();
            console.log("dragleave");
            this.style.backgroundColor = '#fff';
        });
    
        box.addEventListener('drop', function(e) {
            e.preventDefault();
            if (drag) {
                this.appendChild(drag);
                this.style.backgroundColor = '#fff';
            }
        });
    });