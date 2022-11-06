// todoListCreator(This was linked to my button)
document.addEventListener("todoListCreator", function() {
    const item = document.getElementById("todoInput")

    // const todoForm = document.getElementById("todoForm")
    // const text = document.createTextNode(item)
    const newListItem = document.createElement("li")
    // newListItem.appendChild(text) 
    // console.log('text? ', text, ' newListItem ', newListItem, ' item? ', item)
    document.getElementById("todoList").appendChild(newListItem)
    document.getElementById("todoInput").addEventListener("keydown", function(e) {
      
        console.log(" Which code? ", e.code)
        
        if (e.code == "Enter") { 
            console.log(" ENTER KEY CLICKED? ", e.code === 'Enter')
            // document.getElementById("buttonId"); //REmoved the .click() from here. 
            document.getElementById("todoInput"); //Attempted to change this to todoInput
        }
        // document
	    // .querySelector('todoInput')
	    // .addEventListener('click', function(e) {
        //     if (e.code === 13)
	    // 	e.preventDefault();
        // });
        e.code.preventDefault(); 
    });
})

// Monishas todo list:
// 1. Be sure that the todo input event listener is added even without the button click
// 2. Event listener for todoInput should also be added without the user need to click the "add to list" button, (which runs toDo list function todoList)
// 3. Double check the e.code and use the new code for my enter key
// 4. All keys are getting captures; how do I use default for everything but enter? 
// 5. Hacker rank questions
// 6. servers perform minification so when searching these websites code take away what you can but they will be more difficult. MAybe Google search GitHub
// 7.Give myself until Tuesday, if I dont finish by then, use the solution. 

//Changed my button attachment to the input instead of the button. NOPE!!
//Talked with Ashir about it; we had a comms kerfuffle so I;m still waiting on his input. 
//Noticed when I click enter after entering some data into my text box, this data shows up at the end of my URL. This is coming from me using the text input inside the form. 
//Tried taking my input out of the form and put it in the H1 instead...NOPE!! 
//Starting to wonder if I should just skip this issue...