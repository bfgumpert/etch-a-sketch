let gridSize = 16;
const container = document.querySelector('#container');

function createDivs(gridSize) {
    for(let i = 0; i < gridSize * gridSize; i++) {
        const content = document.createElement('div');
        content.classList = "content";
        //content.id = "content";
        //content.textContent = 'asdf' + i;
        let columns = "";
        for(let j = 0; j < gridSize; j++) {
            columns += "1fr ";
        };
        container.style.gridTemplateColumns = columns;
        container.style.gridTemplateRows = columns;  
        container.appendChild(content);
    };
};

function createHoverEvents() {
    let test = document.getElementsByClassName("content");

    for(let i = 0; i < gridSize * gridSize; i++) {
        test[i].addEventListener("mouseenter", function(event){
            event.target.style.background = getRandomColor();
        });
    };
};

function removeDivs() {
    let test = document.getElementsByClassName("content");

    contentClass.forEach(function(e) {
        container.removeChild(e);
    });
};

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

clear.addEventListener("click", function(e) {
    contentClass.forEach(function(element) {
        element.style.background = "white";
    });

    let i = 0
    while (i < 30) {
        let numberBlocks = prompt("Please enter the desired grid size (e.g. 16 would create a 16x16 grid");

        if (numberBlocks != null) {
            if (numberBlocks > 0 && numberBlocks < 65) {
                gridSize = numberBlocks;
                break;
            }
            else {
                alert("Please enter a number between 1-64.");
                continue;
            }
        }
        else {
            alert("Please enter a number between 1-64.");
            continue;
        }
    }

    contentClass = document.querySelectorAll('.content');

    removeDivs();
    createDivs(gridSize);
    createHoverEvents();
});

createDivs(gridSize);
createHoverEvents();
let contentClass = document.querySelectorAll('.content');