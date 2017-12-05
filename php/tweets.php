<?php
require_once 'lib/twitteroauth.php';

define('CONSUMER_KEY', '0X2q6YoNz8Abmd7hqfeND8JoV'); 
define('CONSUMER_SECRET', 'G8tulVWUkHybAaW31xYmsZWQDn2SxDDMbrb7cCXoIa8lApweNn'); 
define('ACCESS_TOKEN', '768709586-Du4An6dVnHVqrDQtp4oc5YDktsDaOy7RDlrTqXGj'); 
define('ACCESS_TOKEN_SECRET', 'b6K7rCKxO8sRKM8FI4j2e9fjdHObozgKBAi25PrmZGV4I'); 

$toa = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET); 

$query = array(
		"q" => "#TakeAKnee"
	); 

$results = $toa->get('search/tweets', $query); 

foreach ($results->statuses as $result) {
	echo $result->user->screen_name . ": " . $result->text . "\n"; 
}
// ini_set('display_errors', 1);
// require_once('TwitterAPIExchange.php');

// /** Set access tokens here - see: https://dev.twitter.com/apps/ **/
// $settings = array(
//     'oauth_access_token' => "768709586-Du4An6dVnHVqrDQtp4oc5YDktsDaOy7RDlrTqXGj",
//     'oauth_access_token_secret' => "b6K7rCKxO8sRKM8FI4j2e9fjdHObozgKBAi25PrmZGV4I",
//     'consumer_key' => "0X2q6YoNz8Abmd7hqfeND8JoV",
//     'consumer_secret' => "G8tulVWUkHybAaW31xYmsZWQDn2SxDDMbrb7cCXoIa8lApweNn"
// );

// /** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
// $url = 'https://api.twitter.com/1.1/blocks/create.json';
// $requestMethod = 'GET';

// /** POST fields required by the URL above. See relevant docs as above **/
// $postfields = array(
//     'screen_name' => 'usernameToBlock', 
//     'skip_status' => '1'
// );

// // /** Perform a POST request and echo the response **/
// // $twitter = new TwitterAPIExchange($settings);
// // echo $twitter->buildOauth($url, $requestMethod)
// //              ->setPostfields($postfields)
// //              ->performRequest();

// /** Perform a GET request and echo the response **/
// /** Note: Set the GET field BEFORE calling buildOauth(); **/
// $url = 'https://api.twitter.com/1.1/followers/ids.json';
// $getfield = '?screen_name=connjie';
// $requestMethod = 'GET';
// $twitter = new TwitterAPIExchange($settings);
// echo $twitter->setGetfield($getfield)
//              ->buildOauth($url, $requestMethod)
//              ->performRequest();
