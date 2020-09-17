import React from 'react';
import Link from './Link';

export default function UserInput(props) {
  return (
    <>
      <br /> First Line of Text
      <br /> {props.inputFirstLine}
      <input
        value={props.inputFirstLine}
        onChange={(event) => {
          props.setInputFirstLine(event.currentTarget.value);
        }}
      ></input>
      <br /> Second Line of Text
      <br /> {props.inputSecondLine}
      <input
        value={props.inputSecondLine}
        onChange={(event) => {
          props.setInputSecondLine(event.currentTarget.value);
        }}
      ></input>
      <br />
      {props.memeType}
      <select
        name="memeTypes"
        id="memeTypes"
        onChange={(event) => {
          props.setMemeType(event.currentTarget.value);
        }}
      >
        <option value="tenguy">1 tenguy</option>
        <option value="afraid">2 afraid</option>
        <option value="apcr">3 apcr</option>
        <option value="older">4 older</option>
      </select>
      <br />{' '}
      <button
        onClick={() =>
          Link({ name: {}, firstLine: 'lineone', secondLine: 'linetwo' })
        }
      >
        submit
      </button>
      <br />
    </>
  );
}
