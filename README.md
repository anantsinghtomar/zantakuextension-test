# Zantaku JSON API Extension

This JSON extension defines structured endpoints for the [Consumet API](https://github.com/consumet/api.consumet.org), facilitating the integration of anime, movie, and TV data into your application.

## Structure

- `endpoints.json`: Contains supported services and their endpoint templates.
- `example-usage.js`: Demonstrates how to use this JSON to make API calls.

## Usage

Example in JavaScript:

```js
import endpoints from './endpoints.json';

const baseUrl = endpoints.base_url;
const animeSearch = endpoints.services.anime.animekai.search.replace('{query}', 'one piece');

fetch(`${baseUrl}${animeSearch}`)
  .then(res => res.json())
  .then(data => console.log(data));
```

## Notes

- Replace `{query}`, `{id}`, `{episodeId}` with actual ones.
- Add `?page=2` to paginate the output results.
