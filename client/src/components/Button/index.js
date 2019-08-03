import React from 'react';
import './style.css'

export default function Button({ children }) {

  return (
    <div>

      <button className="btn waves-effect waves-light" type="submit" name="action">{children}
        <i className="material-icons right">send</i>
      </button>

    </div>
  );
}