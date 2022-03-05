import { useState } from 'react';
import './Like.css';

function Like() {
  const [likes, setLikes] = useState(0);

  return (
    <div className='Like'>

      <h1>
        <button onClick={() => setLikes(likes - 1)}>
          👎
        </button>
        {likes}
        <button onClick={() => setLikes(likes + 1)}>
          👍
        </button>
      </h1>
    </div>
  );
}

export default Like;
