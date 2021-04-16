import React from 'react';

const sizes = {
  sm: [560, 315],
  md: [800, 450]
};

export const Youtube = ({ id, size='md' }) => (
  <iframe width={sizes[size][0]} height={sizes[size][1]} src={"https://www.youtube-nocookie.com/embed/" + id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
);
