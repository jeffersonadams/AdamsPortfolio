//
//HYPHENATE PHONE NUMBER
//(slightly changed input)
function addHyphen() {
    var t = document.forms['contact'].elements['phone'];
      if (t.value.length > 0) {
        t.value = t.value.substring(0,3) + "-" + t.value.substring(3, 6) + "-" + t.value.substring(6, t.value.length);
      }
}
