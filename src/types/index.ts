export type optionType = {
  name: string;
  lat: number;
  lon: number;
  country: string;
};

export type forecastType = {
  name: string;
  country: string;
  sunrise: number;
  sunset: number;
  timezone: number;
  list: [
    {
      dt: number;
      main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
      };
      weather: [
        {
          main: string;
          icon: string;
          description: string;
        }
      ];
      wind: {
        wind: number;
        gust: number;
        deg: number;
        speed: number;
      };
      clouds: {
        all: number;
      };
      pop: number;
      visibility: number;
    }
  ];
};
