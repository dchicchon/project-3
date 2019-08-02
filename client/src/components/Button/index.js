import React from 'react';
import './style.css'

export default function Button({children}) {

  return (
    <div>

      <button class="btn waves-effect waves-light" type="submit" name="action">{children}
        <i class="material-icons right">send</i>
      </button>

    </div>
  );
}