import RenderAuthorized from '../components/Authorized';
// import { getAuthority } from './authority';

let Authorized = RenderAuthorized('user'); // eslint-disable-line

// Reload the rights component
const reloadAuthorized = () => {
    Authorized = RenderAuthorized('user');
};

export { reloadAuthorized };
export default Authorized;