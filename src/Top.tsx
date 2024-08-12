/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropertyCard, { type Property } from "./components/PropertyCard.tsx";
import UnitConversionCard, {
	type UnitButton,
} from "./components/UnitConversionCard.tsx";
import { msToKmh, msToKt } from "./utils/unit-conversion.ts";

function Top() {
	// 速度情報
	const unitButtons: UnitButton[] = [
		{
			unitLabel: "km/h",
			buttonValue: "km/h",
			unitConversionHandler: msToKmh,
		},
		{
			unitLabel: "m/s",
			buttonValue: "m/s",
			unitConversionHandler: (origValue: number) => origValue,
		},
		{
			unitLabel: "kt",
			buttonValue: "kt",
			unitConversionHandler: msToKt,
		},
	];

	// 位置情報
	const positionProperty: Property[] = [
		{
			label: "緯度",
			id: "latitude",
			value: { value: 35.685175 },
		},
		{
			label: "経度",
			id: "longitude",
			value: { value: 139.7528 },
		},
		{
			label: "精度",
			id: "accuracy",
			value: { value: 10, decimalPlaces: 1, prefix: "±", unit: "m" },
		},
	];

	// 標高情報
	const altitudeProperty: Property[] = [
		{
			label: "標高",
			id: "altitude",
			value: { value: 10, decimalPlaces: 1, unit: "m" },
		},
		{
			label: "精度",
			id: "accuracy",
			value: { value: 10, decimalPlaces: 1, prefix: "±", unit: "m" },
		},
	];

	// コンテナ要素のスタイル
	const containerStyle = css({
		padding: "1rem",
	});

	// カードのスタイル
	const cardStyle = css({
		"&:not(:first-of-type)": {
			marginTop: "2rem",
		},
	});

	return (
		<div css={containerStyle}>
			{/* 速度 */}
			<UnitConversionCard
				label="速度"
				origValue={80}
				unitButtons={unitButtons}
				cssStyle={cardStyle}
			/>

			{/* 位置情報 */}
			<PropertyCard properties={positionProperty} cssStyle={cardStyle} />

			{/*	標高情報 */}
			<PropertyCard properties={altitudeProperty} cssStyle={cardStyle} />
		</div>
	);
}

export default Top;
