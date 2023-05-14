import React from "react";
import "./Dictionary.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank">
          Listen
        </a>
        <span className="phonetics">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return <span className="phonetics">{props.phonetic.text}</span>;
  }
}
