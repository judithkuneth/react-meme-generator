import React from 'react';
import UserInput from './UserInput';

// This is how link should look like:
// https://memegen.link/tenguy/your_text/goes_here.jpg?preview=true&watermark=none
// https://memegen.link/tenguy/First_Line/Second_Line.jpg?preview=true&watermark=none&share=true

export default function Link(props) {
  // let DownloadLink = {
  //   name: {}, // value from Drop down or radio button
  //   firstLine: {}, // input field
  //   secondLine: {}, //input field
  // };

  return (
    <>
      <h2>Click to Download:</h2>
      <a href={{ Link }}>
        {'https://memegen.link/' +
          props.memeType +
          '/' +
          props.inputFirstLine +
          '/' +
          props.inputSecondLine +
          '.jpg?preview=true&watermark=none&share=true'}
      </a>
    </>
  );
}

// export default function Link(LinkUrl) {
//   return <a href={LinkUrl}>'${LinkUrl}'</a>;
// }
