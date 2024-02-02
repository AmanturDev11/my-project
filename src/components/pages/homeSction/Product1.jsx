import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import scss from "../Product1.module.scss";
import { createPortal } from "react-dom";
import { Modal } from "../../modal/Modal";

const url =
	"https://api.elchocrud.pro/api/v1/ca72c74103c7a7396ade19fd2c2fd595/todos";

export const Product1 = () => {
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
		<div className={scss.container}>
      <div>

        </div>
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
