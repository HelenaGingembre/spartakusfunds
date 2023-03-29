<?php
/**
 * Created by PhpStorm.
 * User: elena
 * Date: 28.08.18
 * Time: 16:51
 */
use yii\helpers\Url;

?>

<div class="widget ">
    <h3 class="widget-title center"><?= Yii::t('menu','Categories')?></h3>
    <ul>
        <?php foreach ($categories as $category):?>
            <li>
                <a  href="<?=Url::toRoute(['site/category', 'id'=>$category->id]);?>"><?= $category->title;?></a>
                <span class="pull-right"> (<?= $category->getArticlesCount();?>)</span>
            </li>
        <?php endforeach; ?>
    </ul>
</div>

<div class="widget">
    <h3 class="widget-title center"><?= Yii::t('menu','Popular Posts')?></h3>
    <?php foreach ($popular as $article):?>
        <div class="popular-post">
                <a  href="<?=Url::toRoute(['site/view', 'id'=>$article->id]);?>">
                    <img src="<?= $article->getImage();?>" alt="">
                    <h4 class="center"> <?= $article->title;?></h4>
                   <!-- <p class="center"><?/*= $article->getDate();*/?></p>-->
                    <p class="justify"> <?= $article->description;?></p>
                </a>
        </div>
    <?php endforeach; ?>
</div>
<!--<div class="widget">
    <h3 class="widget-title"><?/*= Yii::t('menu','Recent Posts')*/?></h3>
    <?php /*foreach ($recent as $article):*/?>
        <div class="latest-posts">
            <a  href="<?/*=Url::toRoute(['site/view', 'id'=>$article->id]);*/?>">
                <h4> <?/*= $article->title;*/?></h4>
                <p class="center"><?/*= $article->getDate();*/?></p>
                <p class="justify"> <?/*= $article->description;*/?></p>
            </a>
        </div>
    <?php /*endforeach; */?>
</div>-->
