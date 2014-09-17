<html>
    <head>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
        <script src="audiojs/audiojs/audio.min.js"></script>
        <script src="../FitText.js/jquery.fittext.js"></script>
        <link rel="stylesheet" type="text/css" href="../stylesheets/style.css">
        <title>Eoghan</title>
        <script>
            audiojs.events.ready(function() {
                var as = audiojs.createAll();
            });
        </script>
    </head>
    <body>
        <section class="links">
            <ul>
                <li><a href="..">home</a></li>
                <li>-</li>
                <li>-</li>
                <li>-</li>
                <li>-</li>
                <li>music</li>
            </ul>
        </section>
        <section class="wrapper">
            <header>
                <h1>MUSIC.</h1>
            </header> 
            <div class="tracks">
                <p>i also write music, in a band and solo.</p>
                <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/6907937&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                <p>here is a collection of some ideas, in-progress, abandoned and joke tracks.</p> 
                <p>for some of my relatively more polished music you can check out the soundcloud embed above.</p>
                <p><sub>currently experiencing some problems with playback, if so you can just append the filename to the page url and listen to the track directly.</sub></p>
                <?php

                    ini_set('display_errors', '1');
                    $path = "tracks/"; 

                    $latest_ctime = 0;
                    $latest_filename = '';    

                    $d = dir($path);
                    $trackcount = 0;
                    while (false !== ($entry = $d->read())) {
                      $filepath = "{$path}/{$entry}";
                      // could do also other checks than just checking whether the entry is a file
                      $info = new SplFileInfo($filepath);
                      ob_start();
                      var_dump($info->getExtension());
                      $info = ob_get_clean();
                      if (is_file($filepath) && (strpos($info, "wav") || strpos($info, "mp3"))) {
                          $trackcount++;
                      }
                    } 

                    $tracklist = array();
                    $i=0;
                    foreach (glob("tracks/*.mp3") as $filename) {
                        $realName = explode( '/', $filename) ;
                        $tracklist[filemtime($filename) ] = "<p class='music'>$realName[1]<span><em>  ".date ("F d Y",filemtime($filename))."</em></span><br><audio src='$filename' preload='none' /></p>";
                        $i++;
                   } 
                   foreach (glob("tracks/*.wav") as $filename) {
                        $realName = explode( '/', $filename) ;
                        $tracklist[filemtime($filename) ] = "<p class='music'>$realName[1]<span><em>  ".date ("F d Y",filemtime($filename))."</em></span><br><audio src='$filename' preload='none' /></p>";
                        $i++;
                   } 
                   krsort($tracklist);
                   foreach ($tracklist as $track){
                       echo $track;
                   }
                ?>
            </div>
        </section>
        <script>
            $("h1").fitText(0.32);
        </script> 
    </body>
</html>
