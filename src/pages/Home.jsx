import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  function getContacts(){
	fetch('https://playground.4geeks.com/contact/agendas/spiderman/contacts')
	.then( (response)=> response.json() )
	.then( (data)=> {
		console.log(data.contacts)
		dispatch({
		 type: 'load_contacts',
		 payload: { 
			   newContacts: data.contacts
		   }
	   })
	
	} )
  }

  	useEffect(()=>{
		console.log('se cargo home')
		getContacts()
	},[])

  function deleteContact(idToDelete){
    console.log('deleteContact' + idToDelete)
	const requestOptions = {
		method: "DELETE",
		redirect: "follow"
	};

	fetch("https://playground.4geeks.com/contact/agendas/spiderman/contacts/"+idToDelete, requestOptions)
	.then((response) => response.text())
	.then((result) => {
		console.log(result)
		getContacts()
	})
    // dispatch({
    //   type: 'delete_contact',
    //   payload: { indexDelete: indexToDelete}
    // })
  }

	return (
		<div className="text-center mt-5">
			<h2>Contactos</h2>
			<ul className="list-group">
				{store && store.contacts?.map((item, index) => {
					return (
					<li
						key={index}  // React key for list items.
						className="list-group-item d-flex justify-content-between"
						>   
						<div>
						<p>index: {index}</p>
						<p>Id: {item.id}</p>
						<p>Name: {item.name}</p>
						<p>Phone: {item.phone}</p>
						<p>email: {item.email}</p>
						</div>        
						<button onClick={()=>deleteContact(item.id)} >Eliminar {index}</button>    
						
					</li>
					);
				})}
			</ul>
		</div>
	);
}; 