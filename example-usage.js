import endpoints from './endpoints.json';

const searchAnime = async (query) => {
  const endpoint = endpoints.services.anime.gogoanime.search.replace('{query}', encodeURIComponent(query));
  const url = `${endpoints.base_url}${endpoint}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
};

searchAnime("overflow");
