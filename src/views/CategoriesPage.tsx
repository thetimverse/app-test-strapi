import Header from "../components/Header/Header.tsx";
import {useGetCategoriesQuery} from "../entities/products/queries.ts";
import {Link} from "react-router-dom";
import {styled} from "../../styled-system/jsx";
import Text from "../components/Text/Text.tsx";

const StCategoriesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: center;
    row-gap: 20px;
    margin-top: 30px;
`

const StCategoryLink = styled(Link)`
    height: 200px;
    width: 55%;
    border: rgba(0, 0, 0, 0.10) 1px solid;
    box-shadow: rgba(0, 0, 0, 0.15) 0 5px 5px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    transition: background-color .3s;

    &:hover {
        background-color: #8e99ff;
    }
`

function CategoriesPage() {
    const { data } = useGetCategoriesQuery();
    console.log(data);

    return (
        <div>
            <Header/>
            <h2>Categories</h2>
            <StCategoriesContainer>
                {
                    data?.data.map((category, index)=>
                        <StCategoryLink to={`/categories/${category.id}`} key={`${index}-${category.id}`}>
                            <Text type={"price"}>
                                <h3>{category.attributes.name}</h3>
                            </Text>
                        </StCategoryLink>
                    )
                }
            </StCategoriesContainer>
        </div>
    );
}

export default CategoriesPage