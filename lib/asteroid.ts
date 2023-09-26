

// get the number of asteroids for the week along with each date's data
export const fetchWeeklyData = async (): Promise<WeeklyAsteroidData> => {
  const response = await fetch('https://api.nasa.gov/neo/rest/v1/feed', {
    headers: {
      'x-api-key': process.env.API_KEY ?? ''
    },
    next: {revalidate: 3600}
  })

  const data: ApiResponse = await response.json()
  return formatWeeklyData(data)
}

// destructure and reformat the api data for an asteroid
const formatAsteroidListing = (asteroidData: NEOData) => {
  const {
      estimated_diameter_min: diameterMin,
      estimated_diameter_max: diameterMax
  } = asteroidData.estimated_diameter.feet;

  const approachDate = asteroidData.close_approach_data[0].close_approach_date_full;
  const velocity = parseFloat(asteroidData.close_approach_data[0].relative_velocity.miles_per_hour);

  let formattedName: string = asteroidData.name.replace('(', '').replace(')', '');
  if (formattedName.split(' ').length > 2) {
      formattedName = formattedName.substring(formattedName.indexOf(' ') + 1)
  }
      
  const {
      absolute_magnitude_h: magnitude,
      is_potentially_hazardous_asteroid: hazardous
  } = asteroidData;

  return {
      name: formattedName,
      magnitude,
      approachDate,
      hazardous,
      diameterMin,
      diameterMax,
      velocity
  }
}

const formatWeeklyData = (data: ApiResponse): WeeklyAsteroidData => {
  let days: {[key: string]:Array<Asteroid>} = {}

  for (let day in data.near_earth_objects) {
    days[day] = data.near_earth_objects[day].map(formatAsteroidListing)
  }
  return {
    weekCount: data.element_count,
    days
  }
}