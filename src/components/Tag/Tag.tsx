import {styled} from "../../../styled-system/jsx";

const StTag = styled.div`
    padding: 7px 20px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 14px;
    background-color: #373750;
    color: #fff;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    width: fit-content;
`

interface TagProps {
    name: string
}
function Tag({name = "Category"}:TagProps) {
    return (
        <StTag>{name}</StTag>
    );
}

export default Tag