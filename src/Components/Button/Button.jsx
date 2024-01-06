const Button = (props) => {
    console.log(props)
    return <button onClick={props.callback} style={{ color: props.color}}>{props.text}</button>
}

export default Button