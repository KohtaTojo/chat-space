$(document).on('turbolinks:load', function() {
  function buildHTML(message){
    var insertImage = '';
    if (message.image.url){
      insertImage = `<img class="bottom-content__image" src="${message.image.url}">`;
    }
    var html =
          `<div class="message" data-message-id="${message.id}">
            <div class="top-content">
              <div class="top-content__name">
                ${message.name}
              </div>
              <div class="top-content__date">
                ${message.date}
              </div>
            </div>
            <div class="bottom-content">
              <p class="bottom-content__text">${message.content}</p>
              ${insertImage}
            </div>
          </div>`;
          return html
  }
  var interval = setInterval(function(){
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      $.ajax({
        url: location.href.json,
        dataType: 'json'
      })
      .done(function(json){
        // group番号を取ってきている
        var group = $('.messages').data('group-id');
        var id = $('.message:last').data('message-id');
        // console.log/(group);
        var insertHTML = '';
        json.messages.forEach(function(message){
          console.log(id);
          if (message.id > id ){
            console.log(message.group_id);
            if (message.group_id == group ){
              insertHTML = buildHTML(message);
              $('.messages').append(insertHTML);
              $(".messages").scrollTop($(".messages")[0].scrollHeight);
            }
          }
        });
      })
      .fail(function(json){
        alert('自動更新に失敗しました');
      });
    }else {
      clearInterval(interval);
    }
  }, 5000 );
});
