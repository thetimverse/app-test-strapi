import {useParams} from "react-router-dom";
import {useGetProductQuery} from "../entities/products/queries.ts";
import Text from "../components/Text/Text.tsx";
import {styled} from "../../styled-system/jsx";
import Button from "../components/Button/Button.tsx";
import Tag from "../components/Tag/Tag.tsx";
import NumberInput from "../components/NumberInput/NumberInput.tsx";

const StImage = styled.img`
    width: 50%;
    border-radius: 20px;
`
const StContainer = styled.div`
    background-color: #fff;
    margin: 1em 3em 0;
    border-radius: 20px;
    padding: 1em 3em 0;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 5px;
    border: rgba(0, 0, 0, 0.10) 1px solid;
    min-height: 90vh;
    display: flex;
`
const StContainerProduct = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
`
const StProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
`

function ProductPage() {
    const {id} = useParams()
    const {data} = useGetProductQuery(Number(id));
    console.log(data?.data);
    const product = data?.data;

    return (
        <StContainer>
            <StContainerProduct>
                <StImage src={"http://localhost:1337" + data?.data.attributes.image.data.attributes.url}/>
                <StProductInfo>
                    <Text type={"title"}><h2>{product?.attributes.title}</h2></Text>
                    <Text type={"price"}><p>{data?.data.attributes.price} €</p></Text>
                    <Tag name={`${product?.attributes.category.data.attributes.name}`}/>
                    <Text type={"body"}><p>{product?.attributes.description}</p></Text>
                    <NumberInput/>
                    <div>
                        <Button label={"Buy"} size={"large"} primary={true} type={"submit"}/>
                        <Button label={"Delete from wishlist"} size={"large"} primary={true} type={"submit"}
                                backgroundColor={"red"}/>
                    </div>
                </StProductInfo>
            </StContainerProduct>
        </StContainer>
    );
}

export default ProductPage