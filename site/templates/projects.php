<?php snippet('header-brand') ?>

<style>
.bottomed {
  flex-flow: row wrap !important;
  align-items: flex-end;
}
</style>

<section class="row bottomed">
  <?php snippet('showcase', ['limit' => 12]) ?>
</section>

<?php snippet('footer') ?>
