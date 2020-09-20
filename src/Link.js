import React from 'react';

export default function Link(props) {
  const a =
    'https://api.memegen.link/' +
    props.memeType +
    '/' +
    props.inputFirstLine +
    '/' +
    props.inputSecondLine +
    '.jpg';

  return (
    <>
      <p>
        Preview:
        <a href={a}>{a}</a>
      </p>
    </>
  );
}
