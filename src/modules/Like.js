import $ from 'jquery';

class Like{
    constructor(){
        this.events();
    }

    events(){
        $(".like-box").on("click", this.ourClickDispatcher.bind(this));
    }

    // methods
    ourClickDispatcher(){
        var currentLikeBox = $(e.target).closest(".like-box");

        if(currentLikeBox.data('exists') == 'yes'){
            this.deleteLike();
        }else{
            this.createLike();
        }
    }

    createLike(){
        alert('Like')
    }

    deleteLike(){
        alert('Not Like')
    }
}

export default Like;