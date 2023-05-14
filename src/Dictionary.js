import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Definitions from "./Definitions";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [definitions, setDefinitions] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setDefinitions(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(url).then(handleResponse);
    let sheCodesApiKey = "edf069311acf2bebo10f4bbbc53249t3";
    let sheCodesUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${sheCodesApiKey}`;
    axios.get(sheCodesUrl).then(handlePexelsResponse);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>What are you looking for?</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a word, e.g. sea, seaside, shells, ocean"
              onChange={handleKeywordChange}
            />
          </form>
        </section>
        <Definitions definitions={definitions} />
        <section>
          <Photos photos={photos} />
        </section>
      </div>
    );
  } else {
    load();
  }
}
