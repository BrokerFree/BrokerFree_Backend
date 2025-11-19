import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
  audience: "https://brokerfree-api",
  issuerBaseURL: "https://brokerfree.us.auth0.com",
  tokenSigningAlg: "RS256"
});


export default jwtCheck
