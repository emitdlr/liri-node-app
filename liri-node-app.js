function twitterThis() {

   var tw = require('twitter');

   var client = new tw({
       consumer_key: keys.twitter.consumer_key,
       consumer_secret: keys.twitter.consumer_secret,
       access_token_key: keys.twitter.access_token_key,
       access_token_secret: keys.twitter.access_token_secret
   });

   var params = {
       name: 'NineInchPencils',
       screen_name: 'NineInchPencils',
       exclude_replies: false,
       trim_user: true,
       count: 20
   };
   client.get('statuses/user_timeline', params, function (error, tweets, response) {
       if (!error) {
           for (var i = 0; i < tweets.length; i++) {
               var n = i+1;
               console.log(n+'---------------------------------------------');
               console.log('created:  ' + tweets[i].created_at);
               console.log('text   :  ' + tweets[i].text);
               console.log('-----------------------------------------------');
           }

       }
   });

} 
