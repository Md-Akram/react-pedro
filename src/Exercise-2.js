const planets = [
    { name: 'mars', isGasPlanet: false },
    { name: 'earth', isGasPlanet: false },
    { name: 'jupitar', isGasPlanet: true },
    { name: 'venus', isGasPlanet: false },
    { name: 'neptune', isGasPlanet: true },
    { name: 'uranus', isGasPlanet: true },
]

const ExerciseTwo = () => {
    return <div>
        {
            planets.map((planet, key) => {
                return (
                    <div key={key}>
                        {planet.isGasPlanet ? <h1>{planet.name}</h1> : ''}
                    </div>

                )
            })
        }
    </div>
}

export default ExerciseTwo