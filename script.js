// I NEED THREE THINGS AT START.


document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
        <span id="#taskname">
            ${document.querySelector('#newtask input').value}
        </span>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
        
        </div>
        `

        let current_tasks = document.querySelectorAll('.delete');
        for(let i = 0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove()
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        
        document.querySelector('#newtask input').value = '';


    }
}


//select first input, release alert if input is smaller than 0.

//else select text and add it as new <div>

// we'll see whats next