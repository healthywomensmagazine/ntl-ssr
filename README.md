# ntl-ssr

Simple demo on using a Netlify serverless function to SSR everything.

## But seriously

I don't know why you would do this. It defeats the purpose of using Netlify. The idea is that your static site is pushed to a global CDN. Serverless functions (as stated under the [Default deployment options](https://docs.netlify.com/functions/overview/#default-deployment-options)) only run from a single location.
