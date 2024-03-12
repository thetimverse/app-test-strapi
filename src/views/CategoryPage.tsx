import {useParams} from "react-router-dom";

function CategoryPage() {
    const {id} = useParams();

    return (
        <div>{id}</div>
    );
}

export default CategoryPage