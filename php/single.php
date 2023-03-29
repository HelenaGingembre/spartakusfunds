<?php

use yii\helpers\Url;
use yii\widgets\LinkPager;

?>
<div class="content post-single">
    <section  class="single ">

        <div class="single-img"  >

            <img src="<?= $article->getImage();?>" alt="">
            <div class="content-intro center">
                <?=$article->content_intro;?>

            </div>
        </div>
        <div class="single-content">
            <div  class="content-tab" >
               <!--  <h3><?/*=$article->title_block1;*/?></h3>-->
                 <h3><?=$article->title_block1_content1;?></h3>
                 <div class="justify"><?=$article->block1_content1;?></div>
                 <h3><?=$article->title_block1_content2;?></h3>
                 <div class="justify"><?=$article->block1_content2;?></div>
                 <h3><?=$article->title_block1_content3;?></h3>
                 <div class="justify"><?=$article->block1_content3;?></div>
                 <h3><?=$article->title_block1_content4;?></h3>
                 <div class="justify"><?=$article->block1_content4;?></div>
            </div>
        </div>
    </section>

    <section class="sidebar">
        <?= $this->render('/partials/sidebar',[
            'popular'=>$popular,
            'recent'=>$recent,
            'categories'=>$categories,

        ]);?>
    </section>
</div>



