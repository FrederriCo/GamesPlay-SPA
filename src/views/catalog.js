import { html } from '../../node_modules/lit-html/lit-html.js'
import * as gameService from '../Services/games.js'

const catalogTemplate = (games) => html`
<section id="catalog-page">
    <h1>All Games</h1>    

    ${gamesList(games)}

</section>`;

const gamesList = (games) => {
    if(games.length == 0) {
        return html`<h3 class="no-articles">No articles yet</h3>`;
    } else {
        return games.map(cardTemplate);
    }
};

const cardTemplate = (game) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src=${game.imageUrl}>
         <h6>${game.category}</h6>
         <h2>${game.title}</h2>
         <a href="/details/${game._id}" class="details-button">Details</a>
    </div>

</div>`;

export async function catalogView(ctx) {
    const games = await gameService.getAllGames();

    ctx.render(catalogTemplate(games));
}