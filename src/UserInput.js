import React from 'react';

function forceDownload(url, fileName) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  xhr.onload = function () {
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(this.response);
    var tag = document.createElement('a');
    tag.href = imageUrl;
    tag.download = fileName;
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
  };
  xhr.send();
}

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
        <option value="empty">-- Empty --</option>
        <option
          style={{
            backgroundImage:
              'https://memegen.link/tenguy/your_text/goes_here.jpg?preview=true&watermark=none.png',
          }}
          value="tenguy"
        >
          1 tenguy
        </option>
        <option value="afraid">2 afraid</option>
        <option value="apcr">3 apcr</option>
        <option value="older">4 older</option>
      </select>
      <br />{' '}
      <button
        onClick={() =>
          forceDownload(
            'https://api.memegen.link/afraid/hello/.jpg',
            'image.jpg',
          )
        }
      >
        Download
      </button>
      <br />
    </>
  );
}
