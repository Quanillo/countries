export const Filter = (props) => {
  console.log(props.filter)
    return(
      <div>
        Find countries: <input value={props.filter} onChange={props.handleChangeFilter}/>
      </div>
    )
  }