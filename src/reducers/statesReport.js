

let todosReport_stored_demo = 0;

	let todosReport_stored = true;


	const items = JSON.parse(localStorage.getItem('itemsReport'));
	if(items === null || items == "undefined"){
		todosReport_stored = todosReport_stored_demo;
		localStorage.setItem("itemsReport", JSON.stringify(todo_demo_data));
	}else if (items) {
		todosReport_stored = items
	     //setItems(items);
	}

export let todosReport
 = todosReport_stored;