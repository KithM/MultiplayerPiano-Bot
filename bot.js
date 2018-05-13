/* Copyright (C) Kith M, Karl Marx, and all collaborators of this project
 All Rights Reserved

 USAGE
 The following may be entered into the console on
 http://www.multiplayerpiano.com
 __________Karl's Edit___________
*/
MPP.client.on("a" Function(msg) {
  if (msg == '/help') {
    MPP.chat.send('List Commands here after bot is done');
  });
  //it's easyier to have higher ups in all below classes
  //this allows the script to run faster
  //it only has to check one arry
  Owners=['9c42aae508d2b93a6036a7c7',
         '5d0b7aad380a5fc463b62570'] // creaters
  Admins=['9c42aae508d2b93a6036a7c7',
         '5d0b7aad380a5fc463b62570'] // will use commands for the better of the room
  Moders=['9c42aae508d2b93a6036a7c7',
         '5d0b7aad380a5fc463b62570'] // trusted not to spam
  /*
      var isOwners = (AOwners.indexOf(msg.p._id) !==-1);
      var isAdmins = (Admins.indexOf(msg.p._id) !==-1);
      var isModers = (Moders.indexOf(msg.p._id) !==-1);   
      These are for if(*class type) place the matching var above it
 */
  //hits everykey i think 6 times
  MPP.client.on('a', function (msg) {
    var isAdmins = (Admins.indexOf(msg.p._id) !==-1);
    var cmd = msg.a.split(' ')[0].toLowerCase();
    var input = msg.a.substring(cmd.length).trim();
    if (cmd ==  '/boom') {
        if(isAdmins) {
            {setTimeout(function() { MPP.press("a-1")}, 0);}
            {setTimeout(function() { MPP.press("as-1")}, 0);}
            {setTimeout(function() { MPP.press("b-1")}, 0);}
            {setTimeout(function() { MPP.press("c0")}, 0);}
            {setTimeout(function() { MPP.press("cs0")}, 0);}
            {setTimeout(function() { MPP.press("d0")}, 0);}
            {setTimeout(function() { MPP.press("ds0")}, 0);}
            {setTimeout(function() { MPP.press("e0")}, 0);}
            {setTimeout(function() { MPP.press("f0")}, 0);}
            {setTimeout(function() { MPP.press("fs0")}, 0);}
            {setTimeout(function() { MPP.press("g0")}, 0);}
            {setTimeout(function() { MPP.press("gs0")}, 0);}
            {setTimeout(function() { MPP.press("a0")}, 0);}
            {setTimeout(function() { MPP.press("as0")}, 0);}
            {setTimeout(function() { MPP.press("b0")}, 0);}
            {setTimeout(function() { MPP.press("c1")}, 0);}
            {setTimeout(function() { MPP.press("cs1")}, 0);}
            {setTimeout(function() { MPP.press("d1")}, 0);}
            {setTimeout(function() { MPP.press("ds1")}, 0);}
            {setTimeout(function() { MPP.press("e1")}, 0);}
            {setTimeout(function() { MPP.press("f1")}, 0);}
            {setTimeout(function() { MPP.press("fs1")}, 0);}
            {setTimeout(function() { MPP.press("g1")}, 0);}
            {setTimeout(function() { MPP.press("gs1")}, 0);}
            {setTimeout(function() { MPP.press("a1")}, 0);}
            {setTimeout(function() { MPP.press("as1")}, 0);}
            {setTimeout(function() { MPP.press("b1")}, 0);}
            {setTimeout(function() { MPP.press("c2")}, 0);}
            {setTimeout(function() { MPP.press("cs2")}, 0);}
            {setTimeout(function() { MPP.press("d2")}, 0);}
            {setTimeout(function() { MPP.press("ds2")}, 0);}
            {setTimeout(function() { MPP.press("e2")}, 0);}
            {setTimeout(function() { MPP.press("f2")}, 0);}
            {setTimeout(function() { MPP.press("fs2")}, 0);}
            {setTimeout(function() { MPP.press("g2")}, 0);}
            {setTimeout(function() { MPP.press("gs2")}, 0);}
            {setTimeout(function() { MPP.press("a2")}, 0);}
            {setTimeout(function() { MPP.press("as2")}, 0);}
            {setTimeout(function() { MPP.press("b2")}, 0);}
            {setTimeout(function() { MPP.press("c3")}, 0);}
            {setTimeout(function() { MPP.press("cs3")}, 0);}
            {setTimeout(function() { MPP.press("d3")}, 0);}
            {setTimeout(function() { MPP.press("ds3")}, 0);}
            {setTimeout(function() { MPP.press("e3")}, 0);}
            {setTimeout(function() { MPP.press("f3")}, 0);}
            {setTimeout(function() { MPP.press("fs3")}, 0);}
            {setTimeout(function() { MPP.press("g3")}, 0);}
            {setTimeout(function() { MPP.press("gs3")}, 0);}
            {setTimeout(function() { MPP.press("a3")}, 0);}
            {setTimeout(function() { MPP.press("as3")}, 0);}
            {setTimeout(function() { MPP.press("b3")}, 0);}
            {setTimeout(function() { MPP.press("c4")}, 0);}
            {setTimeout(function() { MPP.press("cs4")}, 0);}
            {setTimeout(function() { MPP.press("d4")}, 0);}
            {setTimeout(function() { MPP.press("ds4")}, 0);}
            {setTimeout(function() { MPP.press("e4")}, 0);}
            {setTimeout(function() { MPP.press("f4")}, 0);}
            {setTimeout(function() { MPP.press("fs4")}, 0);}
            {setTimeout(function() { MPP.press("g4")}, 0);}
            {setTimeout(function() { MPP.press("gs4")}, 0);}
            {setTimeout(function() { MPP.press("a4")}, 0);}
            {setTimeout(function() { MPP.press("as4")}, 0);}
            {setTimeout(function() { MPP.press("b4")}, 0);}
            {setTimeout(function() { MPP.press("c5")}, 0);}
            {setTimeout(function() { MPP.press("cs5")}, 0);}
            {setTimeout(function() { MPP.press("d5")}, 0);}
            {setTimeout(function() { MPP.press("ds5")}, 0);}
            {setTimeout(function() { MPP.press("e5")}, 0);}
            {setTimeout(function() { MPP.press("f5")}, 0);}
            {setTimeout(function() { MPP.press("fs5")}, 0);}
            {setTimeout(function() { MPP.press("g5")}, 0);}
            {setTimeout(function() { MPP.press("gs5")}, 0);}
            {setTimeout(function() { MPP.press("a5")}, 0);}
            {setTimeout(function() { MPP.press("as5")}, 0);}
            {setTimeout(function() { MPP.press("b5")}, 0);}
            {setTimeout(function() { MPP.press("c6")}, 0);}
            {setTimeout(function() { MPP.press("cs6")}, 0);}
            {setTimeout(function() { MPP.press("d6")}, 0);}
            {setTimeout(function() { MPP.press("ds6")}, 0);}
            {setTimeout(function() { MPP.press("e6")}, 0);}
            {setTimeout(function() { MPP.press("f6")}, 0);}
            {setTimeout(function() { MPP.press("fs6")}, 0);}
            {setTimeout(function() { MPP.press("g6")}, 0);}
            {setTimeout(function() { MPP.press("gs6")}, 0);}
            {setTimeout(function() { MPP.press("a6")}, 0);}
            {setTimeout(function() { MPP.press("as6")}, 0);}
            {setTimeout(function() { MPP.press("b6")}, 0);}
            {setTimeout(function() { MPP.press("c7")}, 0);}
            {setTimeout(function() { MPP.press("a-1")}, 0);}
            {setTimeout(function() { MPP.press("as-1")}, 0);}
            {setTimeout(function() { MPP.press("b-1")}, 0);}
            {setTimeout(function() { MPP.press("c0")}, 0);}
            {setTimeout(function() { MPP.press("cs0")}, 0);}
            {setTimeout(function() { MPP.press("d0")}, 0);}
            {setTimeout(function() { MPP.press("ds0")}, 0);}
            {setTimeout(function() { MPP.press("e0")}, 0);}
            {setTimeout(function() { MPP.press("f0")}, 0);}
            {setTimeout(function() { MPP.press("fs0")}, 0);}
            {setTimeout(function() { MPP.press("g0")}, 0);}
            {setTimeout(function() { MPP.press("gs0")}, 0);}
            {setTimeout(function() { MPP.press("a0")}, 0);}
            {setTimeout(function() { MPP.press("as0")}, 0);}
            {setTimeout(function() { MPP.press("b0")}, 0);}
            {setTimeout(function() { MPP.press("c1")}, 0);}
            {setTimeout(function() { MPP.press("cs1")}, 0);}
            {setTimeout(function() { MPP.press("d1")}, 0);}
            {setTimeout(function() { MPP.press("ds1")}, 0);}
            {setTimeout(function() { MPP.press("e1")}, 0);}
            {setTimeout(function() { MPP.press("f1")}, 0);}
            {setTimeout(function() { MPP.press("fs1")}, 0);}
            {setTimeout(function() { MPP.press("g1")}, 0);}
            {setTimeout(function() { MPP.press("gs1")}, 0);}
            {setTimeout(function() { MPP.press("a1")}, 0);}
            {setTimeout(function() { MPP.press("as1")}, 0);}
            {setTimeout(function() { MPP.press("b1")}, 0);}
            {setTimeout(function() { MPP.press("c2")}, 0);}
            {setTimeout(function() { MPP.press("cs2")}, 0);}
            {setTimeout(function() { MPP.press("d2")}, 0);}
            {setTimeout(function() { MPP.press("ds2")}, 0);}
            {setTimeout(function() { MPP.press("e2")}, 0);}
            {setTimeout(function() { MPP.press("f2")}, 0);}
            {setTimeout(function() { MPP.press("fs2")}, 0);}
            {setTimeout(function() { MPP.press("g2")}, 0);}
            {setTimeout(function() { MPP.press("gs2")}, 0);}
            {setTimeout(function() { MPP.press("a2")}, 0);}
            {setTimeout(function() { MPP.press("as2")}, 0);}
            {setTimeout(function() { MPP.press("b2")}, 0);}
            {setTimeout(function() { MPP.press("c3")}, 0);}
            {setTimeout(function() { MPP.press("cs3")}, 0);}
            {setTimeout(function() { MPP.press("d3")}, 0);}
            {setTimeout(function() { MPP.press("ds3")}, 0);}
            {setTimeout(function() { MPP.press("e3")}, 0);}
            {setTimeout(function() { MPP.press("f3")}, 0);}
            {setTimeout(function() { MPP.press("fs3")}, 0);}
            {setTimeout(function() { MPP.press("g3")}, 0);}
            {setTimeout(function() { MPP.press("gs3")}, 0);}
            {setTimeout(function() { MPP.press("a3")}, 0);}
            {setTimeout(function() { MPP.press("as3")}, 0);}
            {setTimeout(function() { MPP.press("b3")}, 0);}
            {setTimeout(function() { MPP.press("c4")}, 0);}
            {setTimeout(function() { MPP.press("cs4")}, 0);}
            {setTimeout(function() { MPP.press("d4")}, 0);}
            {setTimeout(function() { MPP.press("ds4")}, 0);}
            {setTimeout(function() { MPP.press("e4")}, 0);}
            {setTimeout(function() { MPP.press("f4")}, 0);}
            {setTimeout(function() { MPP.press("fs4")}, 0);}
            {setTimeout(function() { MPP.press("g4")}, 0);}
            {setTimeout(function() { MPP.press("gs4")}, 0);}
            {setTimeout(function() { MPP.press("a4")}, 0);}
            {setTimeout(function() { MPP.press("as4")}, 0);}
            {setTimeout(function() { MPP.press("b4")}, 0);}
            {setTimeout(function() { MPP.press("c5")}, 0);}
            {setTimeout(function() { MPP.press("cs5")}, 0);}
            {setTimeout(function() { MPP.press("d5")}, 0);}
            {setTimeout(function() { MPP.press("ds5")}, 0);}
            {setTimeout(function() { MPP.press("e5")}, 0);}
            {setTimeout(function() { MPP.press("f5")}, 0);}
            {setTimeout(function() { MPP.press("fs5")}, 0);}
            {setTimeout(function() { MPP.press("g5")}, 0);}
            {setTimeout(function() { MPP.press("gs5")}, 0);}
            {setTimeout(function() { MPP.press("a5")}, 0);}
            {setTimeout(function() { MPP.press("as5")}, 0);}
            {setTimeout(function() { MPP.press("b5")}, 0);}
            {setTimeout(function() { MPP.press("c6")}, 0);}
            {setTimeout(function() { MPP.press("cs6")}, 0);}
            {setTimeout(function() { MPP.press("d6")}, 0);}
            {setTimeout(function() { MPP.press("ds6")}, 0);}
            {setTimeout(function() { MPP.press("e6")}, 0);}
            {setTimeout(function() { MPP.press("f6")}, 0);}
            {setTimeout(function() { MPP.press("fs6")}, 0);}
            {setTimeout(function() { MPP.press("g6")}, 0);}
            {setTimeout(function() { MPP.press("gs6")}, 0);}
            {setTimeout(function() { MPP.press("a6")}, 0);}
            {setTimeout(function() { MPP.press("as6")}, 0);}
            {setTimeout(function() { MPP.press("b6")}, 0);}
            {setTimeout(function() { MPP.press("c7")}, 0);}
            {setTimeout(function() { MPP.press("a-1")}, 0);}
            {setTimeout(function() { MPP.press("as-1")}, 0);}
            {setTimeout(function() { MPP.press("b-1")}, 0);}
            {setTimeout(function() { MPP.press("c0")}, 0);}
            {setTimeout(function() { MPP.press("cs0")}, 0);}
            {setTimeout(function() { MPP.press("d0")}, 0);}
            {setTimeout(function() { MPP.press("ds0")}, 0);}
            {setTimeout(function() { MPP.press("e0")}, 0);}
            {setTimeout(function() { MPP.press("f0")}, 0);}
            {setTimeout(function() { MPP.press("fs0")}, 0);}
            {setTimeout(function() { MPP.press("g0")}, 0);}
            {setTimeout(function() { MPP.press("gs0")}, 0);}
            {setTimeout(function() { MPP.press("a0")}, 0);}
            {setTimeout(function() { MPP.press("as0")}, 0);}
            {setTimeout(function() { MPP.press("b0")}, 0);}
            {setTimeout(function() { MPP.press("c1")}, 0);}
            {setTimeout(function() { MPP.press("cs1")}, 0);}
            {setTimeout(function() { MPP.press("d1")}, 0);}
            {setTimeout(function() { MPP.press("ds1")}, 0);}
            {setTimeout(function() { MPP.press("e1")}, 0);}
            {setTimeout(function() { MPP.press("f1")}, 0);}
            {setTimeout(function() { MPP.press("fs1")}, 0);}
            {setTimeout(function() { MPP.press("g1")}, 0);}
            {setTimeout(function() { MPP.press("gs1")}, 0);}
            {setTimeout(function() { MPP.press("a1")}, 0);}
            {setTimeout(function() { MPP.press("as1")}, 0);}
            {setTimeout(function() { MPP.press("b1")}, 0);}
            {setTimeout(function() { MPP.press("c2")}, 0);}
            {setTimeout(function() { MPP.press("cs2")}, 0);}
            {setTimeout(function() { MPP.press("d2")}, 0);}
            {setTimeout(function() { MPP.press("ds2")}, 0);}
            {setTimeout(function() { MPP.press("e2")}, 0);}
            {setTimeout(function() { MPP.press("f2")}, 0);}
            {setTimeout(function() { MPP.press("fs2")}, 0);}
            {setTimeout(function() { MPP.press("g2")}, 0);}
            {setTimeout(function() { MPP.press("gs2")}, 0);}
            {setTimeout(function() { MPP.press("a2")}, 0);}
            {setTimeout(function() { MPP.press("as2")}, 0);}
            {setTimeout(function() { MPP.press("b2")}, 0);}
            {setTimeout(function() { MPP.press("c3")}, 0);}
            {setTimeout(function() { MPP.press("cs3")}, 0);}
            {setTimeout(function() { MPP.press("d3")}, 0);}
            {setTimeout(function() { MPP.press("ds3")}, 0);}
            {setTimeout(function() { MPP.press("e3")}, 0);}
            {setTimeout(function() { MPP.press("f3")}, 0);}
            {setTimeout(function() { MPP.press("fs3")}, 0);}
            {setTimeout(function() { MPP.press("g3")}, 0);}
            {setTimeout(function() { MPP.press("gs3")}, 0);}
            {setTimeout(function() { MPP.press("a3")}, 0);}
            {setTimeout(function() { MPP.press("as3")}, 0);}
            {setTimeout(function() { MPP.press("b3")}, 0);}
            {setTimeout(function() { MPP.press("c4")}, 0);}
            {setTimeout(function() { MPP.press("cs4")}, 0);}
            {setTimeout(function() { MPP.press("d4")}, 0);}
            {setTimeout(function() { MPP.press("ds4")}, 0);}
            {setTimeout(function() { MPP.press("e4")}, 0);}
            {setTimeout(function() { MPP.press("f4")}, 0);}
            {setTimeout(function() { MPP.press("fs4")}, 0);}
            {setTimeout(function() { MPP.press("g4")}, 0);}
            {setTimeout(function() { MPP.press("gs4")}, 0);}
            {setTimeout(function() { MPP.press("a4")}, 0);}
            {setTimeout(function() { MPP.press("as4")}, 0);}
            {setTimeout(function() { MPP.press("b4")}, 0);}
            {setTimeout(function() { MPP.press("c5")}, 0);}
            {setTimeout(function() { MPP.press("cs5")}, 0);}
            {setTimeout(function() { MPP.press("d5")}, 0);}
            {setTimeout(function() { MPP.press("ds5")}, 0);}
            {setTimeout(function() { MPP.press("e5")}, 0);}
            {setTimeout(function() { MPP.press("f5")}, 0);}
            {setTimeout(function() { MPP.press("fs5")}, 0);}
            {setTimeout(function() { MPP.press("g5")}, 0);}
            {setTimeout(function() { MPP.press("gs5")}, 0);}
            {setTimeout(function() { MPP.press("a5")}, 0);}
            {setTimeout(function() { MPP.press("as5")}, 0);}
            {setTimeout(function() { MPP.press("b5")}, 0);}
            {setTimeout(function() { MPP.press("c6")}, 0);}
            {setTimeout(function() { MPP.press("cs6")}, 0);}
            {setTimeout(function() { MPP.press("d6")}, 0);}
            {setTimeout(function() { MPP.press("ds6")}, 0);}
            {setTimeout(function() { MPP.press("e6")}, 0);}
            {setTimeout(function() { MPP.press("f6")}, 0);}
            {setTimeout(function() { MPP.press("fs6")}, 0);}
            {setTimeout(function() { MPP.press("g6")}, 0);}
            {setTimeout(function() { MPP.press("gs6")}, 0);}
            {setTimeout(function() { MPP.press("a6")}, 0);}
            {setTimeout(function() { MPP.press("as6")}, 0);}
            {setTimeout(function() { MPP.press("b6")}, 0);}
            {setTimeout(function() { MPP.press("c7")}, 0);}
            {setTimeout(function() { MPP.press("a-1")}, 0);}
            {setTimeout(function() { MPP.press("as-1")}, 0);}
            {setTimeout(function() { MPP.press("b-1")}, 0);}
            {setTimeout(function() { MPP.press("c0")}, 0);}
            {setTimeout(function() { MPP.press("cs0")}, 0);}
            {setTimeout(function() { MPP.press("d0")}, 0);}
            {setTimeout(function() { MPP.press("ds0")}, 0);}
            {setTimeout(function() { MPP.press("e0")}, 0);}
            {setTimeout(function() { MPP.press("f0")}, 0);}
            {setTimeout(function() { MPP.press("fs0")}, 0);}
            {setTimeout(function() { MPP.press("g0")}, 0);}
            {setTimeout(function() { MPP.press("gs0")}, 0);}
            {setTimeout(function() { MPP.press("a0")}, 0);}
            {setTimeout(function() { MPP.press("as0")}, 0);}
            {setTimeout(function() { MPP.press("b0")}, 0);}
            {setTimeout(function() { MPP.press("c1")}, 0);}
            {setTimeout(function() { MPP.press("cs1")}, 0);}
            {setTimeout(function() { MPP.press("d1")}, 0);}
            {setTimeout(function() { MPP.press("ds1")}, 0);}
            {setTimeout(function() { MPP.press("e1")}, 0);}
            {setTimeout(function() { MPP.press("f1")}, 0);}
            {setTimeout(function() { MPP.press("fs1")}, 0);}
            {setTimeout(function() { MPP.press("g1")}, 0);}
            {setTimeout(function() { MPP.press("gs1")}, 0);}
            {setTimeout(function() { MPP.press("a1")}, 0);}
            {setTimeout(function() { MPP.press("as1")}, 0);}
            {setTimeout(function() { MPP.press("b1")}, 0);}
            {setTimeout(function() { MPP.press("c2")}, 0);}
            {setTimeout(function() { MPP.press("cs2")}, 0);}
            {setTimeout(function() { MPP.press("d2")}, 0);}
            {setTimeout(function() { MPP.press("ds2")}, 0);}
            {setTimeout(function() { MPP.press("e2")}, 0);}
            {setTimeout(function() { MPP.press("f2")}, 0);}
            {setTimeout(function() { MPP.press("fs2")}, 0);}
            {setTimeout(function() { MPP.press("g2")}, 0);}
            {setTimeout(function() { MPP.press("gs2")}, 0);}
            {setTimeout(function() { MPP.press("a2")}, 0);}
            {setTimeout(function() { MPP.press("as2")}, 0);}
            {setTimeout(function() { MPP.press("b2")}, 0);}
            {setTimeout(function() { MPP.press("c3")}, 0);}
            {setTimeout(function() { MPP.press("cs3")}, 0);}
            {setTimeout(function() { MPP.press("d3")}, 0);}
            {setTimeout(function() { MPP.press("ds3")}, 0);}
            {setTimeout(function() { MPP.press("e3")}, 0);}
            {setTimeout(function() { MPP.press("f3")}, 0);}
            {setTimeout(function() { MPP.press("fs3")}, 0);}
            {setTimeout(function() { MPP.press("g3")}, 0);}
            {setTimeout(function() { MPP.press("gs3")}, 0);}
            {setTimeout(function() { MPP.press("a3")}, 0);}
            {setTimeout(function() { MPP.press("as3")}, 0);}
            {setTimeout(function() { MPP.press("b3")}, 0);}
            {setTimeout(function() { MPP.press("c4")}, 0);}
            {setTimeout(function() { MPP.press("cs4")}, 0);}
            {setTimeout(function() { MPP.press("d4")}, 0);}
            {setTimeout(function() { MPP.press("ds4")}, 0);}
            {setTimeout(function() { MPP.press("e4")}, 0);}
            {setTimeout(function() { MPP.press("f4")}, 0);}
            {setTimeout(function() { MPP.press("fs4")}, 0);}
            {setTimeout(function() { MPP.press("g4")}, 0);}
            {setTimeout(function() { MPP.press("gs4")}, 0);}
            {setTimeout(function() { MPP.press("a4")}, 0);}
            {setTimeout(function() { MPP.press("as4")}, 0);}
            {setTimeout(function() { MPP.press("b4")}, 0);}
            {setTimeout(function() { MPP.press("c5")}, 0);}
            {setTimeout(function() { MPP.press("cs5")}, 0);}
            {setTimeout(function() { MPP.press("d5")}, 0);}
            {setTimeout(function() { MPP.press("ds5")}, 0);}
            {setTimeout(function() { MPP.press("e5")}, 0);}
            {setTimeout(function() { MPP.press("f5")}, 0);}
            {setTimeout(function() { MPP.press("fs5")}, 0);}
            {setTimeout(function() { MPP.press("g5")}, 0);}
            {setTimeout(function() { MPP.press("gs5")}, 0);}
            {setTimeout(function() { MPP.press("a5")}, 0);}
            {setTimeout(function() { MPP.press("as5")}, 0);}
            {setTimeout(function() { MPP.press("b5")}, 0);}
            {setTimeout(function() { MPP.press("c6")}, 0);}
            {setTimeout(function() { MPP.press("cs6")}, 0);}
            {setTimeout(function() { MPP.press("d6")}, 0);}
            {setTimeout(function() { MPP.press("ds6")}, 0);}
            {setTimeout(function() { MPP.press("e6")}, 0);}
            {setTimeout(function() { MPP.press("f6")}, 0);}
            {setTimeout(function() { MPP.press("fs6")}, 0);}
            {setTimeout(function() { MPP.press("g6")}, 0);}
            {setTimeout(function() { MPP.press("gs6")}, 0);}
            {setTimeout(function() { MPP.press("a6")}, 0);}
            {setTimeout(function() { MPP.press("as6")}, 0);}
            {setTimeout(function() { MPP.press("b6")}, 0);}
            {setTimeout(function() { MPP.press("c7")}, 0);}
            {setTimeout(function() { MPP.press("a-1")}, 0);}
            {setTimeout(function() { MPP.press("as-1")}, 0);}
            {setTimeout(function() { MPP.press("b-1")}, 0);}
            {setTimeout(function() { MPP.press("c0")}, 0);}
            {setTimeout(function() { MPP.press("cs0")}, 0);}
            {setTimeout(function() { MPP.press("d0")}, 0);}
            {setTimeout(function() { MPP.press("ds0")}, 0);}
            {setTimeout(function() { MPP.press("e0")}, 0);}
            {setTimeout(function() { MPP.press("f0")}, 0);}
            {setTimeout(function() { MPP.press("fs0")}, 0);}
            {setTimeout(function() { MPP.press("g0")}, 0);}
            {setTimeout(function() { MPP.press("gs0")}, 0);}
            {setTimeout(function() { MPP.press("a0")}, 0);}
            {setTimeout(function() { MPP.press("as0")}, 0);}
            {setTimeout(function() { MPP.press("b0")}, 0);}
            {setTimeout(function() { MPP.press("c1")}, 0);}
            {setTimeout(function() { MPP.press("cs1")}, 0);}
            {setTimeout(function() { MPP.press("d1")}, 0);}
            {setTimeout(function() { MPP.press("ds1")}, 0);}
            {setTimeout(function() { MPP.press("e1")}, 0);}
            {setTimeout(function() { MPP.press("f1")}, 0);}
            {setTimeout(function() { MPP.press("fs1")}, 0);}
            {setTimeout(function() { MPP.press("g1")}, 0);}
            {setTimeout(function() { MPP.press("gs1")}, 0);}
            {setTimeout(function() { MPP.press("a1")}, 0);}
            {setTimeout(function() { MPP.press("as1")}, 0);}
            {setTimeout(function() { MPP.press("b1")}, 0);}
            {setTimeout(function() { MPP.press("c2")}, 0);}
            {setTimeout(function() { MPP.press("cs2")}, 0);}
            {setTimeout(function() { MPP.press("d2")}, 0);}
            {setTimeout(function() { MPP.press("ds2")}, 0);}
            {setTimeout(function() { MPP.press("e2")}, 0);}
            {setTimeout(function() { MPP.press("f2")}, 0);}
            {setTimeout(function() { MPP.press("fs2")}, 0);}
            {setTimeout(function() { MPP.press("g2")}, 0);}
            {setTimeout(function() { MPP.press("gs2")}, 0);}
            {setTimeout(function() { MPP.press("a2")}, 0);}
            {setTimeout(function() { MPP.press("as2")}, 0);}
            {setTimeout(function() { MPP.press("b2")}, 0);}
            {setTimeout(function() { MPP.press("c3")}, 0);}
            {setTimeout(function() { MPP.press("cs3")}, 0);}
            {setTimeout(function() { MPP.press("d3")}, 0);}
            {setTimeout(function() { MPP.press("ds3")}, 0);}
            {setTimeout(function() { MPP.press("e3")}, 0);}
            {setTimeout(function() { MPP.press("f3")}, 0);}
            {setTimeout(function() { MPP.press("fs3")}, 0);}
            {setTimeout(function() { MPP.press("g3")}, 0);}
            {setTimeout(function() { MPP.press("gs3")}, 0);}
            {setTimeout(function() { MPP.press("a3")}, 0);}
            {setTimeout(function() { MPP.press("as3")}, 0);}
            {setTimeout(function() { MPP.press("b3")}, 0);}
            {setTimeout(function() { MPP.press("c4")}, 0);}
            {setTimeout(function() { MPP.press("cs4")}, 0);}
            {setTimeout(function() { MPP.press("d4")}, 0);}
            {setTimeout(function() { MPP.press("ds4")}, 0);}
            {setTimeout(function() { MPP.press("e4")}, 0);}
            {setTimeout(function() { MPP.press("f4")}, 0);}
            {setTimeout(function() { MPP.press("fs4")}, 0);}
            {setTimeout(function() { MPP.press("g4")}, 0);}
            {setTimeout(function() { MPP.press("gs4")}, 0);}
            {setTimeout(function() { MPP.press("a4")}, 0);}
            {setTimeout(function() { MPP.press("as4")}, 0);}
            {setTimeout(function() { MPP.press("b4")}, 0);}
            {setTimeout(function() { MPP.press("c5")}, 0);}
            {setTimeout(function() { MPP.press("cs5")}, 0);}
            {setTimeout(function() { MPP.press("d5")}, 0);}
            {setTimeout(function() { MPP.press("ds5")}, 0);}
            {setTimeout(function() { MPP.press("e5")}, 0);}
            {setTimeout(function() { MPP.press("f5")}, 0);}
            {setTimeout(function() { MPP.press("fs5")}, 0);}
            {setTimeout(function() { MPP.press("g5")}, 0);}
            {setTimeout(function() { MPP.press("gs5")}, 0);}
            {setTimeout(function() { MPP.press("a5")}, 0);}
            {setTimeout(function() { MPP.press("as5")}, 0);}
            {setTimeout(function() { MPP.press("b5")}, 0);}
            {setTimeout(function() { MPP.press("c6")}, 0);}
            {setTimeout(function() { MPP.press("cs6")}, 0);}
            {setTimeout(function() { MPP.press("d6")}, 0);}
            {setTimeout(function() { MPP.press("ds6")}, 0);}
            {setTimeout(function() { MPP.press("e6")}, 0);}
            {setTimeout(function() { MPP.press("f6")}, 0);}
            {setTimeout(function() { MPP.press("fs6")}, 0);}
            {setTimeout(function() { MPP.press("g6")}, 0);}
            {setTimeout(function() { MPP.press("gs6")}, 0);}
            {setTimeout(function() { MPP.press("a6")}, 0);}
            {setTimeout(function() { MPP.press("as6")}, 0);}
            {setTimeout(function() { MPP.press("b6")}, 0);}
            {setTimeout(function() { MPP.press("c7")}, 0);}
            {setTimeout(function() { MPP.press("a-1")}, 0);}
            {setTimeout(function() { MPP.press("as-1")}, 0);}
            {setTimeout(function() { MPP.press("b-1")}, 0);}
            {setTimeout(function() { MPP.press("c0")}, 0);}
            {setTimeout(function() { MPP.press("cs0")}, 0);}
            {setTimeout(function() { MPP.press("d0")}, 0);}
            {setTimeout(function() { MPP.press("ds0")}, 0);}
            {setTimeout(function() { MPP.press("e0")}, 0);}
            {setTimeout(function() { MPP.press("f0")}, 0);}
            {setTimeout(function() { MPP.press("fs0")}, 0);}
            {setTimeout(function() { MPP.press("g0")}, 0);}
            {setTimeout(function() { MPP.press("gs0")}, 0);}
            {setTimeout(function() { MPP.press("a0")}, 0);}
            {setTimeout(function() { MPP.press("as0")}, 0);}
            {setTimeout(function() { MPP.press("b0")}, 0);}
            {setTimeout(function() { MPP.press("c1")}, 0);}
            {setTimeout(function() { MPP.press("cs1")}, 0);}
            {setTimeout(function() { MPP.press("d1")}, 0);}
            {setTimeout(function() { MPP.press("ds1")}, 0);}
            {setTimeout(function() { MPP.press("e1")}, 0);}
            {setTimeout(function() { MPP.press("f1")}, 0);}
            {setTimeout(function() { MPP.press("fs1")}, 0);}
            {setTimeout(function() { MPP.press("g1")}, 0);}
            {setTimeout(function() { MPP.press("gs1")}, 0);}
            {setTimeout(function() { MPP.press("a1")}, 0);}
            {setTimeout(function() { MPP.press("as1")}, 0);}
            {setTimeout(function() { MPP.press("b1")}, 0);}
            {setTimeout(function() { MPP.press("c2")}, 0);}
            {setTimeout(function() { MPP.press("cs2")}, 0);}
            {setTimeout(function() { MPP.press("d2")}, 0);}
            {setTimeout(function() { MPP.press("ds2")}, 0);}
            {setTimeout(function() { MPP.press("e2")}, 0);}
            {setTimeout(function() { MPP.press("f2")}, 0);}
            {setTimeout(function() { MPP.press("fs2")}, 0);}
            {setTimeout(function() { MPP.press("g2")}, 0);}
            {setTimeout(function() { MPP.press("gs2")}, 0);}
            {setTimeout(function() { MPP.press("a2")}, 0);}
            {setTimeout(function() { MPP.press("as2")}, 0);}
            {setTimeout(function() { MPP.press("b2")}, 0);}
            {setTimeout(function() { MPP.press("c3")}, 0);}
            {setTimeout(function() { MPP.press("cs3")}, 0);}
            {setTimeout(function() { MPP.press("d3")}, 0);}
            {setTimeout(function() { MPP.press("ds3")}, 0);}
            {setTimeout(function() { MPP.press("e3")}, 0);}
            {setTimeout(function() { MPP.press("f3")}, 0);}
            {setTimeout(function() { MPP.press("fs3")}, 0);}
            {setTimeout(function() { MPP.press("g3")}, 0);}
            {setTimeout(function() { MPP.press("gs3")}, 0);}
            {setTimeout(function() { MPP.press("a3")}, 0);}
            {setTimeout(function() { MPP.press("as3")}, 0);}
            {setTimeout(function() { MPP.press("b3")}, 0);}
            {setTimeout(function() { MPP.press("c4")}, 0);}
            {setTimeout(function() { MPP.press("cs4")}, 0);}
            {setTimeout(function() { MPP.press("d4")}, 0);}
            {setTimeout(function() { MPP.press("ds4")}, 0);}
            {setTimeout(function() { MPP.press("e4")}, 0);}
            {setTimeout(function() { MPP.press("f4")}, 0);}
            {setTimeout(function() { MPP.press("fs4")}, 0);}
            {setTimeout(function() { MPP.press("g4")}, 0);}
            {setTimeout(function() { MPP.press("gs4")}, 0);}
            {setTimeout(function() { MPP.press("a4")}, 0);}
            {setTimeout(function() { MPP.press("as4")}, 0);}
            {setTimeout(function() { MPP.press("b4")}, 0);}
            {setTimeout(function() { MPP.press("c5")}, 0);}
            {setTimeout(function() { MPP.press("cs5")}, 0);}
            {setTimeout(function() { MPP.press("d5")}, 0);}
            {setTimeout(function() { MPP.press("ds5")}, 0);}
            {setTimeout(function() { MPP.press("e5")}, 0);}
            {setTimeout(function() { MPP.press("f5")}, 0);}
            {setTimeout(function() { MPP.press("fs5")}, 0);}
            {setTimeout(function() { MPP.press("g5")}, 0);}
            {setTimeout(function() { MPP.press("gs5")}, 0);}
            {setTimeout(function() { MPP.press("a5")}, 0);}
            {setTimeout(function() { MPP.press("as5")}, 0);}
            {setTimeout(function() { MPP.press("b5")}, 0);}
            {setTimeout(function() { MPP.press("c6")}, 0);}
            {setTimeout(function() { MPP.press("cs6")}, 0);}
            {setTimeout(function() { MPP.press("d6")}, 0);}
            {setTimeout(function() { MPP.press("ds6")}, 0);}
            {setTimeout(function() { MPP.press("e6")}, 0);}
            {setTimeout(function() { MPP.press("f6")}, 0);}
            {setTimeout(function() { MPP.press("fs6")}, 0);}
            {setTimeout(function() { MPP.press("g6")}, 0);}
            {setTimeout(function() { MPP.press("gs6")}, 0);}
            {setTimeout(function() { MPP.press("a6")}, 0);}
            {setTimeout(function() { MPP.press("as6")}, 0);}
            {setTimeout(function() { MPP.press("b6")}, 0);}
            {setTimeout(function() { MPP.press("c7")}, 0);}

        } else {
            MPP.chat.send('You can not use this command.');}
    }
});
 // clears chat
MPP.client.on('a', function (msg) {
    var isAdmins = (Admins.indexOf(msg.p._id) !==-1);
    var cmd = msg.a.split(' ')[0].toLowerCase();
    var input = msg.a.substring(cmd.length).trim();
    if (cmd == '/clearchat') {
        if(isAdmins) {
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 600);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 900);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 1200);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 1500);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 1800);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 2100);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 2400);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 2700);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 3000);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 3300);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 3600);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 3900);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 4200);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 4500);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 4800);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 5100);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 5400);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 5700);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 6000);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 6300);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 6600);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 6900);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 7200);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" }]); }, 7500);
            setTimeout(function() { MPP.client.sendArray([{ m: "a", message: "Chat cleared" }]); }, 7800);
        } else {
            MPP.chat.send('You can not use this Command.');}
    }
});
  // /kickban script
  function findParticipantByName(name) {
    for (let part in MPP.client.ppl) {
        part = MPP.client.ppl[part];
        if (part.name.toLowerCase() == name.toLowerCase()) return part;
    }
}
MPP.client.on("a", function(msg){
    if (!msg.a.toLowerCase().startsWith("/kickban")) return;
    if (!Admins.includes(msg.p._id)) return MPP.chat.send("This is an A class admin Command. type /admin for help.");
    var input = msg.a.split(" ").slice(1).join(" ");
    if (!input) return MPP.chat.send("Kickban who?");
    var target = MPP.client.ppl[input] || findParticipantByName(input);
    if (!target) return MPP.chat.send("Person not found.");
    MPP.client.sendArray([{m:"kickban", _id: target._id, ms: 20*60*1000}]);
});
  //Idea Database  Type Ideadb in console
  Ideadb={};
Ideadb.ideas={};
MPP.client.on('a', function(msg) {
  var args = msg.a.split(" ");
  var cmd = args[0];
  if (cmd == "/add") {
    MPP.chat.send('Thank for the idea, we\'ll see what we can do! ');
    Ideadb.ideas["idea"+Math.floor(Math.random()*10000000)]=msg.a.substring(cmd.length+1); 
  } 
});
 MPP.client.on('a', function(msg) {
   var args = msg.a.split(" ");
   var cmd = args[0];
if (cmd == "/afk"&&msg.p.id==MPP.client.participantId) {
if(!msg.p.name.includes('[AFK]')) {
  MPP.chat.send(msg.p.name + ' is AFK');
  MPP .client.sendArray([{m:"userset", set:{name:msg.p.name + "        [AFK]"}}])}
                                      else {
MPP.chat.send('You are not afk anymore.');
MPP .client.sendArray([{m:"userset", set:{name:msg.p.name.split('[AFK]').join('')}}])
                        }
          }
});
  

