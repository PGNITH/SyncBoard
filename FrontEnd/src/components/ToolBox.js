import React from "react";
import Logo from "../assets/logo1.png";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as BsIcon from "react-icons/bs";

import "../styles/Toolkit.css";
function ToolBox() {
	return (
		<div>
			<div className="toolkit">
				<li>
					<BsIcon.BsPen />
				</li>
				<li>
					<BsIcon.BsPaintBucket />
				</li>
				<li>
					<BsIcon.BsCircle />
				</li>
				<li>
					<BsIcon.BsSquare />
				</li>
				<li>
					<AiIcon.AiOutlineBgColors
						style={{ color: "#6D11EE", fontSize: "1.3rem" }}
					/>
				</li>
			</div>
		</div>
	);
}

export default ToolBox;
