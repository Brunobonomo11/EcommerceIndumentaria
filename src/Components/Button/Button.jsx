import { useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'

const Button = () => {

    const [colorText, setColorText] = useState('black')
    const ButtonRef = useRef()

    console.log(ButtonRef)

    useEffect(() => {
        const handleScroll = () => {
            const button = ButtonRef.current

            const { y } = button.getBoundingClientRect()

            const color = y < 0 ? 'black' : 'blue'

            setColorText(color)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            <Link to='/detail/1' ref={ButtonRef} style={{ color: colorText}}>Buzos</Link>
            <Link to='/detail/2' ref={ButtonRef} style={{ color: colorText}}>Remeras</Link>
            <Link to='/detail/3' ref={ButtonRef} style={{ color: colorText}}>Pantalones</Link>
        </div>
    )
}

export default Button