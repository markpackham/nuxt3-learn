// This is the backend server

export default defineEventHandler(async (event) => {
  // handle query params
  //   const { name } = useQuery(event);

  // handle post data
  //   const { age } = await useBody(event);

  // api call with a private key (notice we use $fetch for server routes)
  const { currencyKey } = useRuntimeConfig();

  const { data } = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`
  );

  return data;
});
