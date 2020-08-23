import styled  from "styled-components";


export const ModalStyle = styled.div`
  .container {
      position: fixed ;
      margin: 0 auto;
      top: 20vh;
      left: 10%;
      right: 25%;
      height: 75vh;
      width: 80%;
      background-color: rgba(255,345,245);
      overflow-y: scroll;
      border-radius: 1em;
  }
  span{
    display: inline-block;
    position: fixed;
    cursor: pointer;
    color: #000;
    font-size: 4rem;
    margin-bottom: 1em;
    align-self: right;

    &:hover{
      opacity: .8;
    }
  }
  .film__item {
    height: 100%;
  }
  .img__container{
    display: flex;
    flex-flow: column;
    height: 100%;
    align-items: center;
  }
  img{
    width: 50%;
  }
  .film__intro{
    display: grid;
    grid-template-columns: 1fr 1fr 100px;
    grid-template-areas: 
                        "title title date"
                        "lang    .  . "
                        "desc desc desc"
                        " .     .  rate";
    margin: 2.5em 2em 0;
    align-self: start;

  }
  .title{
    grid-area: title
  }
  .desc {
    grid-area: desc
  }
  .rate{
    grid-area: rate;
  }
    @media (min-width:786px) {
    .container {
        height: 50vh;
        width: 65%;
        left: 25%;
        right: 25%;
        overflow-y: hidden;

  }
  .img__container{
    flex-flow: row;
    align-items: center;
  }
  img{
    width: 30%;
  }

}
`