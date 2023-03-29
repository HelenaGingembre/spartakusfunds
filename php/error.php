<?php

/* @var $this yii\web\View */
/* @var $name string */
/* @var $message string */
/* @var $exception Exception */

use yii\helpers\Html;

$this->title = $name;
?>
<main id="wrapper">
<section class="site-error">

    <h1><?= Html::encode($this->title) ?></h1>

    <div class="alert alert-danger">
        <?= nl2br(Html::encode($message)) ?>
    </div>

    <h4>
    <?=Yii::t('menu', 'The above error occurred while the Web server was processing your request.') ?>
    </h4>
    <h4>
        <?=Yii::t('menu', 'Please contact us if you think this is a server error. Thank you.') ?>
    </h4>

</section>
</main>