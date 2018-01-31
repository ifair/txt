<a href="a.html" class="api">a.html</a>
<a href="b.html" class="api">b.html</a>
<a href="c.html" class="api">c.html</a>

<script type="text/javascript">
document.querySelectorAll('.api').forEach(item=>{
  item.addEventListener('click',(e)=>{
      e.preventDefault();
      let link = item.href;
      history.pushState(link,null,link);
  },false);
});

window.addEventListener('popState',(e)=>{
     console.log({
       location:location.href,
      state:e.state
     });
},false)
<h4>hash</h4>
</script>

<a class="qapi">d.html</a>
<a class="qapi">e.html</a>
<script type="text/javascript">
console.log('11');
     document.querySelectorAll('.qapi').forEach((item)=>{
       item.addEventListener('click',(e)=>{
         e.preventDefault();
         let link = item.link;
         location.hash = item.textContent;
       },false)
     });

     window.addEventListener("hashchange",(e)=>{
       console.log({
         href:location.href,
       });
     })
</script>
