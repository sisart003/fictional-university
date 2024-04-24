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

function createLike($data){
    sanitize_text_field($data['professorId']);
    wp_insert_post(array(
        'post_type' => 'like',
        'post_status' => 'publish',
        'post_title' => 'Our PHP Create Post Test',
        'meta_input' => array(
            'liked_professor_id' => 12345
        )
    ));
}

function deleteLike(){
    return 'Thanks for trying to delete a like.';
}

add_action('rest_api_init');