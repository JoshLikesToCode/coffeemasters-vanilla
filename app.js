import Store from './services/Store.js';
import API from './services/API.js'
import Router from '/services/Router.js'
import { loadData } from './services/Menu.js';

// Link Web Components
import { MenuPage } from './components/MenuPage.js'
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';

window.app = {}
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
    loadData();
    app.router.init();
}); 