export const Countrie = ({props}) => {
    if(props.name !== undefined)
        return <p>{props.name.official}</p>
};