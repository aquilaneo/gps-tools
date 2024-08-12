import { useEffect, useState } from "react";

export interface GeolocationInfo {
	latitude: number | null;
	longitude: number | null;
	positionAccuracy: number | null;
	altitude: number | null;
	altitudeAccuracy: number | null;
	speed: number | null;
}

const useGeolocation = () => {
	const [geolocationInfo, setGeolocationInfo] = useState<GeolocationInfo>({
		latitude: null,
		longitude: null,
		positionAccuracy: null,
		altitude: null,
		altitudeAccuracy: null,
		speed: null,
	});

	// 初回のみ実行
	useEffect(() => {
		const successCallback = (geolocationPosition: GeolocationPosition) => {
			// 取得成功時に状態更新
			setGeolocationInfo({
				latitude: geolocationPosition.coords.latitude,
				longitude: geolocationPosition.coords.longitude,
				positionAccuracy: geolocationPosition.coords.accuracy,
				altitude: geolocationPosition.coords.altitude,
				altitudeAccuracy: geolocationPosition.coords.altitudeAccuracy,
				speed: geolocationPosition.coords.speed,
			});
		};
		const errorCallback = (error: GeolocationPositionError) => {
			console.error("Geolocation error!", error);
		};

		// Geolocationの監視開始
		const watchId = navigator.geolocation.watchPosition(
			successCallback,
			errorCallback,
		);

		// 終了処理
		return () => navigator.geolocation.clearWatch(watchId);
	}, []);

	return geolocationInfo;
};

export default useGeolocation;
