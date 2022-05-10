import './Button.scss'

const STYLES = ['btn--primary', 'btn--outline', 'btn-link']
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']
const COLORS = ['primary', 'blue', 'red', 'green']

const Button = ({
                    children,
                    type,
                    onClick,
                    buttonStyle,
                    buttonSize,
                    buttonColor
                }) => {

    const getStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const getSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const getColor = COLORS.includes(buttonColor) ? buttonColor : COLORS[0]

    return (
        <>
            <button
            className={`btn ${getStyle} ${getSize} ${getColor}`}
            >
                {children}
            </button>
        </>
    )
}

export default Button