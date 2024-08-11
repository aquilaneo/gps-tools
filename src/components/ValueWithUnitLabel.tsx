// 値と単位を表示するコンポーネント

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export interface ValueWithUnit {
	value: number;
	prefix?: string;
	unit?: string;
}

export interface ValueWithUnitLabelProps {
	value: ValueWithUnit;
}

const ValueWithUnitLabel = (props: ValueWithUnitLabelProps) => {
	// プレフィックスが与えられているか
	const hasPrefix = () => {
		return props.value.prefix !== undefined && props.value.prefix !== "";
	};

	// 単位が与えられているかどうか
	const hasUnit = () => {
		return props.value.unit !== undefined && props.value.unit !== "";
	};

	// 小さい文字共通スタイル
	const smallTextStyle = css({
		fontSize: "0.8em",
		userSelect: "none",
	});

	// プレフィックスのスタイル
	const prefixStyle = css(smallTextStyle, {
		marginRight: "0.2em",
	});

	// 単位のスタイル
	const unitStyle = css(smallTextStyle, {
		marginLeft: "0.2em",
	});

	return (
		<>
			<span className="value-with-unit">
				{/* プレフィックス部分 */}
				{hasPrefix() && (
					<span className="value-with-unit__prefix" css={prefixStyle}>
						{props.value.prefix}
					</span>
				)}

				{/* 値部分 */}
				<span className="value-with-unit__value">{props.value.value}</span>

				{/* 単位部分 */}
				{hasUnit() && (
					<span className="value-with-unit__unit" css={unitStyle}>
						{props.value.unit}
					</span>
				)}
			</span>
		</>
	);
};

export default ValueWithUnitLabel;
