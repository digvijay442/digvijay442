export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/404_Yey3rfMT.mjs').then(n => n._);

export { page };
