
// formatted, more concise asteroid data 
type Asteroid = {
    name: string,
    magnitude: number,
    approachDate: string,
    hazardous: boolean,
    diameterMin: number,
    diameterMax: number,
    velocity: number
}

// formatted, more concise data for the entire week
type WeeklyAsteroidData = {
    weekCount: number,
    days: {[key: string]:Asteroid[]}
}


/**
 * API response types
 */


type DiameterData = {
    estimated_diameter_min: number,
    estimated_diameter_max: number
}

// data pertaining to an asteroid's approach
type CloseApproachData = {
    close_approach_date: string,
    close_approach_date_full: string,
    epoch_date_close_approach: number,
    relative_velocity: {
        kilometers_per_second: string,
        kilometers_per_hour: string,
        miles_per_hour: string
    },
    miss_distance: {
        astronomical: string,
        lunar: string,
        kilometers: string,
        miles: string
    },
    orbiting_body: string
}

// data for a singular near earth object/asteroid from the api
type NEOData = {
    links: string,
    id: string,
    neo_reference_id: string,
    name: string,
    nasa_jpl_url: string,
    absolute_magnitude_h: number
    estimated_diameter: {
        kilometers: DiameterData,
        meters: DiameterData,
        miles: DiameterData,
        feet: DiameterData
    },
    is_potentially_hazardous_asteroid: boolean,
    close_approach_data: Array<CloseApproachData>,
    is_sentry_object: boolean
}

// encompasses entire api response from Nasa's NEO api
type ApiResponse = {
    links: {
        next: string,
        previous: string,
        self: string
    }
    element_count: number,
    near_earth_objects: {[key: string]:Array<NEOData>}
}