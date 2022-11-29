export const CountrieInfo = ({countrie}) => {
        return (
            <div>
                <h2>{countrie.name.official}</h2>
                <img src={countrie.flags.png} />
                <p>Capital: {countrie.capital}</p>
                <p>Population: {countrie.population}</p>
                <p>Languages: </p>
                <Languages languages={countrie}/>
            </div>
        )
};

const Languages = (countrie) => {
    return (
        <ul>
            {Object.values(countrie.languages.languages).map((item =>
                <li key={item} >{item}</li>
            ))}
        </ul>
    )
}


