<?php
/**
 * Created by PhpStorm.
 * User: elena
 * Date: 23.03.18
 * Time: 18:11
 */
/* @var $this yii\web\View */
use yii\helpers\Url;
use yii\helpers\Html;
use yii\widgets\LinkPager;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
?>


<!--main content start-->
<main class="content ">
    <section  id="single">

        <div class="single-img"  >
            <?=Html::img('@web/uploads/posts/market-view.jpg', ['alt'=>Yii::$app->name])?>

            <div class="content-intro center">
                <h1 class="top">Market Views</h1>
                <p>Our View on Current Markets</p>
            </div>
        </div>
        <div class="single-content ">
            <div class=" justify">
                On this page, we will share our main market views.<br>
                This page will be updated, as markets dictate.<br>
                Do not hesitate to get in touch to share with us your views/comments.
            </div>

                    <?php foreach($articles as $article): ?>
                        <div class="logo-market">
                            <?= Html::img('@web/uploads/icon/logo.jpg',
                                ['alt'=>Yii::$app->name,
                                    'class'=>"center-img",
                                    'style'=>"width:20%;"
                                ])?>
                        </div>
                        <div style="clear: both"></div>
            <div  class="content-tab" >

                                <h2> <?=$article->title;?> </h2>
                                <div class="date"><?=$article->getDate();?></div>
                                <p><?=$article->description;?></p>
                                <h3><?=$article->title_block1_content1;?></h3>
                                <div class="justify"><?=$article->block1_content1;?></div>
                                <h3><?=$article->title_block1_content2;?></h3>
                                <div class="justify"><?=$article->block1_content2;?></div>
                                <h3><?=$article->title_block1_content3;?></h3>
                                <div class="justify"><?=$article->block1_content3;?></div>
                                <h3><?=$article->title_block1_content4;?></h3>
                                <div class="justify"><?=$article->block1_content4;?></div>



            </div>
                    <?php endforeach;?>

        </div>
    </section>


</main>
