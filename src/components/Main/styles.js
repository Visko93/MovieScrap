import styled  from "styled-components";


export const MainStyle = styled.div`
  .container {
    margin: 0 auto;
    max-width:1000px;
    padding: 40px;
}

.title {
    font-size: 4.4rem;
    text-align: center
}

.form {
    display:grid;
}

.label {
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
    text-transform: uppercase;
}

.input {
    font-size: 1.6rem;
    padding: 0.5rem 2rem;
    line-height: 2.8rem;
    border-radius: 20px;
    border: 1px solid #ddd;
    margin-bottom: 1rem;
}

.button {
    background-color: rgba(0,0,0,0.75);
    color: white;
    padding: 1rem 2rem;
    border: 1px solid rgba(0,0,0,0.75);
    border-radius: 20px;
    font-size: 1.4rem;
    cursor: pointer;
    transition: background-color 250ms;

    &:hover {
      background-color: rgba(0,0,0,.85)
    }

    @media (min-width:786px) {
        grid-template-columns: auto 1fr auto;
        grid-gap: 1rem;
        align-items: center;
    }
}
`