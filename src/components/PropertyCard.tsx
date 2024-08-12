// 値と単位のリストを表示するカードコンポーネント

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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

	// li要素
	const propertyItems = props.properties.map((property) => (
		<li key={property.id} css={propertyListStyle}>
			<div>{property.label}</div>
			<ValueWithUnitLabel value={property.value} />
		</li>
	));

	return (
		<>
			<Card>
				<CardContent>
					<ul>{propertyItems}</ul>
				</CardContent>
			</Card>
		</>
	);
};

export default PropertyCard;
