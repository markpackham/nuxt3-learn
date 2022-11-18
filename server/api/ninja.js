// This is the backend server

export default defineEventHandler(async (event) => {
  // handle query params
  const { name } = useQuery(event);

  // handle post data
  const { age } = await useBody(event);

  return {
    message: `Hello ${name} I am from the server! You are ${age} years old`,
  };
});
