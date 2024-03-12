import {styled} from "../../../styled-system/jsx";

const StHeader = styled.header`
    background-color: #0a0a0a;
    color: #fff;
    display: flex;
    justify-content: space-between;
    width: 100%;
`
function Header() {
    return (
        <StHeader>
            <p>LOGO</p>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Categories</li>
                </ul>
            </nav>
        </StHeader>
    );
}

export default Header