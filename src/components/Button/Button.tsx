import './button.css'
import {JSX} from "react";

type ButtonProps = {
    primary?: boolean;
    backgroundColor?: string;
    color?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
} & JSX.IntrinsicElements["button"]

function Button ({ primary = false, size = 'medium', backgroundColor, color, label, ...props }: ButtonProps) {
    const mode = primary ? 'button--primary' : 'button--secondary';
    return (
        <button type="button"
                className={['button', `button--${size}`, mode].join(' ')}
                style={{ backgroundColor, color }}
                {...props}>
            {label}
        </button>
    );
}

export default Button