import React from 'react';
import './style.css'

export default function Button(props) {

  return (
    <div>

      <button class="btn waves-effect waves-light" type="submit" name="action" {...props}>{props.children}
        <i class="material-icons right">send</i>
      </button>

    </div>
  );
}