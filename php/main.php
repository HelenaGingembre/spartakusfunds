<?php

/* @var $this \yii\web\View */
/* @var $content string */

use app\assets\PublicAsset;
use app\widgets\Alert;
//use cinghie\cookieconsent\widgets\CookieWidget;
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use yii\widgets\Menu;
use yii\widgets\LinkPager;
use yii\helpers\Url;
//use cinghie\cookieconsent\assets\CookieAsset;
use bizley\cookiemonster\CookieMonster;
use lajax\languagepicker\widgets\LanguagePicker;
//use app\assets\AppAsset;

PublicAsset::register($this);
//CookieAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <?=Html::csrfMetaTags()?><!--защита сайта от ложных запросов -->
    <meta charset="<?= Yii::$app->charset ?>">

    <meta name="viewport" content="width=device-width, initial-scale=1,,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="HandheldFriendly" content="true">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>
<!--<div class="wrapper">-->
    <header class="main-head">

        <button onclick="topFunction()" id="myBtn" title="Go to top">To top</button>


           <?php NavBar::begin([
                    'brandLabel' =>Html::img('@web/uploads/icon/logo.jpg', ['alt'=>Yii::$app->name, 'class'=>"logo-img"]).'<div>Spartacus <span>Partners</span></div>',
                    'brandUrl' => Yii::$app->homeUrl,
                    'options'=>[
                        'class' => 'navbar-inverse navbar-fixed-top',
                        'id'=>'main-menu'
                    ],

                    'renderInnerContainer'=>true, //навигационная панель не содержит встроенного контейнера
               ]);?>

            <?php
            echo Nav::widget([
                'options' => ['class' => 'navbar-nav navbar-right'],

                'items' => [
                    ['label' => Yii::t('menu','Home'), 'url' => ['site/index']],
                    [
                        'label' => 'Investment Philosophy', 'url' => ['/category?id=2'],
                        'items' => [
                            ['label' => 'Investment Philosophy', 'url' => ['/category?id=2']],
                            //'<li class="divider"></li>',
                            ['label' => 'Equity', 'url' => ['/view?id=1']],
                            ['label' => 'Fixed Income', 'url' => ['/view?id=8']],
                            ['label' => 'Private Equity', 'url' => ['/view?id=9']],
                        ],
                    ],
                    ['label' => Yii::t('menu','Market'), 'url' => ['/site/market']],
                    ['label' => Yii::t('menu','About Us'), 'url' => ['/site/about']],
                    ['label' => Yii::t('menu','Contact'), 'url' => ['/site/contact']],
                   ['label' => Yii::t('menu','Admin'), 'url' => ['admin/default'],
                        'visible' => !Yii::$app->user->isGuest&&Yii::$app->user->identity->isAdmin=='1'],

                    /*['label' => Yii::t('menu','Register'), 'url' => ['/auth/signup'],'visible' => Yii::$app->user->isGuest],

                    Yii::$app->user->isGuest ? (
                    ['label' => Yii::t('menu','Login'), 'url' => ['/auth/login']]
                    ) : (
                        '<li>'
                        . Html::beginForm(['/auth/logout'], 'post')
                        . Html::submitButton(
                            Yii::t('menu','Logout(') .Yii::$app->user->identity->name. ')',
                            ['class' => 'btn-logout',
                                'data-method' => 'post']
                        )
                        . Html::endForm()
                        . '</li>'
                    ),*/

                ],

            ]);
            NavBar::end();
            ?>

       <!-- </nav>-->
        <?= Breadcrumbs::widget(['links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],]) ?>
        <?= Alert::widget() ?>


    </header>
   <!-- <main class="content">-->
        <?=$content?>
    <!--</main>-->
    <footer class="main-footer">
        <a href="<?=Yii::$app->homeUrl; ?>">

            <img class="img-footer" src="<?= Url::to('@web/uploads/icon/logo.jpg')?>" alt="Spartacus Partners">
        </a>
        <div class="footer-start">


            <nav class="footernav">
               <?php
                echo Nav::widget([

                    'items' => [
                        ['label' => Yii::t('menu','Home'), 'url' => ['site/index']],
                        ['label' => 'Investment Philosophy', 'url' => ['/category?id=2']],
                        ['label' => Yii::t('menu','About Us'), 'url' => ['/site/about', 'assigned' => 'not-done']],//элемент не активен not-done
                        ['label' => Yii::t('menu','Contact'), 'url' => ['/site/contact', 'assigned' => 'not-done']],
                       ],
                ]);
                ?>
            </nav>
        </div>
        <!--<div class="footergrid">
            <img src="uploads/logo.png" alt="Logo" >
        </div>-->
        <div class="footer-end">
            <div>
                <h6> &copy; 2015 - <?= date('Y') ?>
                    <a href="<?=Yii::$app->homeUrl; ?>">by Spartacus Partners</a>
                </h6>
            </div>
            <div>
                <h6><?= Yii::powered() ?> Built with <i class="fa fa-heart"></i>
                    <a href="//helenizotova.ru" target="_blank">H.I.G.</a>
                </h6>
            </div>
        </div>


    <?= CookieMonster::widget([
            'box'=>[
                'classInner'=>'dark-cookie',
                'classButton'=>'btn-cookie',
            ],
            'content' => [
                'buttonMessage' => Yii::t('menu','I understand'), // instead of default 'I understand'
                'language'=> 'en-US' ,
                'mainMessage'=>Yii::t('menu','We use cookies on our websites to help us offer you the best online experience. By continuing to use our website, you are agreeing to our use of cookies. Alternatively, you can manage them in your browser settings.'),
            ],
             'mode' => 'bottom'
    ]); ?>
</footer>
<?php $this->endBody() ?>
<!--</div>-->
<script>
    function myFunction() {
        var x = document.getElementById("w0");
        if (x.className === "nav") {
            x.className += " responsive";
        } else {
            x.className = "nav";
        }
    }
</script>
</body>
</html>
<?php $this->endPage() ?>
