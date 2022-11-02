import React,{useState,useEffect} from 'react';
import {addTodo} from '../reducers/actions';
import {useDispatch} from 'react-redux';
import './TodoInput.css';
function TodoInput()
{
	let dispatch=useDispatch();
	let [id,setId]=useState();
	let [name,setName]=useState();
	let [phone,setPhone]=useState();
	

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
	
		<div className="col m-2 hero-image   text-center font-weight-bold text-white" >
		<br/>
		
			<h1 className="text-center"> Add Your Details</h1>
		<br/>
			<div className="size text-center">
			<label style={{backgroundColor: "black"}}>Enter parking slot Number</label>
				<input 
				type="number" 
				value={id}
				onChange={(e)=>setId(e.target.value)}
				className="col form-control"/><br/>
				<label style={{backgroundColor: "black"}}>Enter Your Name</label>
				<input 
				type="text" 
				value={name}
				onChange={(e)=>setName(e.target.value)}
				className="col form-control" /><br/>
				<label style={{backgroundColor: "black"}}>Enter Vehicle Number</label>
				<input
				 type="text"  
				 value={phone}
				 onChange={(e)=>setPhone(e.target.value)}
				className="col form-control"/>
				<br/>
				<div className="text-center">
				<button 
					onClick={()=>
					{
					
						
						dispatch(addTodo(
						{
							id:id,
							name:name,
							phone:phone,
							inTime:  datetime,
							outTime:"0000-00-00 00:00:00"

						}));
						setPhone('');
						setName('');
						setId('');
					}}
				className="btn btn-primary  mx-2"><strong>Add</strong></button>
				</div>
			</div>
		</div>
		)
	
}
export default TodoInput;