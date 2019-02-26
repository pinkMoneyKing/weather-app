export function CurrentWeatherByZipCode(zipCode, callbackSuccess, callbackError){
			fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&APPID=2e6df9d6535a9357d1c523ac78374cf2`)
			.then(res => res.json())
			.then((result) => {
					callbackSuccess(result);
				},
				(error) => {
					callbackError(error);
				})
};

export function CurrentForecastByZipCode(zipCode, callbackSuccess, callbackError){
			fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&units=imperial&APPID=2e6df9d6535a9357d1c523ac78374cf2`)
			.then(res => res.json())
			.then(
				(result) => {
					callbackSuccess(result);
				},
				(error) => {
					callbackError(error);
				})
};

// export function CurrentWeatherByName(name, callbackSuccess, callbackError){
// 			fetch(`http://api.openweathermap.org/data/2.5/weather?weather=${name}&units=imperial&APPID=2e6df9d6535a9357d1c523ac78374cf2`)
// 			.then(res => res.json())
// 			.then((result) => {
// 					callbackSuccess(result);
// 				},
// 				(error) => {
// 					callbackError(error);
// 				})
// };

// export function CurrentForecastByName(name, callbackSuccess, callbackError){
// 			fetch(`http://api.openweathermap.org/data/2.5/forecast?name=${name}&units=imperial&APPID=2e6df9d6535a9357d1c523ac78374cf2`)
// 			.then(res => res.json())
// 			.then(
// 				(result) => {
// 					callbackSuccess(result);
// 				},
// 				(error) => {
// 					callbackError(error);
// 				})
// };
