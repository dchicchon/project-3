import React from 'react';
import './style.css'


export default function Button(props) {

  return (
    <div>

      <button className="btn waves-effect waves-light blue" type="submit" name="action" {...props}>{props.children}</button>
        
    </div>
  );
}