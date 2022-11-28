export const CountrieInfo = ({countrie}) => {
    console.log(countrie.name.official)
    if(countrie !== undefined){
        return (
            <div>
                <h2>{countrie.name.official}</h2>
                <p>{countrie.capital}</p>
                <p>{countrie.population}</p>
                <Languages languages={countrie.languages}/>
            </div>
        )
    }
    else{
        return <p>Undefined Countrie</p>
    }
    
};

const Language = (countrie) => {
    return <ul>{countrie.languages}</ul>
}

const Languages = (countrie) => {
    return (
        <li>
            {countrie.countrie.languages.map((item =>
                <Language key={item.languages} countrie={item}/>
            ))}
        </li>
    )
}
