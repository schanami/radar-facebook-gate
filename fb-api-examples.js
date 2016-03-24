FB.api({
    method:     "pages.isFan",
    page_id:        376279216711,
},  function(response) {
        console.log(response);
        if(response){
            alert('You Likey');
        } else {
            alert('You not Likey :(');
        }
    }
);

Does someone like a Facebook Page?

Although you can't get a list of all the fans of a Facebook Page, you can find out whether a specific person has liked a Page.

Use These APIs

/{user-id}/likes/{page-id} - this API Read modifier will let you check via API.


FB.api({
    method:     "/{page-id}",
},  function(response) {
        console.log(response);
        if(response){
            alert('You Likey');
        } else {
            alert('You not Likey :(');
        }
    }
);