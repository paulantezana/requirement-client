import product from './product';
import provider from './provider';
import user from './user';
import global from './global';
import requirement from './requirement';
import quotation from './quotation';
import require from './require';
import dowloand from './dowloand';
import print from './print';

const models = app => {
    app.model(global);
    app.model(requirement);
    app.model(product);
    app.model(provider);
    app.model(user);
    app.model(quotation);
    app.model(require);
    app.model(dowloand);
    app.model(print);
}

export default models;