// 単位変更ボタン付きの値表示カード

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
	Card,
	CardContent,
	ToggleButton,
	ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
import ValueWithUnitLabel, {
	type ValueWithUnit,
} from "./ValueWithUnitLabel.tsx";

export interface UnitButton {
	unitLabel: string;
	unitConversionHandler: (origValue: number) => number;
	buttonValue: string;
}

export interface UnitConversionCardProps {
	label: string;
	origValue: number;
	unitButtons: UnitButton[];
}

const unitConversionCard = (props: UnitConversionCardProps) => {
	// 単位ボタンがあるかどうか
	const hasUnitButtons = props.unitButtons.length > 0;

	// 選択されているボタンのvalue値
	const [selectedUnitValue, setSelectedUnitValue] = useState(
		hasUnitButtons ? props.unitButtons[0].buttonValue : "",
	);

	// 選択されているボタン情報
	const selectedUnitButton = props.unitButtons.find(
		(item) => item.buttonValue === selectedUnitValue,
	);

	// 表示する値
	const displayValue =
		selectedUnitButton !== undefined && !Number.isNaN(props.origValue)
			? selectedUnitButton.unitConversionHandler(props.origValue)
			: Number.NaN;
	// 単位付きの値
	const valueWithUnit: ValueWithUnit = {
		value: displayValue,
		unit: selectedUnitButton?.unitLabel,
	};

	// クリックイベント
	const onChange = (_: React.MouseEvent<HTMLElement>, value: string | null) => {
		if (value === null) {
			return;
		}
		setSelectedUnitValue(value);
	};

	// スタイル
	const labelStyle = css({
		fontSize: "1.5rem",
	});
	const valueWithUnitContainerStyle = css({
		fontSize: "3rem",
		textAlign: "right",
	});
	const toggleButtonContainerStyle = css({
		marginTop: "1rem",
	});

	const toggleButtons = props.unitButtons.map((item) => (
		<ToggleButton value={item.buttonValue} key={item.unitLabel}>
			{item.unitLabel}
		</ToggleButton>
	));

	return (
		<Card>
			<CardContent>
				{/* 値表示 */}
				<div>
					<div css={labelStyle}>{props.label}</div>
					<div css={valueWithUnitContainerStyle}>
						<ValueWithUnitLabel value={valueWithUnit} />
					</div>
				</div>

				{/* 単位変更ボタン */}
				{hasUnitButtons && (
					<div css={toggleButtonContainerStyle}>
						<ToggleButtonGroup
							value={selectedUnitValue}
							exclusive
							color="primary"
							fullWidth
							onChange={onChange}
						>
							{toggleButtons}
						</ToggleButtonGroup>
					</div>
				)}
			</CardContent>
		</Card>
	);
};

export default unitConversionCard;
