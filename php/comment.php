<?php
/**
 * Created by PhpStorm.
 * User: elena
 * Date: 28.08.18
 * Time: 16:49
 */

use yii\widgets\ActiveForm;


if(!empty($comments)): ?>

    <?php foreach ($comments as $comment):?>

        <div class="comment"><!--bottom comment-->
            <div class="comment-img">
                <img class="img-circle" src="<?=$comment->user->photo;?>" alt="Avatar">
            </div>

            <div class="comment-text">
                <a href="#" class=" pull-right"> Replay</a>
                <h5><?=$comment->user->name; ?></h5>

                <p class="comment-date"><?=$comment->getDate(); ?></p>


                <p><?= $comment->text;?></p>
            </div>
        </div>
        <!-- end bottom comment-->

    <?php endforeach;?>

<?php endif; ?>
<?php if(!Yii::$app->user->isGuest):?>
    <div class="leave-comment"><!--leave comment-->
        <h4><?= Yii::t('menu','Leave a reply')?></h4>
        <?php if(Yii::$app->session->getFlash('comment')): ?>
            <div class="alert alert-success" role="alert">
                <?= Yii::$app->session->getFlash('comment'); ?>
            </div>

        <?php endif; ?>
        <?php $form = ActiveForm::begin([
            'action'=>['site/comment','id'=>$article->id],
            'options'=>['class'=>'form-horizontal contact-form', 'role'=>'form']]) ?>

        <div class="form-group">
            <div class="col-md-12">
                <?=$form->field($commentForm, 'comment')->textarea([
                    'class'=>'form-control',
                    'placeholder'=>'Write Massage'])->label(false) ?>

            </div>
        </div>
        <button type="submit" class="btn send-btn"><?= Yii::t('menu','Post Comment')?></button>

        <?php ActiveForm::end(); ?>
    </div><!--end leave comment-->
<?php endif; ?>
