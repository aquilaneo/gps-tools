import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const targetElem = document.getElementById("root");
if (targetElem !== null) {
	createRoot(targetElem).render(
		<>
			<Global styles={css(emotionReset)} />
			<StrictMode>
				<App />
			</StrictMode>
		</>,
	);
}
