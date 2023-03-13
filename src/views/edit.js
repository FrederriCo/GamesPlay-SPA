import { html } from '../../node_modules/lit-html/lit-html.js';
import * as gameServices from '../Services/games.js';
import { createSubmitHandler } from '../util.js';

const editTempalte = () => html`
<section id="edit-page" class="auth">
<form id="edit">
    <div class="container">

        <h1>Edit Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title">

        <label for="category">Category:</label>
        <input type="text" id="category" name="category">

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1">

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl">

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary"></textarea>
        <input class="btn submit" type="submit" value="Edit Game">

    </div>
</form>
</section>`;

export async function editView(ctx) {
    const gameId = ctx.params.id;
    const game = await gameServices.getById(gameId);

    ctx.render(editTempalte());
}