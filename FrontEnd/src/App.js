import React from "react";
import "./styles/App.css";
import Logo from "./assets/logo.png";
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
					<div
						className="head"
						style={{
							borderRadius: "10px",
							height: "8%",
							backgroundColor: "#ffffff",
						}}
					>
						<header>
							<div className="header">
								<img
									src={Logo}
									alt="Logo"
									width="20"
									style={{
										padding: "5px",

										borderRight: "0.05px hsla(0,0%,50%,0.4) solid",
									}}
								/>
							</div>
						</header>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
