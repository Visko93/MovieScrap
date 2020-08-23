import styled from "styled-components";

export const ListStyle = styled.div`
    .film__list {
      display: flex;
      flex-flow: wrap;
      justify-content: space-evenly;
      text-align: center;

    }

    .film__item{
      max-width: 300px;
      margin: .3em .75em
    }
    .img__container {
      position: relative;

      

      &:hover .summary__hover {
        opacity: 1;
      }
    }
         
    img {
      max-width: 100%;
      height: 100%;
      border-radius: .5em;
    }
    .summary__hover {
      position: absolute;
      display: flex;
      flex-flow: column;
      text-align: center;
      height: 100%;
      width: 100%;
      border-radius: .5em;
      top:0;
      left:0;
      padding: .75em;
      color: #FFF;
      background-color: rgba(10,10,10,.6);
      opacity: 0;
      overflow-y: scroll;
      cursor: pointer;
      transition: all 350ms ease-in;

      h3 { position: relative;}
      h3::after{
        content: '';
        position:absolute;
        width: 6em;
        height: 2px;
        bottom: 0;
        left:0;
        background-color: #f0f0f0;
        transition: all 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      p {
        margin-top: .3em;
        font-size: 1.75rem;
        letter-spacing: 1.2px;
        line-height: 1.8rem

      }
      small {
        margin-top: .75em;
        align-self: flex-end;
        font-weight: bold;
      }
    }

    @media (min-width:786px) {


    }
  
`