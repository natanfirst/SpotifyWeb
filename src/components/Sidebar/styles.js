import styled from "styled-components";

export const Container = styled.aside`
    width: 200px;
    height: 100%;
    background: #121212;
    color: #b3b3b3;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div {
        padding: 25px;
    }
`;

export const Nav = styled.ul`
    list-style: none;

    &:first-child {
        margin: 0;
    }

    li {
        display: flex;
        flex-direction: column;
        a {
            color: inherit;
            text-decoration: none;
            font-size: 16px;
            line-height: 32px;
            font-weight: ${props => (props.main ? 'bold' : 'normal')};

            &:hover {
                color: #fff;
            }
        }
        span{
            font-size: 11px;
            text-transform: uppercase;
            line-height: 22px;
            letter-spacing: 1.11px;
            font-weight: 300;
        }
    }
`;

export const HomeLink = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 12px;

    svg {
        margin-right: 16px;
        font-size: 26px;
    }
`;

export const BrowserLink = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 12px;
    svg {
        margin-right: 16px;
        font-size: 26px;
    }
`;

export const RadioLink = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 12px;
    svg {
        margin-right: 16px;
        font-size: 26px;
    }
`;

export const NewPlaylist = styled.button`
    background: transparent;
    border: 0;
    border-top: 1px solid #282828;
    font-size: 13px;
    color: #b3b3b3;
    display: flex;
    align-items: center;
    padding: 15px 25px;
    cursor: pointer;

    :hover {
        color: #fff;
    }
    img {
        margin-right: 10px;
    }
`;
