import React from 'react';

function Image({ image }) {
  return (
    <div>
      {
        image.map((item) => (
          <img src={item.urls.thumb} alt={item.alt_description}  key={item.id} />
        ))
        }
    </div>
  )
}

export default Image;
