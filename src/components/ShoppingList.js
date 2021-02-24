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


const ShoppingList = () => {

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

      <ul className="gamesList">
				{gamesList.map((gameItem) => (
					<li key={gameItem.id} className="gameItem">
            {gameItem.title}
            {/* {gameItem.isBestSale && <span> 🔥</span>} */}

            {gameItem.isSpecialOffer && <div className="gameSales">Special Offer</div>}
          </li>
				))}
			</ul>
    </div>
  )
}

export default ShoppingList;
