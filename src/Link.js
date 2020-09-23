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

export default function Link(props) {
  const a = `https://api.memegen.link/${props.memeType}/${props.inputFirstLine}/${props.inputSecondLine}.png`;

  const b = a.replace(/ /g, '_');

  return (
    <>
      <p>
        Click to Preview:
        <br />
        <a href={b} target="blank">
          {b}
        </a>
      </p>
      Click to download: <br />
      <button onClick={() => forceDownload(b, 'image.jpg')}>Download</button>
    </>
  );
}
