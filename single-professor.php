<?php
  
  get_header();

  while(have_posts()) {
    the_post(); ?>
    <div class="page-banner">
      <div class="page-banner__bg-image" style="background-image: url(<?php $pageBannerImage = get_field('page_banner_background_image'); echo $pageBannerImage['url']; ?>)"></div>
      <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title"><?php the_title(); ?></h1>
        <div class="page-banner__intro">
          <p><?php the_field('page_banner_subtitle'); ?></p>
        </div>
      </div>
    </div>
    
    <div class="container container--narrow page-section">
      <div class="generic-content">
        <div class="row group">
          <div class="one-third">
            <?php the_post_thumbnail('professorPortrait'); ?>
          </div>
          <div class="two-thirds">
            <?php
              $likeCount = new WP_Query(array(
                'post_type' => 'like',
                'meta_query' => array(
                  array(
                    'key' => 'liked_professor_id',
                    'compare' => '=',
                    'value' => get_the_ID()
                  )
                )
              ));

              $existStatus = 'no';
              
              $existQuery = new WP_Query(array(
                'author' => get_current_user_id(),
                'post_type' => 'like',
                'meta_query' => array(
                  array(
                    'key' => 'liked_professor_id',
                    'compare' => '=',
                    'value' => get_the_ID()
                  )
                )
              ));

              if($existQuery->found_posts){
                $existStatus = 'yes';
              }
            ?>
            <span class="like-box" data-exists="<?php echo $existStatus; ?>">
              <i class="fa-regular fa-heart" aria-hidden="true"></i>
              <i class="fa-solid fa-heart" aria-hidden="true"></i>
              <span class="like-count"><?php echo $likeCount->found_posts; ?></span>
            </span>
            <?php the_content(); ?>
          </div>
        </div>
      </div>

      <?php
        $relatedPrograms = get_field('related_programs');

        if($relatedPrograms){
          echo '<hr class="section-break">';
          echo '<h2 class="headline headline--medium">Related Subjects(s)</h2>';
          echo '<ul class="link-list min-list">';
          foreach($relatedPrograms as $program){?>
            <li><a href="<?php echo get_the_permalink($program); ?>"><?php echo get_the_title($program); ?></a></li>
          <?php
          }
          echo '</ul>';
        }

      ?>
      
    </div>
    
  <?php }

  get_footer();

?>