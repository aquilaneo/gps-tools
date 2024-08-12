/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material";
import emotionReset from "emotion-reset";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Material UIのテーマ
const muiTheme = createTheme({
	typography: {
		button: {
			textTransform: "none",
		},
	},
});

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
				<ThemeProvider theme={muiTheme}>
					<App />
				</ThemeProvider>
			</StrictMode>
		</>,
	);
}
