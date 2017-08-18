<?php snippet('header-project') ?>

<style>
  main {
    background-color: <?= $page->color() ?>;
  }
  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-thumb {
    background-color: <?= $page->color() ?>;
  }
  .cover::after {
    background-image: linear-gradient(rgba(0, 0, 0, 0), <?= $page->color() ?>) !important;
  }
</style>

<div class="cover parallax lazy"

<?php if($image = $page->image('header.jpg')): ?>
data-src="<?= $image->url() ?>"
<?php endif ?>

></div>


<section class="row">
  <?php foreach($page->files()->sortBy('sort', 'asc')->not('header.jpg', 'thumb.jpg') as $file): ?>
  <figure class="<?= $file->imageWidth() ?> <?= $file->imageOffset() ?> pinned"><img src="<?= $file->url() ?>" class="<?php if ($file->shadowed() == 'true') { echo "shadowed "; } else{ echo ""; } ?> b-lazy b-loaded" /></figure>
  <?php endforeach ?>
</section>

<?php snippet('footer') ?>
