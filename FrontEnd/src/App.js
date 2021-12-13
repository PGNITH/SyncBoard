import React from "react";
import "./styles/App.css";
import Logo from "./assets/logo1.png";
import * as FaIcon from "react-icons/fa";
import * as IoIcon from "react-icons/io";
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
						<div className="header">
							<div className="left header">
								<img
									src={Logo}
									alt="Logo"
									width="30"
									height="30"
									style={{
										padding: "8px",
										borderRight: "0.05px hsla(0,0%,50%,0.4) solid",
									}}
								/>
								<div>
									<h3 style={{ display: "inline-block" }}>SyncBoard</h3>
								</div>
							</div>
							<div className="right">
								<ul>
									<li>
										<FaIcon.FaSearchengin />
									</li>
									<li>
										<IoIcon.IoMdMoon />
									</li>
									<li>
										<IoIcon.IoMdSend />
									</li>
									<li>
										<IoIcon.IoMdSettings />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
