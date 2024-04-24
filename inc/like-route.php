<?php

function universityLikeRoutes(){
    register_rest_route('university/v1', 'manageLike', array(
        'methods' => 'POST',
        'callback' => 'createLike'
    ));

    register_rest_route('university/v1', 'manageLike', array(
        'methods' => 'DELETE',
        'callback' => 'deleteLike'
    ));
}

function createLike(){
    return 'Thanks for trying to create a like.';
}

function deleteLike(){
    return 'Thanks for trying to delete a like.';
}

add_action('rest_api_init');