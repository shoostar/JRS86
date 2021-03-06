<!-- <?= $site->copyright()->kirbytext() ?> -->
  <footer class="row">
    <div class="w--1of1">
      <p><small class="lightenup">Copyright (forever), <strong>JRS<sup>86</sup></strong>. Be inspired, be enlightened; don't steal.</small></p>
    </div>
  </footer>
</main>

<script src="//code.jquery.com/jquery-3.2.1.min.js" defer></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js" defer></script>
<script src="<?= url() ?>/assets/js/blazy.min.js"></script>
<script>
  ;(function() {
    // Initialize
    var bLazy = new Blazy({
        selector: 'img'
      , offset: -100
    });
  })();
</script>
<script>
function downloadJSAtOnload() {
  var element = document.createElement("script");
  element.src = "<?= url() ?>/assets/js/index.min.js";
  document.body.appendChild(element);
}
if (window.addEventListener)
  window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
  window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;
</script>
<script>
(function(d) {
  var config = {
    kitId: 'huh6mpu',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);
</script>

</body>
</html>
