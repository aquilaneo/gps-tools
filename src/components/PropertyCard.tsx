// 値と単位のリストを表示するカードコンポーネント

/** @jsxImportSource @emotion/react */
import { type SerializedStyles, css } from "@emotion/react";
import { Card, CardContent } from "@mui/material";
import ValueWithUnitLabel, {
	type ValueWithUnit,
} from "./ValueWithUnitLabel.tsx";

export interface Property {
	id: string;
	label: string;
	value: ValueWithUnit;
}

export interface PropertyCardProps {
	properties: Property[];
	cssStyle?: SerializedStyles;
}

const PropertyCard = (props: PropertyCardProps) => {
	// li要素のスタイル
	const propertyListStyle = css({
		display: "flex",
		justifyContent: "space-between",
		"&:not(:first-of-type)": {
			marginTop: "0.5rem",
		},
	});

	const labelStyle = css({
		fontSize: "1.2rem",
	});
	const valueStyle = css({
		fontSize: "1.5rem",
	});

	// li要素
	const propertyItems = props.properties.map((property) => (
		<li key={property.id} css={propertyListStyle}>
			<div css={labelStyle}>{property.label}</div>
			<div css={valueStyle}>
				<ValueWithUnitLabel value={property.value} />
			</div>
		</li>
	));

	return (
		<>
			<Card variant="outlined" css={props.cssStyle}>
				<CardContent>
					<ul>{propertyItems}</ul>
				</CardContent>
			</Card>
		</>
	);
};

export default PropertyCard;
