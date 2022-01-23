import React from "react";

const WithClass = (props) => {
  return <div className={props.classes}>{props.children}</div>;
};

export default WithClass;

// const withClass = (WrappeComponent, className) => {
//     return (props) => {
//       <div className={className}>
//         <WrappeComponent {...props} />
//       </div>;
//     };
//   };
