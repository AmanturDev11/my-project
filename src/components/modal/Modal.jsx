import React from "react";

export const Modal = ({ children, setModal }) => {
  const modalNoo = () => {
    setModal(null);
  }
	return (
		<div>
			<div>{children}</div>
      <button onClick={modalNoo}>delete</button>
		</div>
	);
};
