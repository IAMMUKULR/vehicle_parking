

let todo_demo_data = [
	{
		id:1,
		name:null,
		phone:null, 
		inTime: null, 
		outTime:null
	},
	{
		id:2,
		name:null,
		phone:null, 
		inTime: null, 
		outTime:null
	},
	{
		id:3,
		name:null,
		phone:null, 
		inTime: null, 
		outTime:null
	},
	{
		id:4,
		name:null,
		phone:null, 
		inTime: null, 
		outTime:null
	},
	{
		id:5,
		name:null,
		phone:null, 
		inTime: null, 
		outTime:null
	},
	{
		id:6,
		name:null,
		phone:null, 
		inTime: null, 
		outTime:null
	},
	{
		id:7,
		name:null,
		phone:null, 
		inTime: null, 
		outTime:null
	},
	{
		id:8,
		name:null,
		phone:null, 
		inTime: null, 
		outTime:null
	},
	{
		id:9,
		name:null,
		phone:null, 
		inTime: null, 
		outTime:null
	},
	{
		id:10,
		name:null,
		phone:null, 
		inTime: null, 
		outTime:null
	},
	{
		id:11,
		name:null,
		phone:null, 
		inTime: null, 
		outTime:null
	},
	{
		id:12,
		name:null,
		phone:null, 
		inTime: null, 
		outTime:null
	},
	{
		id:13,
		name:null,
		phone:null, inTime: null, 
	outTime:null
	},
	{
		id:14,
		name:null,
		phone:null, inTime: null, 
	outTime:null
	},
	{
		id:15,
	name:null,
		phone:null, inTime: null, 
	outTime:null
	},
	{
		id:16,
		name:null,
		phone:null, inTime: null, 
	outTime:null
	},
	{
		id:17,
		name:null,
		phone:null, inTime: null, 
	outTime:null
	},
	{
		id:18,
		name:null,
		phone:null, inTime: null, 
	outTime:null
	},
	{
		id:19,
		name:null,
		phone:null, inTime: null, 
	outTime:null
	},
	{
		id:20,
		name:null,
		phone:null, inTime: null, 
	outTime:null
	}
	]

	let todos_stored = true;


	const items = JSON.parse(localStorage.getItem('items'));
	if(items === null || items == "undefined"){
		todos_stored = todo_demo_data;
		localStorage.setItem("items", JSON.stringify(todo_demo_data));
	}else if (items) {
		todos_stored = items
	     //setItems(items);
	}

export let todos= todos_stored;