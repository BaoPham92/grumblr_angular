let mineData = [
  { name: 'Build an app with Rails', completed: true },
  { name: 'Project 2', completed: true },
  { name: 'Build an app with Angular', completed: false },
  { name: 'Project 3', completed: false },
  { name: 'Build an app with Express', completed: false },
  { name: 'Build an app with Mongo', completed: false },
  { name: 'Build an app with React', completed: false },
  { name: 'Project 4', completed: false },
  { name: 'Become a Rockstar', completed: true }
  ]

  // let mineList = [
  // { name: 'Build an app with Rails', completed: true },
  // { name: 'Project 2', completed: true },
  // ]

angular
.module("mine", [])
.controller("mineController", [mineControllerFunction])
// .controller("mineController", [mineControllerList])


function mineControllerFunction (){
	this.mines = mineData;
	this.addMine = function() {
	let mine = {name: this.newMine, completed: false}
	this.mines.push(mine)
	}
}

// function mineControllerList (){
// 	this.lists = mineList;
// 	this.addList = function(){
// 	let list = {name: this.newList, completed: false}
// 	this.lists.push(mine)	
// 	}
// }