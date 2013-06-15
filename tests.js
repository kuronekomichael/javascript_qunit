test( "3桁数字でOK", function() {
  equal( true, isZipCode('123') );
  equal( true, isZipCode('456') );
  equal( true, isZipCode(456) );
});

test( "7桁数字でOK", function() {
  equal( true, isZipCode('1234567') );
  equal( true, isZipCode('2345678') );
  equal( true, isZipCode(2345678) );
});

test( "3桁-4桁数字でOK", function() {
  equal( true, isZipCode('123-4567') );
  equal( true, isZipCode('234-5678') );
});

test( "マイナスでNG", function() {
  equal( false, isZipCode(123-4567) );
  equal( false, isZipCode(-4567) );
});

test( "空でNG", function() {
  equal( false, isZipCode('') );
});

test( "1〜2桁数字でNG", function() {
  equal( false, isZipCode('1') );
  equal( false, isZipCode('2') );
});

test( "英字まじりで3桁NG", function() {
  equal( false, isZipCode('12a') );
  equal( false, isZipCode('abc') );
});

test( "ひらがなまじりで3桁NG", function() {
  equal( false, isZipCode('12さ') );
  equal( false, isZipCode('あいう') );
});

test( "8桁以上はNG", function() {
  equal( false, isZipCode('12345678') );
  equal( false, isZipCode('123456789') );
});

test( "5桁と6桁はNG", function() {
  equal( false, isZipCode('12345') );
  equal( false, isZipCode('123456') );
});

test( "4桁-3桁はNG", function() {
  equal( false, isZipCode('1234-123') );
  equal( false, isZipCode('2345-000') );
});

test( "3桁-でNG", function() {
  equal( false, isZipCode('123-') );
});

test( "-4桁でNG", function() {
  equal( false, isZipCode('-4567') );
});
