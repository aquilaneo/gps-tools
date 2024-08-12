/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// グローバルスタイル
const globalStyle = css(emotionReset, {
	body: {
		fontFamily:
			'"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
	},
});

const targetElem = document.getElementById("root");
if (targetElem !== null) {
	createRoot(targetElem).render(
		<>
			<Global styles={globalStyle} />
			<StrictMode>
				<App />
			</StrictMode>
		</>,
	);
}
