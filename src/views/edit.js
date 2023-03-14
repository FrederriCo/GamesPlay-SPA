import { html } from '../../node_modules/lit-html/lit-html.js';
import * as gameServices from '../Services/games.js';
import { createSubmitHandler } from '../util.js';

const editTempalte = (game, onSubmit) => html`
<section id="edit-page" class="auth">
<form @submit=${onSubmit} id="edit">
    <div class="container">

        <h1>Edit Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title".value=${game.title}>

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" .value=${game.category}>

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${game.maxLevel}>

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" .value=${game.imageUrl}>

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary" .value=${game.summary}></textarea>
        <input class="btn submit" type="submit" value="Edit Game">

    </div>
</form>
</section>`;

export async function editView(ctx) {
    const gameId = ctx.params.id;
    const game = await gameServices.getById(gameId);

    ctx.render(editTempalte(game, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
    const gameId = ctx.params.id;

    if (Object.values(data).some(d => d == '')) {
        return alert('All fields are required!');
    }

    await gameServices.update(gameId, {
        title: data.title,
        category: data.category,
        maxLevel: data.maxLevel,
        imageUrl: data.imageUrl,
        summary: data.summary

    });

   
    ctx.page.redirect('/details/' + gameId);
}