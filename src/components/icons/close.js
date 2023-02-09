import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  /* animation-name: rotate; */
  /* animation-duration: 0.3s; */

  /* @keyframes rotate {
      from {transform: rotate(0deg);}
      to {transform: rotate(180deg);}
  } */
`;

// const Div = styled.div`
//   .active{
//     animation-name: rotate;
//     animation-duration: 0.3s;
//   }
//   .inactive{
  
//     animation-name: rotateback;
//     animation-duration: 0.3s;
//   }
//   @keyframes rotate {
//       from {transform: rotate(0deg);}
//       to {transform: rotate(180deg);}
//   }
//   @keyframes rotateback {
//       from {transform: rotate(0deg);}
//       to {transform: rotate(-180deg);}
//   }
// `;
const IconClose = (props) => {
  return (
    // <Div>
      <Svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className={`bi bi-x ${props.navVisibility ? "active" : "inactive"}`} viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </Svg>
    // </Div>
  )
}

export default IconClose