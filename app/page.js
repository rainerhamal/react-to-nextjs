// move the likes state and the import:
// import { useState } from 'react';
import LikeButton from './like-button';
 
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  // move the likes state and the import:
  // const [likes, setLikes] = useState(0);
 
  // Move the <button> element and the handleClick() function from page.js to your new LikeButton component:
  // function handleClick() {
  //   setLikes(likes + 1);
  // }
 
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
 
      {/* Move the <button> element and the handleClick() function from page.js to your new LikeButton component: */}
      {/* <button onClick={handleClick}>Like ({likes})</button> */}

      <LikeButton />

      
    </div>
  );
}