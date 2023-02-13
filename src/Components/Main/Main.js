import React, { useState } from 'react'
import './Main.css'
import axios from 'axios'

function Main() {

  const [word, setWord] = useState("")
  const [wordOutput, setWordOutput] = useState("")

  const onClick = () => {

    const encodedParams = new URLSearchParams();
    encodedParams.append("source_language", "en");
    encodedParams.append("target_language", "tr");
    encodedParams.append("text", `${word}`);

    const options = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '9452a09c0bmsh844d338fef42946p1419c1jsnb844a2c88c9d',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      data: encodedParams
    };

    axios.request(options).then(function (response) {
      console.log(response.data.data.translatedText);
      setWordOutput(response.data.data.translatedText)
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <div className='main'>
      <div className="form__group field">
        <input required="" placeholder="Name" className="form__field" value={word} onChange={(e) => {
          setWord(e.target.value)
        }} type="input" />
        <label className="form__label" htmlFor="name">Text</label>
      </div>

      <button type='button' onClick={onClick}>Search</button>

      <div className='translatedText'>
        <p>
          {
            wordOutput
          }
        </p>
      </div>
    </div>
  )
}

export default Main
