<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model app\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use  yii\captcha\CaptchaValidator;

?>


<!--Start main-->
<!--<main class="content">-->
    <section id="contact" class="content">
    <h2 class="center topic">Contact</h2>
        <div class="justify" style="padding: 1% 2.5%;">
            If you are a like-minded family office or investor,
            an enterpreneur looking for funds, or if you are interested in our training sessions,
            please use the form below to contact us. We will be happy to hear from you and will get back to you shortly.
        </div>
    <div class="contact-form">
        <!--<div class="row">-->
        <div class="column">
            <div id="map" >
                <iframe style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785277.9861272653!2d174.1807797935084!3d-38.03410393427533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d1e2fa1401571%3A0x7f774dc8f8937842!2zMzY4MCBPaGF1cG8gUmQsIEdsZW52aWV3LCBSdWt1aGlhIDMyODIsINCd0L7QstCw0Y8g0JfQtdC70LDQvdC00LjRjw!5e0!3m2!1sru!2sua!4v1503174868792"  frameborder="0" allowfullscreen="allowfullscreen"></iframe>
            </div>
        </div>
        <div class="column">
            <?php if (Yii::$app->session->hasFlash('contactFormSubmitted')): ?>
                    <div class="alert alert-success">
                       <?= Yii::t('menu','Thank you for contacting us. We will reply to you as soon as possible.')?>
                    </div>
            <?php else: ?>

                    <!--<div class="center">
                        <?/*= Yii::t('menu','Please fill out the following form to contact us. Thank you.')*/?>
                    </div>-->
                 <?php $form = ActiveForm::begin(['id' => 'contact-form']); ?>
                    <div class="row">
                        <div class="col-sm-6">
                            <?= $form->field($model_contact, 'name')->textInput(['autofocus' => true])->input('name'); ?>
                        </div>
                        <div class="col-sm-6">
                            <?= $form->field($model_contact, 'email')->input('email'); ?>
                        </div>
                    </div>
                    <?= $form->field($model_contact, 'subject') ?>

                    <?= $form->field($model_contact, 'body')->textarea(['rows' => 6]) ?>

             <!-- <div class="g-recaptcha" data-sitekey="6Lcq_mkUAAAAAGTea1O61nRenveZ18Q0TqM1V0Bu"></div>-->
                    <?= $form->field($model_contact, 'verifyCode')->widget(Captcha::class, [
                    // configure additional widget properties here
                   'captchaAction' => 'site/captcha',
                    'template' => '<div class="row"><div class="col-lg-3">{image}</div><div class="col-lg-4">{input}</div></div>',
                ]) ?>
             

                    <div class="form-group">
                        <?= Html::submitButton('Submit', ['class' => 'send', 'name' => 'contact-button']) ?>
                    </div>
                <?php ActiveForm::end(); ?>
            <?php endif; ?>
        </div>

    </div>
    </section>
<!--</main>-->
<!--End main-->
   