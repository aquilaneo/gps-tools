// 値と単位を表示するコンポーネント

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export interface ValueWithUnitProps {
	value: number;
	prefix?: string;
	unit?: string;
}

const ValueWithUnit = (props: ValueWithUnitProps) => {
	// プレフィックスが与えられているか
	const hasPrefix = () => {
		return props.prefix !== undefined && props.prefix !== "";
	};

	// 単位が与えられているかどうか
	const hasUnit = () => {
		return props.unit !== undefined && props.unit !== "";
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
						{props.prefix}
					</span>
				)}

				{/* 値部分 */}
				<span className="value-with-unit__value">{props.value}</span>

				{/* 単位部分 */}
				{hasUnit() && (
					<span className="value-with-unit__unit" css={unitStyle}>
						{props.unit}
					</span>
				)}
			</span>
		</>
	);
};

export default ValueWithUnit;
