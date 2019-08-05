import React from 'react';
import './style.css'

// export default Button(props) {
//   return (
//     <div>
//       <button className="btn waves-effect waves-light" type="submit" name="action" {...props}>
//         {props.children}<i className="material-icons right">send</i>
//       </button>

//     </div>
//   );

// }


export default function Button(props) {

  return (
    <div>

      <button className="btn waves-effect waves-light" type="submit" name="action" {...props}>{props.children}
        <i className="material-icons right">send</i>
      </button>

    </div>
  );
}