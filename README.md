## What is it?

An example of using the Honeycomb SDK in an Ionic project.

Based on the [Ionic react starter](https://ionicframework.com/docs/react/your-first-app) and the [Honeycomb SDK docs](https://docs.honeycomb.io/send-data/javascript-browser/honeycomb-distribution/).

## Running It

`npm install` all the things. You'll need `ionic` too. See the Ionic docs :point_up: for that.

Get a Honeycomb ingest key and edit `main.tsx`:

```tsx
    apiKey: 'hcaik_01...', // Replace with your Honeycomb Ingest API Key.
```

Then, run `ionic serve`.
Reload the page a few times and you should see traces in Honeycomb.

