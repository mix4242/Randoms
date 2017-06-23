""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
sb = w => Array.prototype.map.call(w, (c, i) => {
  code = c.charCodeAt()
  if (code < 65 || (code > 90 && code < 97) || code > 122) return c;
  this.m = !this.m;
  return ( !this.m ) ? c.toUpperCase() : c.toLowerCase();
}).join('')
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

sb("Hello world this is the text")
// prints: "HeLlO wOrLd ThIs Is ThE tExT"
