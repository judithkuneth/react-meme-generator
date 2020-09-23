import React from 'react';

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
      Pick a Meme: <br />
      <select
        name="memeTypes"
        id="memeTypes"
        onChange={(event) => {
          props.setMemeType(event.currentTarget.value);
        }}
      >
        <option value="empty">-- Empty --</option>
        <option value="tenguy">1 tenguy</option>
        <option value="afraid">2 afraid</option>
        <option value="apcr">3 apcr</option>
        <option value="older">4 older</option>
        <option value="noidea">5 noidea </option>
        <option value="regret">6 regret</option>
        <option value="boat">7 boat</option>
        <option value="hagrid">8 hagrid</option>
        <option value="sohappy">9 sohappy</option>
        <option value="captain">10 captain</option>
      </select>
    </>
  );
}
