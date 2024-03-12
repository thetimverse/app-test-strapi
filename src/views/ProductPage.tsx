import {useParams} from "react-router-dom";
import {useGetProductQuery} from "../entities/products/queries.ts";
import Text from "../components/Text/Text.tsx";
import {styled} from "../../styled-system/jsx";

const StImage = styled.img`
    width: 300px;
    border-radius: 20px;
`
const StContainer = styled.div`
    background-color: #fff;
    margin: 1em 3em;
    border-radius: 20px;
    padding: 1em 3em;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 5px;
    border: rgba(0, 0, 0, 0.10) 1px solid;
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
    gap: 30px;
`

function ProductPage() {
    const {id} = useParams()
    const {data} = useGetProductQuery(Number(id));
    // console.log(data?.data);
    const product = data?.data;

    return (
        <StContainer>
            <StContainerProduct>
                <StImage src={"http://localhost:1337" + data?.data.attributes.image.data.attributes.url}/>
                <StProductInfo>
                    <Text type={"title"}><h2>{product?.attributes.title}</h2></Text>
                    <Text type={"price"}><p>{data?.data.attributes.price} €</p></Text>
                </StProductInfo>
            </StContainerProduct>
        </StContainer>

    );
}

export default ProductPage