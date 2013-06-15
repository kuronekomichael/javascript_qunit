test( "3桁数字でOK", function() {
  equal( true, validateYuubinNumber('123') );
  equal( true, validateYuubinNumber('456') );
  equal( true, validateYuubinNumber(456) );
});

test( "7桁数字でOK", function() {
  equal( true, validateYuubinNumber('1234567') );
  equal( true, validateYuubinNumber('2345678') );
  equal( true, validateYuubinNumber(2345678) );
});

test( "3桁-4桁数字でOK", function() {
  equal( true, validateYuubinNumber('123-4567') );
  equal( true, validateYuubinNumber('234-5678') );
});

test( "マイナスでNG", function() {
  equal( false, validateYuubinNumber(123-4567) );
  equal( false, validateYuubinNumber(-4567) );
});

test( "空でNG", function() {
  equal( false, validateYuubinNumber('') );
});

test( "1〜2桁数字でNG", function() {
  equal( false, validateYuubinNumber('1') );
  equal( false, validateYuubinNumber('2') );
});

test( "英字まじりで3桁NG", function() {
  equal( false, validateYuubinNumber('12a') );
  equal( false, validateYuubinNumber('abc') );
});

test( "ひらがなまじりで3桁NG", function() {
  equal( false, validateYuubinNumber('12さ') );
  equal( false, validateYuubinNumber('あいう') );
});

test( "8桁以上はNG", function() {
  equal( false, validateYuubinNumber('12345678') );
  equal( false, validateYuubinNumber('123456789') );
});

test( "5桁と6桁はNG", function() {
  equal( false, validateYuubinNumber('12345') );
  equal( false, validateYuubinNumber('123456') );
});

test( "4桁-3桁はNG", function() {
  equal( false, validateYuubinNumber('1234-123') );
  equal( false, validateYuubinNumber('2345-000') );
});

test( "3桁-でNG", function() {
  equal( false, validateYuubinNumber('123-') );
});

test( "-4桁でNG", function() {
  equal( false, validateYuubinNumber('-4567') );
});
