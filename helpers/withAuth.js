const withAuth = (req, res, next) => {
    // If the user isn't logged in, redirect them to the login route
    // This helper prevents a new user to make changes on the webpage, such as posting, updating or deleting content, the only way to make changes is when logged in.
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  