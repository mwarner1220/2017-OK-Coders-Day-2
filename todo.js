//Internet example of a to-do list

var taskInput = document.getElementById("New-Task");
var addButton =document.getElementByTagName("button")[0];
var incompleteTasksHolder = document.getElementByID("Incomplete-Tasks");
var completedTasksHolder = document.getElementByID("Completed-Tasks");

//New Task List

var createNewTaskElement = function(taskString) {
	//Create Item for List
	var listItem = document.createElement("li");

	//input checkbox
	var checkBox = document.createElement("input");
	//label
	var label = document.createElement("label");
	//input text
	var editInput = document.createElement("input");
	//button.edit
	var editButton = document.createElement("button");
	//button.delete
	var deleteButton = document.createElement("button");

	//Modify each element

	checkBox.type = "checkbox";
	editInput.type = "text";
	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = taskString;

	//Append each element
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;
}


//Add new task
var addTask = function(){
	console.log("Add task...");

	//Create a new list item with text from new-task:
	var listItem = createNewTaskElement(taskInput.value);
	//Append listItem to incompleteTasksHolder
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value = "";
}

//Edit existing task
var editTask = function(){
	console.log("Edit Task...");

	var listItem - this.parentNode;

	var editInput = listItem.querySelector("input[type=text]")
	var label = listItem.querySelector("label");

	var containsClass = listItem.classList.contains("editMode");
	//if the class of the parent is .editMode
	if(containsClass) {
		//switch from .editMode
		//Make label text become input's value
		label.innerText = editInput.value;
	} else {
		//switch to .editMode
		//input value becomes the label's text
	editInput.value = label.innerText;
}

//Toggle .editMode on parent
listItem.classList.Toggle("editMode");

}

//Delete existing task
var deleteTask = function(){
	console.log("Delete task...");
	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	//Remove parent list item from the ul
	ul.RemoveChild(listItem);

}
