const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const fbStrategy = require('passport-facebook');
const googleStrategy = require('passport-google-oauth');

const withAuth = (req, res, next) => {
	// If the user isn't logged in, redirect them to the login route
	if (!req.session.logged_in) {
		res.redirect('/login');
	} else {
		next();
	}
};

/* Configure password authentication strategy.
 *
 * The `LocalStrategy` authenticates users by verifying a username and password.
 * The strategy parses the username and password from the request and calls the
 * `verify` function.
 *
 * The `verify` function queries the database for the user record and verifies
 * the password by hashing the password supplied by the user and comparing it to
 * the hashed password stored in the database.  If the comparison succeeds, the
 * user is authenticated; otherwise, not.
 */

// passport.use(
// 	new LocalStrategy(function verify(username, password, done) {
// 		User.findOne({ username: username }, function (err, user) {
// 			if (err) {
// 				return done(err);
// 			}
// 			if (!user) {
// 				return done(null, false);
// 			}
// 			if (!user.verifyPassword(password)) {
// 				return done(null, false);
// 			}
// 			return done(null, user);
// 		});
// 	})
// );

/* Configure session management.
 *
 * When a login session is established, information about the user will be
 * stored in the session.  This information is supplied by the `serializeUser`
 * function, which is yielding the user ID and username.
 *
 * As the user interacts with the app, subsequent requests will be authenticated
 * by verifying the session.  The same user information that was serialized at
 * session establishment will be restored when the session is authenticated by
 * the `deserializeUser` function.
 *
 * Since every request to the app needs the user ID and username, in order to
 * fetch todo records and render the user element in the navigation bar, that
 * information is stored in the session.
 */

// passport.serializeUser(function (user, done) {
// 	process.nextTick(function () {
// 		done(null, { id: user.id, username: user.username });
// 	});
// });

// passport.deserializeUser(function (user, done) {
// 	process.nextTick(function () {
// 		return done(null, user);
// 	});
// });

module.exports = withAuth;
