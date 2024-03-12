import './App.css'
import {useGetProductsQuery} from "./entities/products/queries.ts";
import Card from "./components/Card/Card.tsx";
import {styled} from "../styled-system/jsx";
import {Link} from "react-router-dom";

const StCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 1em 2em;
`

const StLink = styled(Link)`
    width: 415px;
`

function App() {
  const { data } = useGetProductsQuery();
  console.log(data);

  return <StCardContainer>
        { data?.data.map((product, index)=>
            <StLink to={`/products/${product.id}`} key={`${index}-${product.id}`}>
                <Card title={product.attributes.title} category={product.attributes.category.data.attributes.name}
                      description={product.attributes.description}
                      imageSrc={product.attributes.image.data.attributes.url} price={product.attributes.price}/>
            </StLink>
        )}
    </StCardContainer>

}

export default App
