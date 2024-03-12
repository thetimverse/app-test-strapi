import './card.css'
import img from './placeholder.jpeg'
import {styled} from "../../../styled-system/jsx";

interface ImageProps {
    size?: 'small' | 'medium';
    src?: string
}

const StImageDiv = styled.div`
    border-radius: 10px;
    overflow: hidden;
`
const StImage = styled.img`
    width: 100%;
`

function CardImage ({ src = `${img}`, size = "medium" }:ImageProps) {
    return (
        <StImageDiv className={['card__image', `card__image--${size}`].join(' ')}>
            <StImage src={"http://localhost:1337"+src} alt="Image" />
        </StImageDiv>
    );
}

export default CardImage