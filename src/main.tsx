import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const targetElem = document.getElementById("root");
if (targetElem !== null) {
	createRoot(targetElem).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
