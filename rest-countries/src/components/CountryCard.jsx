export default function CountryCard({
  name,
  flag,
  population,
  region,
  capital
}) {
  return (
    <a className="country-card" href="#">

      <div className="flag-container">
        {/* TODO: Display the country flag */}
        <img src={flag} alt="" />
       
      </div>

      <div className="card-text">

        {/* TODO: Display country name */}
        <h3 className="card-title">{name}</h3>

        {/* TODO: Display population */}
        <p>
          <b>Population:{population} </b>
        </p>

        {/* TODO: Display region */}
        <p>
          <b>Region:{capital} </b>
        </p>

        {/* TODO: Display capital */}
        <p>
          <b>Capital:{region}</b>
        </p>

      </div>
    </a>
  )
}
