import page from '../node_modules/page/page.mjs';

import { addRender } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { homeView } from './views/home.js';
import { regiterView } from './views/register.js';
import { loginView } from './views/login.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';

page(addSession);
page(addRender);

page('/', homeView);
page('/register', regiterView);
page('/login', loginView);
page('/catalog', catalogView);
page('/logout', onLogout); 
page('/create', createView);
page('/details/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));


page.start();