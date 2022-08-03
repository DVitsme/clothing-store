module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2b681f744e6b98996c00e175bb09e525'),
  },
});
