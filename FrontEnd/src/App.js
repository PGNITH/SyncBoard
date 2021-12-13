import React from "react";
import "./styles/App.css";

import Header from "./components/Header";
import ToolBox from "./components/ToolBox";
function App() {
	return (
		<>
			<div
				className="container"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: "100%",
					width: "100%",
					position: "absolute",
				}}
			>
				<div
					className="inner"
					style={{
						marginTop: "10px",
						borderRadius: "10px",
						height: "95%",
						width: "97%",
						position: "absolute",
						background: "#f9f9f9",
					}}
				>
					<Header />
					<ToolBox />
				</div>
			</div>
		</>
	);
}

export default App;
