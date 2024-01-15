import axios from "axios";

const instanceAuth = axios.create({
  baseURL: "https://unsplash.com",
});

// urn:ietf:wg:oauth:2.0:oob
// https://raycast.com/redirect
//http://localhost:3000/callback
export const photoAuthApis = {
  photoAuth: () =>
    instanceAuth.get(
      `/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}&redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=code&scope=public`
    ),
};
// destination: "https://unsplash.com/:path*",
//    permanent: false,
