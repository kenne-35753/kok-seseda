<html>
<head>
    <link rel="stylesheet" href="/css/video-js.css">
    <script src="/js/video.js"></script>
    <script src="/js/videojs-contrib-hls.js"></script>
</head>
<body>
<video id="myVideo" class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" style="width:100%;height:100%;">
    <source id="source" src="{{$url}}" type="application/x-mpegURL">
</video>

<script>
    videojs("myVideo", {}, function () {
    });
</script>
</body>
</html>