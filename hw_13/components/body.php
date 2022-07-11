<nav id="navigation">
    <!-- container -->
    <div class="container">
        <!-- responsive-nav -->
        <div id="responsive-nav">
            <!-- NAV -->
            <ul class="main-nav nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">Hot Deals</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Laptops</a></li>
                <li><a href="#">Smartphones</a></li>
                <li><a href="#">Cameras</a></li>
                <li><a href="#">Accessories</a></li>
            </ul>
            <!-- /NAV -->
        </div>
        <!-- /responsive-nav -->
    </div>
    <!-- /container -->
</nav>

<?php
require __DIR__ . '/blocks/device_collections.php' ?>

<?php
require __DIR__ . '/blocks/products_list.php' ?>

<?php
require __DIR__ . '/blocks/hot_deal_section.php' ?>

<?php
require __DIR__ . '/blocks/big_top_selling_section.php' ?>

<div class="section">
    <!-- container -->
    <div class="container">
        <!-- row -->
        <div class="row">

            <?php
            require __DIR__ . '/blocks/top_selling_collumn_left.php' ?>
            <?php
            require __DIR__ . '/blocks/top_selling_collumn_center.php' ?>
            <?php
            require __DIR__ . '/blocks/top_selling_collumn_right.php' ?>

        </div>
        <!-- /row -->
    </div>
    <!-- /container -->
</div>
<!-- /SECTION -->

<?php
require __DIR__ . '/blocks/newsletter.php' ?>

