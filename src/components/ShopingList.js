import React from 'react';
import gamesList from '../data/gamesList';


// const ShopingList = () => {
//   return (
//     <ul>
//       {
//         gamesList.map(game => (
//           <li key={game.id}>{ game }</li>
//         ))
//       }
//     </ul>
//   );
// };


const ShopingList = () => {

  const genresArr = (acc, currentGame) => {
    return acc.includes(currentGame.genre) ? acc : acc.concat(currentGame.genre);
  }

  const genres = gamesList.reduce(genresArr, []);

  return(
    <div>
      <ul>  
				{genres.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>

      <ul>
				{gamesList.map((game) => (
					<li key={game.id}>{game.title}</li>
				))}
			</ul>
    </div>
  )
}






export default ShopingList;