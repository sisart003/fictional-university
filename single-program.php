<?php
  
  get_header();

  while(have_posts()) {
    the_post(); ?>
    <div class="page-banner">
      <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri('/images/ocean.jpg'); ?>)"></div>
      <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title"><?php the_title(); ?></h1>
        <div class="page-banner__intro">
          <p>DON'T FORGET TO REPLACE ME LATER</p>
        </div>
      </div>
    </div>
    
    <div class="container container--narrow page-section">
      <div class="metabox metabox--position-up metabox--with-home-link">
					<p>
					  <a class="metabox__blog-home-link" href="<?php echo get_post_type_archive_link('program'); ?>"><i class="fa fa-home" aria-hidden="true"></i> All Programs</a> <span class="metabox__main"><?php the_title(); ?></span>
					</p>
			</div>

      <div class="generic-content">
        <?php the_field('main_body_content'); ?>
      </div>
      <?php
          $relatedProfessors = new WP_Query(array(
            'posts_per_page' => -1,
            'post_type' => 'professor',
            'order_by' => 'title',
            'order' => 'asc',
            'meta_query' => array(
              array(
                'key' => 'related_programs',
                'compare' => 'LIKE',
                'value'=> '"' . get_the_ID() . '"'
              )
            )
          ));

          if ($relatedProfessors->have_posts()) {
            echo '<hr class="section-break">';
            echo '<h2 class="headline headline--medium">' . get_the_title() . ' Professors</h2>';
          
          echo '<ul class="professor-cards">';
          while($relatedProfessors->have_posts()) {
            $relatedProfessors->the_post(); ?>
            <li class="professor-card__list-item">
              <a class="professor-card" href="<?php the_permalink(); ?>">
                <img src="<?php the_post_thumbnail_url('professorLandscape'); ?>" class="professor-card__image" alt="">
                <span class="professor-card__name"><?php the_title(); ?></span>
              </a>
            </li>
          <?php }
          echo '</ul>';
          }

          wp_reset_postdata();

            $today = date('Ymd');
            $homepageEvents = new WP_Query(array(
              'posts_per_page' => 2,
              'post_type' => 'event',
              'meta_key' => 'event_date',
              'order_by' => 'meta_value_num',
              'order' => 'asc',
              'meta_query' => array(
                array(
                  'key' => 'event_date',
                  'compare' => '>=',
                  'value' => $today,
                  'type' => 'numeric'
                ),
                array(
                  'key' => 'related_programs',
                  'compare' => 'LIKE',
                  'value'=> '"' . get_the_ID() . '"'
                )
              )
            ));

            if ($homepageEvents->have_posts()) {
              echo '<hr class="section-break">';
              echo '<h2 class="headline headline--medium">Upcoming ' . get_the_title() . ' Events</h2>';
    
            while($homepageEvents->have_posts()) {
              $homepageEvents->the_post();
              get_template_part('template-parts/content-event');
              }
            }

            wp_reset_postdata();
            $relatedCampuses = get_field('related_campus');

            if($relatedCampuses){
              echo '<hr class="section-break">';
              echo '<h2>' . get_the_title() . ' is Available at These Campuses:</h2>';
              echo '<ul class="min-list link-list">';
              foreach($relatedCampuses as $campus){?>
                <li>
                  <a href="<?php echo get_the_permalink($campus); ?>">
                    <?php echo get_the_title($campus); ?>
                  </a>
              </li>
              <?php
              }
              echo '</ul>';
            }
          ?>
    </div>
    
  <?php }

  get_footer();

?>