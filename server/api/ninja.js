// This is the backend server

export default defineEventHandler((event) => {
  // handle query params
  const { name } = useQuery(event);

  return {
    message: `Hello ${name} I am from the server!`,
  };
});
