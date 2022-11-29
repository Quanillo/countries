export const Filter = (props) => {
    return(
      <div>
        Find countries: <input value={props.filter} onChange={props.handleChangeFilter}/>
      </div>
    )
  }