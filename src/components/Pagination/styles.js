import styled  from "styled-components";


export const PaginationStyle = styled.div`
  .container {
      position: fixed ;
      top: 7.5vh;
      left: 10%;
      height: 75vh;
      width: 85%;
      background-color: rgba(255,345,245, .85)
  }

    @media (min-width:786px) {
    .container {
        height: 50vh;
        width: 65%;
  }
    }
`