import {Link, useParams} from "react-router-dom";
import {useGetCategoryQuery} from "../entities/products/queries.ts";
import Header from "../components/Header/Header.tsx";
import Card from "../components/Card/Card.tsx";
import {styled} from "../../styled-system/jsx";

const StCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 1em 2em;
`

const StLink = styled(Link)`
    width: 415px;
`
const StCategoryTitle = styled.h2`
    font-weight: 700;
    font-size: 28px;
`

function CategoryPage() {
    const {id} = useParams();
    const {data} = useGetCategoryQuery(Number(id));
    console.log(data?.data);

    return (
        <div>
            <Header/>
            <StCategoryTitle>{data?.data.attributes.name}</StCategoryTitle>
            <StCardContainer>
                {
                    data?.data.attributes?.products?.data?.length? (
                        data?.data.attributes.products.data.map((product, index) =>
                            <StLink to={`/products/${product.id}`} key={`${index}-${product.id}`}>
                                <Card title={product.attributes.title} category={data?.data.attributes.name}
                                  description={product.attributes.description}
                                  imageSrc={product.attributes.image.data.attributes.url}
                                  price={product.attributes.price}/>
                            </StLink>
                        )
                    ):(
                        <h3>There is no product from that category in your wishlist.</h3>
                    )
                }
            </StCardContainer>
        </div>
    );
}

export default CategoryPage