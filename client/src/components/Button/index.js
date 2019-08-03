import React from 'react';
import './style.css'

function Button(props, { children }) {
  return (
    <div>
      <button className="btn waves-effect waves-light" type="submit" name="action" {...props}>
        {children}<i className="material-icons right">send</i>
      </button>

    </div>
  );

}

export default Button;

// export default function Button({ children }) {

//   return (
//     <div>

//       <button className="btn waves-effect waves-light" type="submit" name="action">{children}
//         <i className="material-icons right">send</i>
//       </button>

//     </div>
//   );
// }