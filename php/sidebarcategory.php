<?php
/**
 * Created by PhpStorm.
 * User: elena
 * Date: 29.08.18
 * Time: 17:49
 */
use yii\helpers\Url;

?>



<div class="widget ">
    <h3 class="widget-title"><?= Yii::t('menu','Categories')?></h3>
    <ul>
        <?php foreach ($categories as $category):?>
            <li>
                <a href="<?=Url::toRoute(['site/category', 'id'=>$category->id]);?>"><?= $category->title;?></a>
                <span class="post-count pull-right"> (<?= $category->getArticlesCount();?>)</span>
            </li>
        <?php endforeach; ?>
    </ul>
</div>
