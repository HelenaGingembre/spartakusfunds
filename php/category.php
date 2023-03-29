<?php
use yii\helpers\Url;
use yii\widgets\LinkPager;

?>
<div class="content post-single">


    <section class="single">

        <div class="dws-wrapper">
            <?php foreach($articles as $article): ?>

               <div class="img-box-category">
                   <a href="<?=Url::toRoute(['site/view', 'id'=>$article->id]);?>">
                       <i class="fa fa-link" ></i>
                       <img src="<?= $article->getImage();?>" alt="">
                   </a>
                   <div class="text-box-category">
                       <h3> <?=$article->title;?> </h3>
                       <span><?=$article->category->title;?></span>
                       <p><?=$article->description;?></p>
                   </div>
               </div>
            <?php endforeach;?>
        </div>
    </section>


    <section class="sidebar">
        <?= $this->render('/partials/sidebar',[
            'popular'=>$popular,
            /*'recent'=>$recent,*/
            'categories'=>$categories,
        ]);?>
    </section>

</div>
<!-- end main content-->
<!--footer start-->