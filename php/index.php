<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */

use yii\data\Pagination;
use yii\helpers\Url;
use yii\helpers\Html;
use yii\helpers\HtmlPurifier;
use yii\widgets\LinkPager;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;

$this->title = 'Spartacus Partners';
?>
<!-- header переносим в файл main.php -->

<main class="content">
    <section class="slider">

        <div class="load"></div>
        <div class="center">
             <h2 class="top">Wealth Creation</h2>
            <p>Ethical Value Investing for Long Term Capital Appreciation in Up and Down Markets</p>
           <!-- <img src="uploads/icon/logo.jpg" alt="Spartacus Partners" class="logo">-->

            <a href="#news"> <button class="btn">Learn more</button></a>
        </div>
    </section>

    <section class="news" id="news">
        <!--<h2 class="center">News</h2>-->
        <div class="posts">
            <?php foreach ($articles as $article): // отображаем здесь $model ?>
                <?php if (($article->category_id)=='2')://вывод статей категории 2?>
                <article id="post<?=$article->id;?>" class="post">
                    <a href="<?=Url::toRoute(['site/view', 'id'=>$article->id]);?>">
                        <div class="center">
                            <h3>
                                <?=$article->title;?>
                            </h3>
                        </div>

                        <div class="post-content justify">
                            <?=$article->description;?>
                        </div>
                    </a>
                </article>
                <?php endif; ?>
            <?php endforeach; ?>

        </div>
        <?php
        // отображаем ссылки на страницы
       /* echo LinkPager::widget([
            'pagination' => $pagination,
        ]);*/

        ?>
    </section>
</main>
    <aside class="side">
        <div class="side-img">
            <img src="../web/uploads/posts/building.jpg" alt="">
        </div>
        <div class="side-text justify">
            We manage the assets of a small family office based in France.
            Our mission is to deliver long term outstanding absolute returns while investing in sustainable, ethical companies.
           </br>
            <a href="<?=Url::toRoute(['site/category?id=2']);?>"><button class="btn">Learn more</button></a>
        </div>
    </aside>
    <div class="advertise">
        <h2>OUR PHILOSOPHY</h2>
        <p>A quote that summarizes it all...</p>
        <div class="blue">
            "The stock market is a highly efficient mechanism for the transfer of wealth from the impatient to the patient."
        </div>
        <div class="d4"></div>
        <p>Warren Buffet</p>
    </div>

