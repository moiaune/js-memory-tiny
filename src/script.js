(function( d ) {
  var b = d.getElementById('b'),
      l = d.getElementsByTagName('li'),
      i = 0,
      c = null,
      s = 0,
      p = d.getElementById('s');

  for( ;i<l.length;i++ ) {
    l[i].addEventListener( 'click', function( ) {
      this.style.textIndent = 0;
      if( !c ) {
        c=this;
      } else {
        if( c.innerHTML==this.innerHTML ) {
          s++;
        } else {
          x( c );
          x( this );
        }
        c=null;
      }
      h( );
    });
  }

  function x( o ) {
    o.style.textIndent = "-9999px";
  }
  function h( ) {
    p.innerHTML = s;
  }
})(document);