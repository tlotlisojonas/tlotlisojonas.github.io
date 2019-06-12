<?php


$OriginYear = 2018;
$CurYear = date('y');


function autoCopywrite($OriginYear, $CurYear){
    
    if ($OriginYear==date("Y")){
        $formatDisplay = date('Y'); 
    }else{
        $formatDisplay = "$OriginYear-$CurYear";
    }
    
    return "&copy; UCT Promaths $formatDisplay. All rights reserved.";
}
$copywrite = autoCopywrite($OriginYear, $CurYear);

echo "$copywrite";