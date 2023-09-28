function getTweetsAndPost() {
  getAllTweets(function(tweets){
    document.getElementByClassName("feed").innerText = '';
    tweets.forEach(function(index){
if(tweets[index]['username'] === currentUser) {
        let html = '<div class="tweet col-xs-12"> \
          <a class="tweet-username" href="#">'+tweets[index]['username']+'</a> \
          <a class="tweet-screenName" href="#">@'+tweets[index]['username']+'</a> \
          <a class="delete-tweet" id="'+tweets[index]['id']+'" href="#">Delete</a>'

        if (tweets[index]['image'] !== undefined) {
          html += '<img src="' + tweets[index]['image'] + '" class="img img-responsive">'
        }

        html += '<p>'+tweets[index]['message']+'</p> \
          </div>'
        document.getElementByClassName("feed").prepend(html);
      } else {
        let html = '<div class="tweet col-xs-12"> \
          <a class="tweet-username" href="#">'+tweets[index]['username']+'</a> \
          <a class="tweet-screenName" href="#">@'+tweets[index]['username']+'</a>'

        if (tweets[index]['image'] !== undefined) {
          html += '<img src="' + tweets[index]['image'] + '" class="img img-responsive">'
        }

        html += '<p>'+tweets[index]['message']+'</p> \
          </div>'
        document.getElementByClassName("feed").prepend(html);
      }
});
  });
}

document.on('click', '.navbar-brand', function() {
  getTweetsAndPost();
  profileCardChanger(currentUser);
});

document.on('click', '.delete-tweet', function() {
  deleteOneTweet(this.attr('id'), function(){
    getTweetsAndPost();
  });
});


function getUserTweetsAndPost(username) {
  getUserTweets(username, function(response) {
    document.getElementByClassName("feed").innerText = '';
    console.log(response);
    response.forEach(function(index){
if(response[index]['username'] === currentUser) {
        document.getElementByClassName("feed").prepend(
          '<div class="tweet col-xs-12"> \
          <a class="tweet-username" href="#">'+response[index]['username']+'</a> \
          <a class="tweet-screenName" href="#">@'+response[index]['username']+'</a> \
          <p>'+response[index]['message']+'</p> \
          <a class="delete-tweet" id="'+response[index]['id']+'" href="#">Delete</a> \
          </div>'
        );
      } else {
        document.getElementByClassName("feed").prepend(
          '<div class="tweet col-xs-12"> \
          <a class="tweet-username" href="#">'+response[index]['username']+'</a> \
          <a class="tweet-screenName" href="#">@'+response[index]['username']+'</a> \
          <p>'+response[index]['message']+'</p> \
          </div>'
        );
      }
});
  });
}

document.on('click', '.tweet-username', function() {
  getUserTweetsAndPost(this.innerText);
  profileCardChanger(this.innerText);
});

document.on('click', '.username', function() {
  getUserTweetsAndPost(this.innerText);
  profileCardChanger(this.innerText);
});

function searchTweetsAndPost(keyword) {
  searchTweets(keyword, function(tweets){
    console.log(tweets.length);
    if(tweets.length > 0) {
      document.getElementByClassName("feed").innerText = '';
      tweets.forEach(function(index){
if(tweets[index]['username'] === currentUser) {
          document.getElementByClassName("feed").prepend(
            '<div class="tweet col-xs-12"> \
            <a class="tweet-username" href="#">'+tweets[index]['username']+'</a> \
            <a class="tweet-screenName" href="#">@'+tweets[index]['username']+'</a> \
            <p>'+tweets[index]['message']+'</p> \
            <a class="delete-tweet" id="'+tweets[index]['id']+'" href="#">Delete</a> \
            </div>'
          );
        } else {
          document.getElementByClassName("feed").prepend(
            '<div class="tweet col-xs-12"> \
            <a class="tweet-username" href="#">'+tweets[index]['username']+'</a> \
            <a class="tweet-screenName" href="#">@'+tweets[index]['username']+'</a> \
            <p>'+tweets[index]['message']+'</p> \
            </div>'
          );
        }
});
    }
  });
};

document.on('click', '.search-btn', function(){
  searchTweetsAndPost(document.getElementByClassName("search-input").value);
});

getTweetsAndPost();

