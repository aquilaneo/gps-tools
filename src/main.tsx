/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material";
import emotionReset from "emotion-reset";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Top from "./Top.tsx";

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
		backgroundColor: "#f2f2f8",
		fontFamily:
			'"Helvetica Neue", Arial, "Hiragino Maru Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
	},
});

const targetElem = document.getElementById("root");
if (targetElem !== null) {
	createRoot(targetElem).render(
		<>
			<Global styles={globalStyle} />
			<StrictMode>
				<ThemeProvider theme={muiTheme}>
					<Top />
				</ThemeProvider>
			</StrictMode>
		</>,
	);
}
