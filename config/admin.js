module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7bde42e1dc6ccfcafff14a7949cf4550'),
  },
});
