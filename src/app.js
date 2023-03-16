import page from '../node_modules/page/page.mjs';

import { addRender } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { homeView } from './views/home.js';
import { regiterView } from './views/register.js';
import { loginView } from './views/login.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { editView } from './views/edit.js';
import { detailsView } from './views/details.js';
import { onLogout } from '../src/util.js';

page(addSession);
page(addRender);

page('/', homeView);
page('/register', regiterView);
page('/login', loginView);
page('/catalog', catalogView);
page('/logout', onLogout); 
page('/create', createView);
page('/edit/:id', editView);
page('/details/:id', detailsView);
page('/logout', onLogout);


page.start();