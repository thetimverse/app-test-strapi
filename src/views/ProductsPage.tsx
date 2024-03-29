import {styled} from "../../styled-system/jsx";
import {Link} from "react-router-dom";
import Header from "../components/Header/Header.tsx";
import Card from "../components/Card/Card.tsx";
import {useGetProductsQuery} from "../entities/products/queries.ts";


const StCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: flex-start;
    padding: 1em 2em;
`

const StLink = styled(Link)`
    width: 415px;
`

function ProductsPage() {
    const { data } = useGetProductsQuery();
    console.log(data);

    return (
        <div>
            <Header/>
            <StCardContainer>
                { data?.data.map((product, index)=>
                    <StLink to={`/products/${product.id}`} key={`${index}-${product.id}`}>
                        <Card title={product.attributes.title} category={product.attributes.category.data.attributes.name}
                              description={product.attributes.description}
                              imageSrc={product.attributes.image.data.attributes.url} price={product.attributes.price}/>
                    </StLink>
                )}
            </StCardContainer>
        </div>
    );
}

export default ProductsPage