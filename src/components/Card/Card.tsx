import CardImage from "./CardImage.tsx";
import Text from "../Text/Text.tsx";
import Tag from "../Tag/Tag.tsx";
import NumberInput from "../NumberInput/NumberInput.tsx";
import Button from "../Button/Button.tsx";
import { styled } from "../../../styled-system/jsx";

const StCard = styled.div`
    padding: 20px;
    border: rgba(0, 0, 0, 0.10) 1px solid;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 0 5px 5px;
    background-color: #fff;
    color: #0a0a0a;
`
const StCardButtons = styled.div`
    display: flex;
    gap: 10px;
`
const StCardCategories = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 10px;
    width: 100%;
`

interface CardProps {
    imageSrc?: string,
    title: string,
    description: string,
    category: string,
    price: number
    //productId: number
}

function Card({ imageSrc, title, description, price, category, ...props }: CardProps) {
    return (
        <StCard className={'card'} {...props}>
            <CardImage src={`${imageSrc}`} size={"small"}/>
            <Text type={"title"}><h3>{title}</h3></Text>
            <Text type={"body"}><p>{description}</p></Text>
            <Text type={"price"}><p>{price} €</p></Text>
            <StCardCategories>
                <Tag name={category}/>
            </StCardCategories>
            <NumberInput/>
            <StCardButtons>
                <Button primary={true} label={"Discover"} backgroundColor={"#0c0a09"} size={"large"} type={"submit"} />
                <Button primary={true} label={"Delete"} backgroundColor={"red"} size={"large"} />
            </StCardButtons>
        </StCard>
    );
}

export default Card