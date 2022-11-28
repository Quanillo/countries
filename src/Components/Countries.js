import { Countrie } from "./Countrie"

const Countries = (props) => {
    return (
      <div>
        {props.isInFilter.map((item =>
        <Countrie key={item.name.official} props={item}/>
        ))}
      </div>
    )
  }

  export {Countries}