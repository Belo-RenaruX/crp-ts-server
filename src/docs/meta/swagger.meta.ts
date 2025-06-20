export const swaggerMeta = {
  openapi: '3.0.3',
  info: {
    version: '0.7.9',
    title: 'CRP TypeScript Fastify Backend Server - OpenAPI Spec',
    description: `
      Fastify TypeScript server on a custom architecture based on VIPER, adapted for backend services: DICER

      This is the documentation for all the backend endpoints for CRP

      All services are protected via JWE and need a Bearer token to work, for this you need a valid patient created to access. 
    `,
  },
};
