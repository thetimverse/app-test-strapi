import {styled} from "../../../styled-system/jsx";
import {Link} from "react-router-dom";

const StHeader = styled.header`
    background-color: #fff;
    color: #0a0a0a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    padding: 1em 3em;
`
const StNav = styled.ul`
    display: flex;
    gap: 20px;
`
function Header() {
    return (
        <StHeader>
            <p className={"logo"}>Wish<span>List</span></p>
            <StNav>
                <Link to={"/"}>Home</Link>
                <Link to={"/products"}>Products</Link>
                <Link to={"/categories"}>Categories</Link>
            </StNav>
        </StHeader>
    );
}

export default Header