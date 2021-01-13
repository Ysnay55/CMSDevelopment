<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'aqGu1m1yHw+QTcGOHvQeTgqpHoyacJPuhoG7KaHxvQOTVR/3xWGe1pNug0HmB7Hi7WAOjxw+GEvZwGiaOJTGHQ==');
define('SECURE_AUTH_KEY',  '+LiSq6rmbP5b9N9wvISnLjlhEDPWLdleWcwRGkPfIIncnE1eiw6pJ4A3Na0mC+2TYJQmWwbnaKXtm/NYHA9D7A==');
define('LOGGED_IN_KEY',    'iJUsxbou7pU+dM92j4K61eO8fuqmWWenfeXpF+lk71v0SM0MbIiRHK1qnmqVuPteRh67cg3y//ge8CDpIbU8Kg==');
define('NONCE_KEY',        'wzlOhofjA/2UOV3AmfG53glO+nVl7KyO3QOL1wMa5vSZNU493lVWl4tKdCNeH8kve/OhxuRAGMfWK1K/lr/9EA==');
define('AUTH_SALT',        'Y3oFDDulq6gdMnSiq/Z6cA9R+OqqqeZnOfz+tCCbsyL+x53qcXrAqrZHhNlO/I6hHsBqDXkF0uzU000PmiBojw==');
define('SECURE_AUTH_SALT', 'Fcs4eovlMpfvykk2wMM1qt2aunpyLykIfPLD11Ep1b6Uql+x1HNcJa792Pr3Z5CUqXLiwEIbWgCMv1ibL78eig==');
define('LOGGED_IN_SALT',   'oGgWlO3xIsNv7RP3DYpjuoUnePwqI6Vorg36Yc++KjXPoK7kum9OjMtT8UexAkCDOgte2R9C10YDyxssezIw2w==');
define('NONCE_SALT',       'SPKsgUeSrTv+kdnU/3f8LDUQTIIj4xRxRGR2Gqhfzae42y/aRQBoHDuektP+5iYNH4xgO3qlfBJpkvqLol5eWg==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
