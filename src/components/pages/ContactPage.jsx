// const ContactPage = () => {
// 	return <div>ContactPage</div>;
// };
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Modal } from "../modal/Modal";



const url =
	"https://api.elchocrud.pro/api/v1/4b7fbb86b0a4abfba780e972bc2205e0/todos3";

export const ContactPage = () => {
	const [state, setState] = useState([]);
	const [modal, setModal] = useState(false);
	const [data, setData] = useState([]);
	const getTodo = async () => {
		try {
			const response = await axios.get(url);
			setState([...response.data]);
		} catch (error) {
			console.error(error);
		}
	};
  function modalYess (id) {
		const filtred = state.find((item) => item._id === id);
		setData([filtred])
		setModal(true);
	}
	useEffect(() => {
		getTodo();
	});
	return (
		<div>
			{state.map((item, index) => (
				<div key={index}>
					<p>{item.name}</p>
					<img src={item.img} alt="logo" />
					<p>{item.sen}</p>
					<button onClick={()=> modalYess(item._id)}>Modalka</button>
				</div>
			))}
			{modal && createPortal(
				<Modal setModal={setModal}>
					{data.map((item, index) => (
						<div key={index}>
							<p>{item.name}</p>
							<img src={item.img} alt="logo" />
							<p>{item.sen}</p>
						</div>
					))}
				</Modal>,
				document.getElementById('modal')
			)}
		</div>
	);
};




export default ContactPage;
