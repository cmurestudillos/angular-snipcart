import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-snipcart",
  outDir: './dist/static',
  routes: {
    '/products/:productId': {
        type: 'json',
        productId: {
            url: 'https://scully-snipcart-api.netlify.com/products.json',
            property: 'id'
        }
    }
  }
};