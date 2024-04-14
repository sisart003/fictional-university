<?php get_header(); ?>

<div class="page-banner">
      <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri('/images/ocean.jpg'); ?>)"></div>
      <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title">
            Past Events
        </h1>
        <div class="page-banner__intro">
          <p>Recap of our Past Events.</p>
        </div>
      </div>
    </div>

    <div class="container container--narrow page-section">
      <?php

            $today = date('Ymd');
            $pastEvents = new WP_Query(array(
                'paged' => get_query_var('paged', 1),
                'post_type' => 'event',
                'meta_key' => 'event_date',
                'order_by' => 'meta_value_num',
                'order' => 'asc',
                'meta_query' => array(
                    array(
                    'key' => 'event_date',
                    'compare' => '<',
                    'value' => $today,
                    'type' => 'numeric'
                    )
                )
            ));

        while($pastEvents->have_posts()){
            $pastEvents->the_post();
            get_template_part('template-parts/content-event');
          }
        echo paginate_links(
            array(
                'total' => $pastEvents->max_num_pages
            )
        );
      ?>
    </div>
<?php get_footer(); ?>