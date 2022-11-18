// This is the backend server

export default defineEventHandler(async (event) => {
  // handle query params
  //   const { name } = useQuery(event);

  // handle post data
  //   const { age } = await useBody(event);

  // api call with a private key (notice we use $fetch for server routes)
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=eJdPhICJUDBt6B4e4IX6DZ4A9Xos4Z2JRZ8xh2v2"
  );

  return data;
});
