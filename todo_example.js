//make a node app for to-do list, have to see what's in it and check off











var q, err = false;
var myArray = ['1','2',3,4,5];
var result = 0;

var ToDoList = {



initFunction : function(result) {

	this.promptUser(result);

	if(err) {
			console.log('***an error has occurred***');
			return;
		} else {
			switch (result.question) {
				case 1:
					myFunction.displayContents();
				case 2:
					console.log ('add');
				case 3:
					console.log ('complete');
				case q:
					break;
				default:
						console.log('a valid selection was not entered');
			}
		}


	},

	promptUser : function(result){

		var prompt = require('prompt');

		prompt.start();

		prompt.get([{
				name: 'question',
			type: 'integer',
			required: true

		}], function (err, result) {

					console.log('in promptUser, result:', result.question);
		});

	},

	displayMenu : function() {

			console.log('select 1) Print ToDo, 2) Add ToDo, 3) Complete ToDo');

	},

	displayList : function(){

		console.log('/n');
		console.log('Displaying contents ToDo list ...');
		console.log('-----------');

		myArray.forEach(function(value){
				console.log(value);
		});

	},

	printList : function(){},

	addItem : function(){

			console.log('enter item to be added');

	},

	deleteItem : function(){},

	displayError : function(){}

}

	ToDoList.initFunction(result);
