import fetch from 'node-fetch';

export const getStrapiURL = (path = '') => {
	return process.env.NEXT_PUBLIC_STRAPI_API_URL+path;
};
  
export const fetchAPI = async (path: string) => {
	const requestUrl = getStrapiURL(path);
	const response = await fetch(requestUrl);
	const data = await response.json();
	return data;
};

export const FetchAPI = {
	getStrapiURL,
	fetchAPI
};