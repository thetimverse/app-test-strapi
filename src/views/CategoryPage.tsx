import {useParams} from "react-router-dom";
import {useGetCategoryQuery} from "../entities/products/queries.ts";

function CategoryPage() {
    const {id} = useParams();
    const {data} = useGetCategoryQuery(Number(id));
    console.log(data?.data);

    return (
        <div><h2>{data?.data.attributes.name}</h2></div>
    );
}

export default CategoryPage