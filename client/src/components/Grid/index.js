import React from "react";


export function Container( props ) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`}{...props}>{props.children}</div>;
}


export function Row( props ) {
  return <div className={`row${props.fluid ? "-fluid" : ""}`}{...props}>{props.children}</div>
}

export function Col({ size, children }) {
    return (
      <div
        className={size
          .split(" ")
          .map(size => "col " + size)
          .join(" ")}
      >
        {children}
      </div>
    );
  }

