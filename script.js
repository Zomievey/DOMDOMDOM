//window selects the entire browser, .onload ; created and anonymous function for the entire body

window.onload = () => {
    //alias document.body for simplicity
    let body = document.body;
    let container = document.createElement("div");
    container.className = "container";

    // created variable to keep track of number of boxes created
    let numberOfBoxes = 0
    // created button so that we can append it to the body
    let addSquareButton = document.createElement("button");
    // set button text
    addSquareButton.innerText = "Add Sqaure";
    //listen for button clicks
    addSquareButton.addEventListener("click", () => {
        //increases number of boxes created by +1 each click
        numberOfBoxes++;
        //created a div
        let div = document.createElement("div");
        //gave div the box "class" so that our CSS is applied
        div.className = "box";
        //give each box a unique ID
        div.id = numberOfBoxes;
        //add box to body
        container.appendChild(div);

        div.addEventListener("mouseover", () => {
            div.innerText = div.id;

        });
        div.addEventListener("mouseout", () => {
            div.innerText = '';

        });












        // change backgroundcolor of square when square is clicked

        let colorArray = ['#7FFF00', '#008B8B', '#DA70D6', '#FFFF09', '#00B3E6',
            '#E6B333', '#9967E6', '#FF6347'];

        div.addEventListener('click', () => {
            div.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];

        });

        // remove square after even id is dbl clicked or remove square before odd id is dbl clicked

        div.addEventListener('dblclick', () => {
            if (div.id % 2 === 0) {
                if (div.nextSibling === null) {
                    alert('There is nothing after this square');
                } else {
                    div.removeChild(div.nextSibling);
                }
                console.log('even');
            } else {
                if (div.previousSibling === null) {
                    alert('There is nothing before this square');
                } else {
                    console.log('odd');
                    div.removeChild(div.previousSibling);
                }
            }
        })

    });

    body.appendChild(addSquareButton);
    body.appendChild(container);

};







