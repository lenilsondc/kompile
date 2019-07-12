function Kompile(html, model) {
  var cur = 0;
  var code = 'var o=\'\';';
  var rgx = /(<%=?)([^<]*)?%>/gm;
  var clean = function(i) {
    return i.replace(/\r?\n/gm, '\\n');
  };
  var match;
  while (match = rgx.exec(html)) {
    var t = clean(html.substring(cur, match.index));
    code += "o+='" + t + "';";
    if (match[1] === '<%=')
      code += "o+=" + match[2] + ";";
    else
      code += match[2] + ";";
    cur = match.index + match[0].length;
  }
  code += "o+='" + clean(html.substring(cur)) + "';";
  code += 'return o;';
  return function(model) {
    try {
      return new Function(code).call(model);
    } catch (e) {
      return e.toString();
    }
  };
}
