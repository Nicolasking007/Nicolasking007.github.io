<?php



$img_array = glob('se/*.{gif,jpg,png,jpeg,webp,bmp}', GLOB_BRACE);
foreach ($img_array as $v){
    echo "https://img.oioweb.cn/".$v."<br>";
}