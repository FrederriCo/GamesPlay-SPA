import page from '../node_modules/page/page.mjs';

import { addRender } from './middlewares/render.js';
import { homeView } from './views/home.js';
import { regiterView } from './views/register.js';
import { loginView } from './views/login.js';
import { catalogView } from './views/catalog.js';

page(addRender);

page('/', homeView);
page('/register', regiterView);
page('/login', loginView);
page('/catalog', catalogView);
page('/create', () => console.log('create'));
page('/details/:id', () => console.log('details'));
page('/edit/:id', () => console.log(logout'));

page.start();