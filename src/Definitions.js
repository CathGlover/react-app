import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";
import "./Dictionary.css";

export default function Definitions(response) {
  if (response.definitions) {
    return (
      <div>
        <section>
          <h2>{response.definitions.word}</h2>
          {response.definitions.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {response.definitions.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meanings meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
