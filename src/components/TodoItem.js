import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {deleteTodo}from '../reducers/actions';
import {addTodo} from '../reducers/actions';
import './TodoInput.css';


function TodoItem({todo})
{
	let dispatch=useDispatch();
	let id=todo.id;
	let [name,setName]=useState();
	let [phone,setPhone]=useState();

    //console.log(todo);
		//----------------
		var currentdate = new Date(); 
		var datetime =    currentdate.getFullYear() + "/"
						+ (currentdate.getMonth()+1)  + "/" 
						+ currentdate.getDate() + " "  
						+ currentdate.getHours() + ":"  
						+ currentdate.getMinutes() + ":" 
						+ currentdate.getSeconds();
		//----------------

	return(
	
		
			<div className=" d-inline-block col-md-2  ">
				

				{todo.name?
					<div className="col mx-auto  border border-dark m-3 bg-light hero-image-booked">
					<div className="p-1 text-white text-center">
					<strong>This slot is booked</strong></div>
					<div className="p-1 text-white text-center">
					<strong> Parking Slot No.#{todo.id}</strong></div>
				<div className=" text-white text-center">
				<p> <strong>Name: {todo.name}</strong></p>
					
				</div>
				<div className=" text-white text-center">
				<p> <strong>Vehicle: {todo.phone}</strong></p>
					
				</div>

				<div className=" text-white text-center">
				<p>Checkin:{todo.inTime}</p>
					
				</div>

				<div className="text-center">
				<button
				onClick={()=>{
					setPhone('');
						setName('');
					dispatch(deleteTodo(
					{
						...todo,
							name:null,//name,
							phone:null,//phone,
							inTime:null,//</div></div>inTime,
							outTime:null//datetime
					}

								
							))

							console.log({
								...todo,
									name:"",//name,
									phone:"",//phone,
									inTime:"",//</div></div>inTime,
									outTime:""//datetime
							});	


						}} className="btn btn-danger border border-white "> <strong>Leave </strong></button>
				</div>
				</div>:
				<div className="col m-3 bg-dark   hero-image-empty">
				<div className="p-2 text-center ">
				<strong> Parking Slot No. #{todo.id}</strong></div>
				<label className="text-center"><strong>Enter Your Name</strong></label>
				<input 
				type="text" 
				value={name}
				onChange={(e)=>setName(e.target.value)}
				className="col form-control"/>
				<label className="text-center" ><strong>Enter Vehicle Number</strong></label>
				<input
				 type="text"  
				 value={phone}
				 onChange={(e)=>setPhone(e.target.value)}
				className="col form-control"/>
				<div className="text-center">
				<button
				onClick={()=>
					{
						dispatch(addTodo(
						{
							...todo,
							name:name,
							phone:phone,
							inTime:  datetime,
							outTime:"0000-00-00 00:00:00"

						}));
						console.log({
							...todo,
							name:name,
							phone:phone,
							inTime:  datetime,
							outTime:"0000-00-00 00:00:00"
						});	
						setPhone('');
						setName('');
						
					}}
				
				 className="btn btn-dark border border-white m-2"><strong> Book</strong> </button>
				 </div>
				 </div>}
				
				

				
			</div>
		
	)
}
export default TodoItem;
