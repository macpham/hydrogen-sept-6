import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: Oxygen.env.SHOPIFY_STORE_DOMAIN,
    storefrontToken: Oxygen.env.SHOPIFY_STOREFRONT_API_PUBLIC_TOKEN,
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
