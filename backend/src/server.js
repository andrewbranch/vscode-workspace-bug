import {} from "@shared/api/auth";

const server = () => {

}

server.auth = () => {
  const authId = getUserId();

  console.log('Auth ID', authId);
}

await server.auth()
