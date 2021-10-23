/* Copyright (C) Kith M, Karl Marx, and all collaborators of this project
All Rights Reserved

USAGE
The following may be entered into the console on
http://www.multiplayerpiano.com
__________Kith's Edit___________
*/
MPP.client.on('a', function (msg) {
	if (msg == '/help') {
		MPP.chat.send('List Commands here after bot is done');
	});
	//it's easyier to have higher ups in all below classes
	//this allows the script to run faster
	//it only has to check one array
	Owners=['9c42aae508d2b93a6036a7c7',
	'5d0b7aad380a5fc463b62570'] // creaters
	Admins=['9c42aae508d2b93a6036a7c7',
	'5d0b7aad380a5fc463b62570'] // will use commands for the better of the room
	Moders=['9c42aae508d2b93a6036a7c7',
	'5d0b7aad380a5fc463b62570'] // trusted not to spam
	/*
	var isOwners = (AOwners.indexOf(msg.p._id) !== -1);
	var isAdmins = (Admins.indexOf(msg.p._id) !== -1);
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	These are for if(*class type) place the matching var above it
	*/
});
//hits everykey i think 6 times
MPP.client.on('a', function (msg) {
	var isAdmins = (Admins.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/boom') {
		if(isAdmins) {
			(give $500() { MPP.press(cdaily)}, 0);}
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
			MPP.chat.send('You can not use this command.');
		}
	}
});
// clears chat
MPP.client.on('a', function (msg) {
	var isAdmins = (Admins.indexOf(msg.p._id) !== -1);
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
			MPP.chat.send('You can not use this Command.');
		}
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
	if (!msg.a.toLowerCase().startsWith("/kickban")){ return; }
	if (!Admins.includes(msg.p._id)){ return MPP.chat.send("This is an A class admin Command. type /admin for help."); }

	var input = msg.a.split(" ").slice(1).join(" ");
	if (!input){ return MPP.chat.send("Kickban who?"); }

	var target = MPP.client.ppl[input] || findParticipantByName(input);
	if (!target){ return MPP.chat.send("Person not found."); }

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
	if (cmd == "/afk" && msg.p.id == MPP.client.participantId) {
		if(!msg.p.name.includes('[AFK]')) {
			MPP.chat.send(msg.p.name + ' is AFK');
			MPP.client.sendArray([{m:"userset", set:{name:`${msg.p.name}         [AFK]`}}]);
		} else {
			MPP.chat.send('You are not afk anymore.');
			MPP.client.sendArray([{m:"userset", set:{name:msg.p.name.split('[AFK]').join('')}}]);
		}
	}
});
//Action commands
function getPart(boop) {
	for (var id in MPP.client.ppl) {
		var part = MPP.client.ppl[id];
		if (part.name.toLowerCase().indexOf(boop.toLowerCase()) !== -1) {
			return part;
			break;
		}
	}
}
MPP.client.on("a", function(msg) {
	var args = msg.a.split(" ");
	var cmd = args[0].toLowerCase();
	var argcat = msg.a.substring(cmd.length).trim();
	if (cmd == "/rps") {
		var part = getPart(argcat);
		if (argcat.length == 0) {
			MPP.chat.send(`${msg.p.name} plays rock paper sissors alone.`);
			return;
		}
		if (part) {
			MPP.chat.send(`${msg.p.name}: ${rps[Math.floor(Math.random()*rps.length)]} ${MPP.client.ppl[part.id].name}: ${rps[Math.floor(Math.random()*rps.length)]}`);
		} else {
			MPP.chat.send(`The user \'${argcat}\' was not found. Try using part of their username.`);
		}
	}
});
MPP.client.on("a", function(msg) {
	var args = msg.a.split(" ");
	var cmd = args[0].toLowerCase();
	var argcat = msg.a.substring(cmd.length).trim();
	if (cmd == "/fight") {
		var part = getPart(argcat);
		if (argcat.length == 0) {
			MPP.chat.send(`${msg.p.name} said \"Why are you hitting yourself? Why are you hitting yourself? Why are you hitting yourself? Why am I hitting myself?\"`);
			return;
		}
		if (part) {
			MPP.chat.send(`${msg.p.name} got in to a fight with ${MPP.client.ppl[part.id].name} *Ding Ding Ding* Match over! ${msg.p.name}has ${fights[Math.floor(Math.random()*fights.length)]}`);
		} else {
			MPP.chat.send(`The user \'${argcat}\' was not found. Try using part of their username.`);
		}
	}
});
MPP.client.on("a", function(msg) {
	var args = msg.a.split(" ");
	var cmd = args[0].toLowerCase();
	var argcat = msg.a.substring(cmd.length).trim();
	if (cmd == "/hug") {
		var part = getPart(argcat);
		if (argcat.length == 0) {
			MPP.chat.send(`${msg.p.name} gives themself a hug. How lonely.`);
			return;
		}
		if (part) {
			MPP.chat.send(`${msg.p.name} gives ${MPP.client.ppl[part.id].name} a big hug. ${MPP.client.ppl[part.id].name}: Help me.`);
		} else {
			MPP.chat.send(`The user \'${argcat}\' was not found. Try using part of their username.`);
		}
	}
});
MPP.client.on("a", function(msg) {
	var args = msg.a.split(" ");
	var cmd = args[0].toLowerCase();
	var argcat = msg.a.substring(cmd.length).trim();
	if (cmd == "/kill") {
		var part = getPart(argcat);
		if (argcat.length == 0) {
			MPP.chat.send(`In the ancient ritual of seppuku, ${msg.p.name} unsheathes their sword and runs it through their stomach.`);
			return;
		}
		if (part) {
			MPP.chat.send(`${msg.p.name} kills ${MPP.client.ppl[part.id].name} with ${kills[Math.floor(Math.random()*kills.length)]}. How? Who knows.`);
		} else {
			MPP.chat.send(`The user \'${argcat}\' was not found. Try using part of their username.`);
		}
	}      //  + MPP.client.ppl[part.id].name
});
MPP.client.on("a", function(msg) {
	var args = msg.a.split(" ");
	var cmd = args[0].toLowerCase();
	var argcat = msg.a.substring(cmd.length).trim();
	if (cmd == "/kiss") {
		var part = getPart(argcat);
		if (argcat.length == 0) {
			MPP.chat.send(`${msg.p.name} picks up a photo of themself wearing a full body red leotard. They kiss it softly.`);
			return;
		}
		if (part) {
			MPP.chat.send(`${msg.p.name} gives ${MPP.client.ppl[part.id].name} a sloppy kiss.`);
		} else {
			MPP.chat.send(`The user \'${argcat}\' was not found. Try using part of their username.`);
		}
	}
});
MPP.client.on("a", function(msg) {
	var args = msg.a.split(" ");
	var cmd = args[0].toLowerCase();
	var argcat = msg.a.substring(cmd.length).trim();
	if (cmd == "/roast") {
		var part = getPart(argcat);
		if (argcat.length == 0) {
			MPP.chat.send(`${msg.p.name} looks through a list of insecurities that they will use to roast themself.`);
			return;
		}
		if (part) {
			MPP.chat.send(`${msg.p.name} places ${MPP.client.ppl[part.id].name} over a low burning flame.`);
		} else {
			MPP.chat.send(`The user \'${argcat}\' was not found. Try using part of their username.`);
		}
	}
});
MPP.client.on("a", function(msg) {
	var args = msg.a.split(" ");
	var cmd = args[0].toLowerCase();
	var argcat = msg.a.substring(cmd.length).trim();
	if (cmd == "/stab") {
		var part = getPart(argcat);
		if (argcat.length == 0) {
			MPP.chat.send(`${msg.p.name} takes a knife and throws it at a wall. It bounces back and takes our their left eye.`);
			return;
		}
		if (part) {
			MPP.chat.send(`${msg.p.name} takes a ${knifes[Math.floor(Math.random()*knifes.length)]} and stabs ${MPP.client.ppl[part.id].name}.`);
		} else {
			MPP.chat.send(`The user \'${argcat}\' was not found. Try using part of their username.`);
		}
	}
});
MPP.client.on("a", function(msg) {
	var args = msg.a.split(" ");
	var cmd = args[0].toLowerCase();
	var argcat = msg.a.substring(cmd.length).trim();
	if (cmd == "/rip") {
		var part = getPart(argcat);
		if (argcat.length == 0) {
			MPP.chat.send(`Rest in peace ${msg.p.name}. They will be missed.`);
			return;
		}
		if (part) {
			MPP.chat.send(`Rest in peace ${MPP.client.ppl[part.id].name}. They will be missed. From ${msg.p.name}.`);
		} else {
			MPP.chat.send(`The user \'${argcat}\' was not found. Try using part of their username.`);
		}
	}
});
MPP.client.on("a", function(msg) {
	var args = msg.a.split(" ");
	var cmd = args[0].toLowerCase();
	var argcat = msg.a.substring(cmd.length).trim();
	if (cmd == "/shoot") {
		var part = getPart(argcat);
		if (argcat.length == 0) {
			MPP.chat.send(`${msg.p.name} shot themself in the head because ${sreason[Math.floor(Math.random()*sreason.length)]}.`);
			return;
		}
		if (part) {
			MPP.chat.send(`${msg.p.name} shoots ${MPP.client.ppl[part.id].name} because ${ureason[Math.floor(Math.random()*ureason.length)]}.`);
		} else {
			MPP.chat.send(`The user \'${argcat}\' was not found. Try using part of their username.`);
		}
	}
});
MPP.client.on("a", function(msg) {
	var args = msg.a.split(" ");
	var cmd = args[0].toLowerCase();
	var argcat = msg.a.substring(cmd.length).trim();
	if (cmd == "/slap") {
		var part = getPart(argcat);
		if (argcat.length == 0) {
			MPP.chat.send(`${msg.p.name} slaps themself with a ${slapitem[Math.floor(Math.random()*slapitem.length)]}.`);
			return;
		}
		if (part) {
			MPP.chat.send(`${msg.p.name} slaps ${MPP.client.ppl[part.id].name} across the face with a ${slapitem[Math.floor(Math.random()*slapitem.length)]}.`);
		} else {
			MPP.chat.send(`The user \'${argcat}\' was not found. Try using part of their username.`);
		}
	}
});
MPP.client.on("a", function(msg) {
	var args = msg.a.split(" ");
	var cmd = args[0].toLowerCase();
	var argcat = msg.a.substring(cmd.length).trim();
	if (cmd == "/cuddle") {
		var part = getPart(argcat);
		if (argcat.length == 0) {
			MPP.chat.send(`${msg.p.name} cuddles with their body pillow.`);
			return;
		}
		if (part) {
			MPP.chat.send(`${msg.p.name} cuddles with ${MPP.client.ppl[part.id].name}. They love it too.`);
		} else {
			MPP.chat.send(`The user \'${argcat}\' was not found. Try using part of their username.`);
		}
	}
});
MPP.client.on("a", function(msg) {
	var args = msg.a.split(" ");
	var cmd = args[0].toLowerCase();
	var argcat = msg.a.substring(cmd.length).trim();
	if (cmd == "/rape") {
		var part = getPart(argcat);
		if (argcat.length == 0) {
			MPP.chat.send(`${msg.p.name} has become a victim of self-rape, aka. Masterbaiting.`);
			return;
		}
		if (part) {
			MPP.chat.send(`${msg.p.name} rapes ${MPP.client.ppl[part.id].name}. They enjoy it, but ${msg.p.name} was crying, so still rape.`);
		} else {
			MPP.chat.send(`The user \'${argcat}\' was not found. Try using part of their username.`);
		}
	}
});
MPP.client.on("a", function(msg) {
	var args = msg.a.split(" ");
	var cmd = args[0].toLowerCase();
	var argcat = msg.a.substring(cmd.length).trim();
	if (cmd == "/friendzone") {
		var part = getPart(argcat);
		if (argcat.length == 0) {
			MPP.chat.send(`${msg.p.name} friendzones themself. How did it come to this?`);
			return;
		}
		if (part) {
			MPP.chat.send(`${msg.p.name} friendzones ${MPP.client.ppl[part.id].name}. They will cry for days on end.`);
		} else {
			MPP.chat.send(`The user \'${argcat}\' was not found. Try using part of their username.`);
		}
	}
});
MPP.client.on('participant added', function(part) {
	if(Aclass.includes(part._id)) {
		MPP.chat.send(`${part.name} ${WelcomeArray[Math.floor(Math.random()*WelcomeArray.length)]} Let\'s welcome them.`);
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/lennylist') {
		if(isModers) {
			MPP.chat.send('Lennys: /lenny, /guns, /bear2, /army, /hugs, /magic, /sneak, /table, /table2, /hearteyes, /trump, /butterfly, /wink, /blush, /smile, /smile2, /smile3, /smile4, /dance');
		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/lenny') {
		if(isModers) {
			MPP.chat.send('( ͡° ͜ʖ ͡°)');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/guns') {
		if(isModers) {
			MPP.chat.send('̿̿ ̿̿ ̿̿ ̿\'̿\'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/bear2') {
		if(isModers) {
			MPP.chat.send('ʕ•ᴥ•ʔ');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/army') {
		if(isModers) {
			MPP.chat.send('( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/hug2') {
		if(isModers) {
			MPP.chat.send('(づ｡◕‿‿◕｡)づ');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/magic') {
		if(isModers) {
			MPP.chat.send('(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/sneak') {
		if(isModers) {
			MPP.chat.send('┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/table') {
		if(isModers) {
			MPP.chat.send('(ノಠ益ಠ)ノ彡┻━┻');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/hearteyes') {
		if(isModers) {
			MPP.chat.send('♥‿♥');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/table2') {
		if(isModers) {
			MPP.chat.send('┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/smile') {
		if(isModers) {
			MPP.chat.send('｡◕‿‿◕｡');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/smile2') {
		if(isModers) {
			MPP.chat.send('｡◕‿◕｡');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/trump') {
		if(isModers) {
			MPP.chat.send('ლ,ᔑ•ﺪ͟͠•ᔐ.ლ');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/butterfly') {
		if(isModers) {
			MPP.chat.send('Ƹ̵̡Ӝ̵̨̄Ʒ');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/wink') {
		if(isModers) {
			MPP.chat.send('ಠ‿↼');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/blush') {
		if(isModers) {
			MPP.chat.send('(▰˘◡˘▰)');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/smile3') {
		if(isModers) {
			MPP.chat.send('^̮^');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/smile4') {
		if(isModers) {
			MPP.chat.send('(ᵔᴥᵔ)');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/dance') {
		if(isModers) {
			MPP.chat.send('(づ￣ ³￣)づ');

		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/sayart') {
		if(isModers) {
			MPP.chat.send('\u00D7,.\u00B7\u00B4\u00A8\'\u00B0\u00F7\u00B7..\u00A7 '+ input +' \u00A7.\u00B7\u00B4\u00A8\'\u00B0\u00F7\u00B7..\u00D7');
		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin ');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd ==  '/bear') {
		if(isModers) {
			MPP.chat.send('\u2500\u2500\u2500\u2584\u2580\u2580\u2580\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2580\u2580\u2580\u2584\u2500\u2500\u2500');
			MPP.chat.send('\u2500\u2500\u2500\u2588\u2592\u2592\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2592\u2592\u2588\u2500\u2500\u2500');
			MPP.chat.send('\u2500\u2500\u2500\u2500\u2588\u2591\u2591\u2588\u2591\u2591\u2591\u2591\u2591\u2588\u2591\u2591\u2588\u2500\u2500\u2500\u2500');
			MPP.chat.send('\u2500\u2584\u2584\u2500\u2500\u2588\u2591\u2591\u2591\u2580\u2588\u2580\u2591\u2591\u2591\u2588\u2500\u2500\u2584\u2584\u2500');
			MPP.chat.send('\u2588\u2591\u2591\u2588\u2500\u2580\u2584\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2584\u2580\u2500\u2588\u2591\u2591\u2588');
		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin ');
		}
	}
});
MPP.client.on('a', function (msg) {

	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd ==  '/tank') {
		if(isModers) {
			MPP.chat.send('\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588 ]\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2583 ');
			MPP.chat.send('\u2582\u2584\u2585\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2585\u2584\u2583\u2582 ');
			MPP.chat.send('I\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588].');
			MPP.chat.send('\u25E5\u2299\u25B2\u2299\u25B2\u2299\u25B2\u2299\u25B2\u2299\u25B2\u2299\u25B2\u2299\u25E4 ');
		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin ');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd ==  '/sunglasses') {
		if(isModers) {
			MPP.chat.send('\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584');
			MPP.chat.send('\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2580\u2588\u2584\u2580\u2584\u2580\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2580\u2588\u2584\u2580\u2584\u2580\u2588\u2588\u2588\u2588\u2588\u2588  ');
			MPP.chat.send('\u2591\u2591\u2591\u2591 \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2580\u2588\u2584\u2588\u2584\u2588\u2588\u2588\u2580\u2591\u2591\u2591 \u2580\u2588\u2584\u2588\u2584\u2588\u2588\u2588');
		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin ');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd ==  '/hateme') {
		if(isModers) {
			MPP.chat.send('\u2554\u2557');
			MPP.chat.send('\u2551\u255A\u2566\u2550\u2563\u255A\u2566\u2550\u2557\u2554\u2550\u2550\u2566\u2550\u2557');
			MPP.chat.send('\u2551\u2551\u2551\u256C\u2551\u2554\u2563\u2569\u2563\u2551\u2551\u2551\u2551\u2569\u2563');
			MPP.chat.send('\u255A\u2569\u2569\u2569\u2569\u2550\u2569\u2550\u255D\u255A\u2569\u2569\u2569\u2550\u255D');
		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin ');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd ==  '/piano') {
		if(isModers) {
			MPP.chat.send('\u2551\u2591\u2588\u2591\u2588\u2591\u2551\u2591\u2588\u2591\u2588\u2591\u2588\u2591\u2551\u2591\u2588\u2591\u2588\u2591\u2551');
			MPP.chat.send('\u2551\u2591\u2588\u2591\u2588\u2591\u2551\u2591\u2588\u2591\u2588\u2591\u2588\u2591\u2551\u2591\u2588\u2591\u2588\u2591\u2551');
			MPP.chat.send('\u2551\u2591\u2551\u2591\u2551\u2591\u2551\u2591\u2551\u2591\u2551\u2591\u2551\u2591\u2551\u2591\u2551\u2591\u2551\u2591\u2551');
		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin ');
		}
	}
});

MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == '/artlist') {
		if(isModers) {
			MPP.chat.send('Type for text art: /piano, /hateme, /sunglasses, /tank, /bear, /cat, /gun, /music, /lennylist');
			MPP.chat.send('Type for text art, input need: /love, /sayart');
		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd ==  '/cat') {
		if(isModers) {
			MPP.chat.send('\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2584\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2584');
			MPP.chat.send('\u2500\u2500\u2500\u2500\u2500\u2584\u2588\u2591\u2591\u2580\u2580\u2580\u2580\u2580\u2591\u2591\u2588\u2584');
			MPP.chat.send('\u2500\u2584\u2584\u2500\u2500\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2500\u2500\u2584\u2584');
			MPP.chat.send('\u2588\u2584\u2584\u2588\u2500\u2588\u2591\u2591\u2580\u2591\u2591\u252C\u2591\u2591\u2580\u2591\u2591\u2588\u2500\u2588\u2584\u2584\u2588');
		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd ==  '/love') {
		if(isModers) {
			MPP.chat.send('\u2554\u2550\u2550\u2557');
			MPP.chat.send('\u255A\u2557\u2554\u255D');
			MPP.chat.send('\u2554\u255D(\u00AF`v\u00B4\u00AF)');
			MPP.chat.send('\u255A\u2550\u2550`.\u00B8.['+ input +']');
		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
MPP.client.on('a', function (msg) {
	var isModers = (Moders.indexOf(msg.p._id) !== -1);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd ==  '/gun') {
		if(isModers) {
			MPP.chat.send('\u2591\u2584\u258C\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2584');
			MPP.chat.send('\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2584');
			MPP.chat.send('\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2580\u2590\u2588\u2588\u2588\u2588');
			MPP.chat.send('\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2590\u2588\u2588\u258C');
		} else {
			MPP.chat.send('You\'re not an Admin. To learn more type /admin');
		}
	}
});
//randoms with a shit format
MPP.client.on('a', (m) => m.a.toLowerCase() === "/fact" ? MPP.chat.send(['Amelia Earhart and Eleanor Roosevelt once sneaked out of a White House event, commandeered an airplane, and went on a joyride to Baltimore.',
'If you have the feeling youÃ¢â‚¬â„¢ve experienced an event before in real life, call it \u0064\u0065\u00cc\u006a\u0061\u00cc \u0076\u0075. If you feel like you\'ve previously experienced an event in a dream instead, thereÃ¢â‚¬â„¢s a different term for it: d\u00E9j\u00E0 r\u00EAv\u00E9.',
'During Prohibition, moonshiners would wear "cow shoes." The fancy footwear left hoofprints instead of footprints, helping distillers and smugglers evade police.',
'Since founding the Imagination Library in 1995, Dolly Parton has donated 100 million books to children.',
'The 100 folds in a chef\'s toque are said to represent 100 ways to cook an egg.',
'In curling, good sportsmanship and politeness are essential. Congratulating opponents and abstaining from trash talk are part of what\'s known as the Spirit of Curling.',
'In 1974, the Journal of Applied Behavior Analysis published a paper titled "The Unsuccessful Self-Treatment of a Case of \'Writer\'s Block.\'" It contained a total of zero words.',
'Guinness estimates that 93,000 liters of beer are lost in facial hair each year in the UK alone.',
'George Washington served an eggnog-like drink to visitors at Mount Vernon. His recipe included rye whiskey, rum, and sherry.',
'Some cats are allergic to humans.',
'Queen Elizabeth II is a trained mechanic.',
'Volvo gave away the 1962 patent for their revolutionary three-point seat belt for free, in order to save lives.',
'Tsundoku is the act of acquiring books and not reading them.',
'Ravens in captivity can learn to talk better than parrots.',
'Bela Lugosi was buried in full Dracula costume, cape and all.',
'Central Park\'s lampposts contain a set of four numbers that can help you navigate. The first two tell you the nearest street, and the next two tell you whether you\'re closer to the east or west side of the park (even numbers signal east, odd signals west).',
'A teacher wrote of a young Roald Dahl on his school report card: "I have never met anybody who so persistently writes words meaning the exact opposite of what is intended."',
'At least 10 Blockbuster stores are still operating in the U.S.',
'Blood donors in Sweden receive a thank you text when their blood is used.',
'Kea parrots warble together when they\'re in a good mood, making them the first known non-mammal species to communicate with infectious laughter.',
'Long before rap battles, there was "flyting": the exchange of witty, insulting verses. The verbal throwdowns were popular in England and Scotland from the 5th to 16th centuries.',
'Melbourne gave some of its trees email addresses so residents could report problems. Instead, the trees received love letters.',
'An estimated 1 million dogs in the U.S. have been named primary beneficiary in their owners\' wills.',
'At Petrified Forest National Park, visitors sometimes break the rules (and the law) by taking rocks home with them. According to rangers, they often end up returning the stolen goods in the mail along with an apology note.',
'The Russians showed up 12 days late to the 1908 Olympics in London because they were using the Julian calendar instead of the Gregorian calendar.',
'Maya Angelou was the first black female streetcar conductor in San Francisco.',
'In Japan, letting a sumo wrestler make your baby cry is considered good luck.',
'J.K. Simmons has been the voice of the Yellow Peanut M&M since the late 1990s.',
'Count von Count\'s love of numbers isn\'t just a quirky character trait in traditional vampire folklore, the bloodsuckers have arithmomania, a compulsion to count.',
'In Great Britain and Japan, black cats are perceived as auspicious. In the English Midlands, new brides are given black cats to bless their marriage, and the Japanese believe that black cats are good luck particularly for single women.',
'Portland was named by a coin flip. Had the coin landed the other way, the city would be Boston, Oregon.',
'During World War I, a Canadian soldier made a black bear his pet and named her Winnipeg. "Winnie" was later a resident of the London Zoological Gardens where she was an adored attraction, especially to a boy named Christopher Robin, son of author A.A. Milne. The boy even named his teddy bear after her.',
'Sleep literally cleans your brain. During slumber, more cerebrospinal fluid flushes through the brain to wash away harmful proteins and toxins that build up during the day.',
'Neil Armstrong\'s astronaut application arrived a week past the deadline. A friend slipped the tardy form in with the others.',
'Due to the restaurant\'s reputation for staying open in extreme weather, the so-called "Waffle House Index" is informally used by FEMA to gauge storm severity.',
'The first sales pitch for the Nerf ball was Nerf: You can\'t hurt babies or old people!',
'The manchineel tree is nicknamed the "Tree of Death" for good reason: Touching it can leave chemical burns on your skin, its fruit is toxic, and its bark when burned can cause blindness.',
'If drivers adhere to the 45 mph speed limit on a stretch of Route 66 in New Mexico, the road\'s rumble strips will play a rendition of "America the Beautiful."',
'Russian cosmonauts used to pack a shotgun in case they landed in Siberia and had to fend off bears.',
'Space has a distinct smell: a bouquet of diesel fumes, gunpowder, and barbecue. The aroma is mostly produced by dying stars.',
'Before settling on the Seven Dwarfs we know today, Disney considered Chesty, Tubby, Burpy, Deafy, Hickey, Wheezy, and Awful.',
'The annual number of worldwide shark bites is 10 times less than the number of people bitten by other people in New York.',
'In 1997 a Louisville woman left actor Charles Bronson all of her money in a handwritten will, a total of about $300,000. She\'d never met him; she was just a fan.',
'Carly Simon\'s dad is the Simon of Simon and Schuster. He co-founded the company.',
'Ben & Jerry learned how to make ice cream by taking a $5 correspondence course offered by Penn State. (They decided to split one course.)',
'After an online vote in 2011, Toyota announced that the official plural of Prius was Prii.',
'At the 1905 wedding of Franklin and Eleanor Roosevelt, President Teddy Roosevelt gave away the bride.',
'Tootsie Rolls were added to soldiers\' rations in World War II for their durability in all weather conditions.',
'When Canada\'s Northwest Territories considered renaming itself in the 1990s, one name that gained support was "Bob."',
'After OutKast sang "Shake it like a Polaroid picture," Polaroid released a statement: "Shaking or waving can actually damage the image."',
'Marie Curie remains the only person to earn Nobel prizes in two different sciences.',
'The Starry Night depicts Vincent van Gogh\'s view from the Saint-Paul de Mausole asylum.',
'The ampersand symbol is formed from the letters in et‚ the Latin word for "and."',
'Army ants that misinterpret the scent trails left by other ants will sometimes break from the crowd and march in circles. If enough ants join, they can form massive "death spirals."',
'A solar eclipse helped end a six-year war in 585 BCE. When the sky suddenly darkened during a battle between the Lydians and the Medes in modern Turkey, soldiers took it as a sign to cease fighting.',
'Wendy\'s founder Dave Thomas dropped out of high school but earned his GED in 1993. His GED class voted him Most Likely to Succeed.',
'Both John Adams and Thomas Jefferson died on July 4, 1826, exactly 50 years after the adoption of the Declaration of Independence.',
'Dogs are capable of understanding up to 250 words and gestures. The average dog is as intelligent as a two-year-old child.',
'Bubbles keep your bath water warmer longer.',
'Scientists have found evidence of take-out restaurants in the remains of Pompeii.',
'Fried chicken was brought to America by Scottish immigrants.',
'Peter Durand patented the tin can in 1810. Ezra Warner patented a can opener in 1858. In between, people used chisels and hammers.',
'There are 71 streets in Atlanta with "Peachtree" in their name.',
'Goats have rectangular pupils.',
'The bend in a flamingo\'s leg isn\'t a knee-it\'s an ankle.',
'In 1946, Boston owner Walter Brown chose the nickname Celtics over Whirlwinds, Olympians, and Unicorns.',
'After It\'s the Great Pumpkin, Charlie Brown aired, Charles Schulz was overwhelmed with candy shipments sent from kids who were concerned for Charlie, who got rocks instead of treats in his Halloween sack.',
'One of the world\'s largest stockpiles of nuclear weapons in a U.S. Navy base near Seattle is partially defended by trained dolphins.',
'It\'s illegal for supermarkets in France to waste food. Supermarkets must either compost it or donate unsold or nearly expired goods to charity.',
'Fredric Baur invented the Pringles can. When he passed away in 2008, his ashes were buried in one.',
'A new baby can cost new parents 750 hours of sleep in the first year.',
'In 1965, a Senate subcommittee predicted that by 2000, Americans would only be working 20 hours a week with seven weeks vacation.',
'For one day in 1998, Topeka, Kansas, renamed itself "ToPikachu" to mark Pokemon\'s U.S. debut.',
'Truman Capote said he was the only person who\'d met John F. Kennedy, Bobby Kennedy, Lee Harvey Oswald, and Sirhan Sirhan.',
'Susan B. Anthony was fined $100 for voting in the 1872 election. She never paid the fine.',
'Canned pumpkin isn\'t actually pumpkin. Even purees that advertise as "100 percent pumpkin" are actually made of a range of different winter squashes.',
'When Gene Wilder accepted the role of Willy Wonka, he had one condition: In his first appearance, Wilder wanted Wonka to limp toward the crowd with a cane in hand before falling into a perfect somersault and jumping back up. The reason? Because from that time on, no one will know if I\'m lying or telling the truth.',
'Dr. Seuss said he expected to spend "a week or so" writing The Cat in the Hat. It actually took a year and a half.',
'The Reese in Reese\'s Peanut Butter Cups is Harry Burnett Reese, a former Hershey employee who created his famous candy in the 1920s.',
'The plural of cul-de-sac is culs-de-sac.',
'Apollo 17 astronaut Harrison Schmitt was allergic to moon dust.',
'At the Gettysburg reunion in 1913, two men purchased a hatchet, walked to the site where their regiments had fought, and buried it.',
'"Bloodcurdling" isn\'t just an expression: Research shows that watching horror movies can increase a certain clotting protein in our bloodstreams.',
'An episode of Peppa Pig was pulled from Australian television for teaching children not to fear spiders.',
'A group of pugs is called a grumble.',
'Before he wrote Goosebumps, R.L. Stine wrote the jokes for Bazooka Joe wrappers.',
'In 1998, the U.S. Army tried developing a telepathic ray gun "where words could be transmitted to be heard like the spoken word, except that it could only be heard within a personâ€™s head."',
'In 1967, the Nigerian Civil War ground to a halt for two days because both sides wanted to watch PelÃ© play in an exhibition soccer match.',
'Winston Churchill\'s mother was born in Brooklyn.',
'Jim Cummings is the voice of Winnie the Pooh. He calls sick kids in hospitals and chats with them in character.',
'Before Google launched Gmail, "G-Mail" was the name of a free email service offered by Garfield\'s website.',
'Before the Nazis invaded Paris, H.A. and Margret Rey fled on bicycles. They were carrying the manuscript for Curious George.',
'In colonial America, lobster wasn\'t exactly a delicacy. It was so cheap and plentiful it was often served to prisoners.',
'Crayola means "oily chalk." The name combines craie (French for "chalk") and ola (short for "oleaginous," or "oily").',
'Truman Show Delusion is a mental condition marked by a patient\'s belief that he or she is the star of an imaginary reality show.',
'Cookie Monster is not changing his name. In a 2012 episode he said, "We\'ve got to stop this Veggie Monster rumor before me reputation ruined."',
'Google\'s founders were willing to sell to Excite for under $1 million in 1999â€”but Excite turned them down.',
'The medical term for ice cream headaches is sphenopalatine ganglioneuralgia.',
'lthough Dr. James Naismith invented basketball, he\'s the only Kansas Jayhawks basketball coach with a losing record.',
'Wisconsin is the Badger State because the area\'s lead miners used to spend winters in tunnels burrowed into hills. Like badgers.',
'In 1999, the U.S. government paid the Zapruder family $16 million for the film of JFK\'s assassination.',
'Before he became president, Abraham Lincoln was wrestling champion of his county. He fought in nearly 300 matches and lost only one.',
'How many licks does it take to get to the center of a Tootsie Pop? The world may never know. But on average, a Licking Machine made at Purdue needed 364.',
'Barcelona is home to hundreds of playgrounds for seniors. The spaces are meant to promote fitness and combat loneliness in elderly citizens.',
'In Switzerland, it\'s illegal to own only one guinea pig.',
'After leaving office, Ronald Reagan was offered the role of Hill Valley\'s mayor in Back to the Future III.',
'Foreign Accent Syndrome is a rare side effect of brain trauma. Patients speak their native language in a foreign accent.',
'Queen Elizabeth II has had over 30 corgis in her lifetime.',
'Relative to their bodies, Chihuahuas have the biggest brain in the dog world.',
'The "mystery" flavor of Dum Dums is a combination of the end of one batch of candy and the beginning of another.',
'A banana is a berry.',
'In 1971, a Dallas man named Mariano Martinez invented the frozen margarita machine. The 26-year-old was inspired by the Slurpee machine at 7-Eleven.',
'In 2016, a rogue bloodhound named Ludvine joined a half-marathon in Alabama. She ran the entire 13.1 miles and finished in 7th place.',
'The Library of Congress regularly receives requests for books that don\'t exist. The most common is the President\'s Book of Secrets, from the 2007 movie, National Treasure: Book of Secrets.',
'In 2014, Tinder made its first match on the continent of Antarctica. Not surprisingly, both parties involved were research scientists.',
'When times get tough, elephants will comfort each other by stroking loved ones with their trunks and emitting small chirps.',
'A double rainbow occurs when sunlight is reflected twice inside a raindrop. If you look closely, you can see that the colors of the secondary rainbow appear in reverse order.',
'There\'s a Nikola Tesla statue in Palo Alto that provides free Wi-Fi.',
'The Mobile Phone Throwing World Championships are held in Finland. One winner (not pictured) said he prepared for the event by "mainly drinking."',
'In the \'50s, Marilyn Monroe promised nightclub owner Charlie Morrison she\'d be in the front row every night if he booked Ella Fitzgerald. He agreed, and she was true to her word. "After that, I never had to play a small jazz club again," Fitzgerald said. "She was an unusual woman little ahead of her times. And she didn\'t know it."',
'Frank Sinatra has three stars on the Hollywood Walk of Fame: one for film, one for music, and one for television.',
'One April day in 1930, the BBC reported, "There is no news." Instead they played piano music.',
'Continental plates drift as fast as fingernails grow.',
'Elvis Presley\'s manager sold "I Hate Elvis" badges as a way to make money off of people who weren\'t buying his merchandise.',
'LEGO has a temperature-controlled underground vault in Denmark with nearly every set they\'ve ever made.',
'A reindeer\'s eyes change color through the seasons. Theyâ€™re gold during the summer and blue in the winter.',
'An avocado never ripens on the tree, so farmers can use trees as storage and keep avocados fresh for up to seven months.',
'At the Humane Society of Missouri, kid volunteers comfort anxious shelter dogs by reading to them.',
'In The Empire Strikes Back, an extra can be seen running with what appears to be an ice cream maker. The character became legendary among fans, and was eventually given a name (Willrow Hood) and a backstory.',
'Salvador Dali avoided paying restaurant tabs by using checks. He would draw on the back as the waiter watched, knowing no one would ever cash the art.',
'China owns all of the pandas in the world. They rent them out for about $1 million a year.',
'In season two of The Joy of Painting, Bob Ross created a monochromatic landscape for a viewer who was worried that his color blindness would prevent him from being able to paint.',
'Bones found at Seymour Island indicate that at one time, 37 to 40 million years ago, penguins stood at a formidable 6 feet tall and weighed 250 pounds.'][Math.floor(Math.random()*133)]) : '' );

MPP.client.on('a', (m) => m.a.toLowerCase() === "/quote" ? MPP.chat.send(['"Fuck my ass!"- Raven',
'"Men make their own history, but they do not make it as they please." - Karl Marx.',
'"Victory goes to the player who makes the next-to-last mistake."- Chessmaster Savielly Grigorievitch Tartakower',
'"Happiness equals reality minus expectations." - Tom Magliozzi',
'"Black holes are where God divided by zero." - Steven Wright',
'"Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth."- Sherlock Holmes',
'"I love Mickey Mouse more than any woman I have ever known." - Walt Disney',
'"Get busy living or get busy dying." -Stephen King',
'"Education is the most powerful weapon which you can use to change the world." ― Nelson Mandela',
'"Don\'t cry because it\'s over, smile because it happened." ― Dr. Seuss',
'"I live by Music on, world off. Music relates to the soul." - Raven',
'"You have NO idea how fast my heartbeats when I see you." - Unknown',
'"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best."― Marilyn Monroe',
'"Be yourself; everyone else is already taken." ― Oscar Wilde',
'"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe."― Albert Einstein',
'"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind." ― Bernard M. Baruch',
'"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams." ― Dr. Seuss',
'"In three words I can sum up everything I\'ve learned about life: it goes on." ― Robert Frost',
'"Friendship is born at the moment when one man says to another "What! You too? I thought that no one but myself." ― C.S. Lewis',
'"No one can make you feel inferior without your consent." ― Eleanor Roosevelt',
'"A friend is someone who knows all about you and still loves you." ― Elbert Hubbard',
'"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." ― Maya Angelou',
'"Always forgive your enemies; nothing annoys them so much." ― Oscar Wilde',
'"Live as if you were to die tomorrow. Learn as if you were to live forever." ― Mahatma Gandhi',
'"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that." ― Martin Luther King Jr.',
'"Without music, life would be a mistake." ― Friedrich Nietzsche',
'"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." ― Ralph Waldo Emerson',
'"We accept the love we think we deserve." ― Stephen Chbosky',
'"Insanity is doing the same thing, over and over again, but expecting different results." ― Narcotics Anonymous',
'"I believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together." ― Marilyn Monroe',
'"Deep into that darkness peering, long I stood there, wondering, fearing, doubting, dreaming dreams no mortal ever dared to dream before." - Edgar Allan Poe',
'"Your deeds are your monuments." - An Egyptian tomb inscription',
'"The Way Get Started Is To Quit Talking And Begin Doing." - Walt Disney',
'"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty." - Winston Churchill',
'"Don\'t let yesterday take up too much of today." - Will Rogers',
'"You learn more from failure than from success. Don\'t let it stop you. Failure builds character." - Unknown',
'"It\'s not whether you get knocked down, It\'s whether you get up." – Vince Lombardi',
'"If You Are Working On Something That You Really Care About, You Don\'t Have To Be Pushed. The Vision Pulls You."- Steve Jobs',
'"People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do."- Rob Siltanen',
'"Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough."- Og Mandino',
'"Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That\'s The Classic Entrepreneur."- Mohnish Pabrai',
'"We May Encounter Many Defeats But We Must Not Be Defeated."- Maya Angelou',
'"Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do."- Johann Wolfgang Von Goethe',
'"Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?"- Brian Tracy',
'"We Generate Fears While We Sit. We Overcome Them By Action."- Dr. Henry Link',
'"Whether You Think You Can Or Think You Can\'t, You\'re Right."- Henry Ford',
'"Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing."- Helen Keller',
'"The Man Who Has Confidence In Himself Gains The Confidence Of Others."- Hasidic Proverb',
'"The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today."- Franklin D. Roosevelt',
'"Creativity Is Intelligence Having Fun."- Albert Einstein',
'"What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time."- Don Zimmer',
'"Do What You Can With All You Have, Wherever You Are."- Theodore Roosevelt',
'"Develop An Attitude Of Gratitude. Say Thank You To Everyone You Meet For Everything They Do For You."- Brian Tracy',
'"You Are Never Too Old To Set Another Goal Or To Dream A New Dream."- C.S. Lewis',
'"To See What Is Right And Not Do It Is A Lack Of Courage."- Confucious',
'"Reading Is To The Mind, As Exercise Is To The Body."- Brian Tracy',
'"Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality."- Brian Tracy',
'"The Future Belongs To The Competent. Get Good, Get Better, Be The Best!"- Success Quote By Brian Tracy',
'"For Every Reason It\'s Not Possible, There Are Hundreds Of People Who Have Faced The Same Circumstances And Succeeded." – Jack Canfield',
'"Things Work Out Best For Those Who Make The Best Of How Things Work Out." – Positive Quote By John Wooden',
'"A Room Without Books Is Like A Body Without A Soul." – Marcus Tullius Cicero',
'"I Think Goals Should Never Be Easy, They Should Force You To Work, Even If They Are Uncomfortable At The Time." – Michael Phelps',
'"One Of The Lessons That I Grew Up With Was To Always Stay True To Yourself And Never Let What Somebody Else Says Distract You From Your Goals." Michelle Obama',
'"Today\'s Accomplishments Were Yesterday\'s Impossibilities." – Robert H. Schuller',
'"The Only Way To Do Great Work Is To Love What You Do. If You Haven\'t Found It Yet, Keep Looking. Don\'t Settle." – Steve Jobs',
'"You Don\'t Have To Be Great To Start, But You Have To Start To Be Great." – Zig Ziglar',
'"A Clear Vision, Backed By Definite Plans, Gives You A Tremendous Feeling Of Confidence And Personal Power." – Brian Tracy',
'"There Are No Limits To What You Can Accomplish, Except The Limits You Place On Your Own Thinking." – Brian Tracy',
'"You are today where your thoughts have brought you; you will be tomorrow where your thoughts take you." - James Allen',
'"You can\'t depend on your eyes when your imagination is out of focus." - Mark Twain',
'"Stop worrying about the potholes in the road and enjoy the journey." - Babs Hoffman',
'"Our greatest glory is not in never falling but in rising every time we fall." - Confucius',
'"A man is literally what he thinks." - James Allen',
'"A danger foreseen is half avoided." - Thomas Fuller',
'"Finding a way to live the simple life today is man\'s most complicated task." - Henry A. Courtney',
'"Yesterday is but today\'s memory, tomorrow is today\'s dream." - Kahlil Gibran',
'"In the middle of difficulty lies opportunity." - Albert Einstein',
'"Everyone needs to be valued. Everyone has the potential to give something back." - Diana Princess of Wales',
'"Things do not happen. Things are made to happen." - John F Kennedy',
'"Life is like riding a bicycle. To keep your balance, you must keep moving." - Albert Einstein',
'"What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds." -Wayne Dyer',
'"Be kind, for everyone you meet is fighting a hard battle." - Plato',
'"Being challenged in life is inevitable, being defeated is optional." - Roger Crawford',
'"Not everything that can be counted counts, and not everything that counts can be counted." - Albert Einstein',
'"You cannot perform in a manner inconsistent with the way you see yourself." - Zig Ziglar',
'"No pressure, no diamonds." - Mary Case',
'"Our chief want is someone who will inspire us to be what we know we could be." - Ralph Waldo Emerson',
'"Don\'t limit yourself. Many people limit themselves to what they think they can do." - Mary Kay Ash',
'"If you want to achieve widespread impact and lasting value, be bold." - Howard Schultz',
'"If you wish to know the mind of a man, listen to his words." - Johann Wolfgang von Goethe',
'"Never stand begging for that which you have the power to earn." - Miguel de Cervantes',
'"Know yourself and you will win all battles."  - Sun Tzu',
'"For every minute you are angry you lose sixty seconds of happiness." - Ralph Waldo Emerson',
'"There is no such thing in anyone\'s life as an unimportant day." - Alexander Woollcott',
'"An expert is a man who has made all the mistakes which can be made, in a narrow field." - Niels Bohr',
'"As soon as you trust yourself, you will know how to live." - Johann Wolfgang von Goethe',
'"To conquer fear is the beginning of wisdom." - Bertrand Russell',
'"Striving for excellence motivates you; striving for perfection is demoralizing." - Harriet Braiker',
'"Whatever you believe with feeling becomes your reality." - Brian Tracy',
'"We are all in the gutter, but some of us are looking at the stars." - Oscar Wilde',
'"Management is doing things right; leadership is doing the right things." - Peter Drucker',
'"It is not enough to be busy. So are the ants. The question is: What are we busy about?" - Henry David Thoreau',
'"Only he who can see the invisible can do the impossible." - Frank L. Gaines',
'"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it." - Henry Ford',
'"If you would be wealthy, think of saving as well as getting." - Benjamin Franklin',
'"Be like a postage stamp, stick to one thing until you get there." - Josh Billings',
'"Everyday, give yourself a good mental shampoo." - Dr. Sara Jordan',
'"Live out of your imagination, not your history." - Stephen Covey',
'"Life\'s Tragedy is that we get old too soon and wise too late." - Benjamin Franklin',
'"If at first you don\'t succeed, try, try, again. Then quit. There\'s no use being a damn fool about it." - W.C.Fields.',
'"If you are working on something exciting that you really care about, you don\'t have to be pushed. The vision pulls you." - Steve Jobs',
'"He who enjoys doing and enjoys what he has done is happy." - Johann Wolfgang von Goethe',
'"Opportunities multiply as they are seized." - Sun Tzu',
'"The human mind treats a new idea the same way the body treats a strange protein; it rejects it." - P. B. Medawar',
'"The difference between the impossible and the possible lies in a person\'s determination." - Tommy Lasorda',
'"He who is not courageous enough to take risks will accomplish nothing in life." - Muhammad Ali',
'"High achievement always takes place in the framework of high expectation." - Charles F. Kettering',
'"There is only one thing that makes a dream impossible to achieve: the fear of failure." - Paulo Coelho',
'"There is real magic in enthusiasm. It spells the difference between mediocrity and accomplishment." - Norman Vincent Peale',
'"Doing your best is more important than being your best." - Shannon Miller',
'"Sometimes it is not enough to do our best; we must do what is required." - Winston Churchill',
'"Do not let what you cannot do interfere with what you can do." - John Wooden',
'"A ship is safe in harbor, but that\'s not what ships are for." - William Shedd',
'"When we can no longer change a situation, we are challenged to change ourselves." - Viktor Frankl',
'"Believe that life is worth living and your belief will help create the fact." - William James',
'"Minds are like parachutes. They only function when they are open." - James Dewar',
'"Better to do something imperfectly than to do nothing flawlessly." - Dr. Robert Schuller',
'"Get your ideas on paper and study them. Do not let them go to waste!" - Les Brown',
'"If you hear a voice within you say \"you cannot paint,\" then by all means paint, and that voice will be silenced." - Vincent Van Gogh',
'"Even if you\'re on the right track, you\'ll get run over if you just sit there." - Will Rogers',
'"The greatest weapon against stress is our ability to choose one thought over another." - William James',
'"Happiness is not something ready-made. It comes from your own actions." - Dalai Lama',
'"The time is always right to do what is right. - Martin Luther King Jr.',
'"Be who you are and say what you feel because those who mind don\'t matter and those who matter don\'t mind." - Dr Seuss',
'"Happiness is not a station you arrive at, but a manner of travelling." - Margaret B. Runbeck',
'"If you take responsibility for yourself you will develop a hunger to accomplish your dreams." - Les Brown',
'"The important thing is not to stop questioning." - Albert Einstein',
'"It is our choices...that show what we truly are, far more than our abilities." - J. K. Rowling.',
'"There are no secrets to success. It is the result of preparation, hard work and learning from failure." - Colin L. Powell',
'"The best is yet to be." - Robert Browning',
'"The tragedy of life is not that it ends so soon, but that we wait so long to begin it." - W.M. Lewis',
'"The most delightful surprise in life is to suddenly recognise your own worth." - Maxwell Maltz',
'"We build too many walls and not enough bridges." - Isaac Newton',
'"If your plan isn\'t working, adjust your plan. Never give up." - Matt Martin',
'"Trust yourself. You know more than you think you do." - Benjamin Spock',
'"There is no greater agony than bearing an untold story inside you." - Maya Angelou',
'"Will you look back on life and say, I wish I had, or I\'m glad I did?" - Zig Ziglar',
'"Always forgive your enemies; nothing annoys them so much." - Oscar Wilde',
'"It does not matter how slowly you go as long as you do not stop." - Confucius',
'"The human mind will not be confined to any limits." - Johann Wolfgang von Goethe',
'"Go as far as you can see; when you get there you\'ll be able to see farther." - Thomas Carlyle'][Math.floor(Math.random()*151)]) : '' );

MPP.client.on('a', (m) => m.a.toLowerCase() === "/song" ? MPP.chat.send(['Kuchizuke Diamond - Yamada-kun and the seven witches OP [piano]| Link - https://www.youtube.com/watch?v=P6C3szts5C4',
'Everyday world - Oregairu S2 ED| Link - https://www.youtube.com/watch?v=NX8egPe6Ulc',
'Bios - Guilty Crown Soundtrack [Piano]| Link - https://www.youtube.com/watch?v=DcjUOdeq6G8',
'Euterpe - Guilty Crown OST [Piano]| Link - https://www.youtube.com/watch?v=_8UZMD3A2rs',
'Blue Bird - Naruto Shippuuden OP3 [piano]| Link - https://www.youtube.com/watch?v=FTrJ-J_lsr0',
'Blonde Redhead - For the Damaged Coda| Link - https://youtu.be/4Js-XbNj6Tk',
'Drowning (feat. Kodak Black)| Link - https://youtu.be/YAaMRdYe9gY',
'DBangz - Thick Niggas and Anime Tiddies| Link - https://youtu.be/K9jdIawyCJ0',
'Imagine Dragons - Radioactive| Link - https://youtu.be/ktvTqknDobU',
'Imagine Dragons - Believer| Link - https://youtu.be/7wtfhZwyrcc',
'Maroon 5 - Animals| Link - https://youtu.be/qpgTC9MDx1o',
'Maroon 5 - Payphone| Link - https://youtu.be/KRaWnd3LJfs',
'Maroon 5 - She Will Be Loved| Link - https://youtu.be/nIjVuRTm-dc',
'Maroon 5 - This Love| Link - https://youtu.be/XPpTgCho5ZA',
'Maroon 5 - Wake Up Call| Link - https://youtu.be/dkQ0OJ5Byls',
'Maroon 5 - Makes Me Wonder| Link - https://youtu.be/sAebYQgy4n4',
'Maroon 5 - One More Night| Link - https://youtu.be/fwK7ggA3-bU',
'Maroon 5 - Won\'t Go Home Without You| Link - https://youtu.be/VlMEGBsw6j8',
'Maroon 5 - Goodnight Goodnight LInk - https://youtu.be/uNSBq6hvU1s',
'#NewCharlotte| Link - https://youtu.be/yn7bnHIom4s',
'arctic monkeys - knee socks| Link - https://youtu.be/n2ZSH0I83RM',
'Brave Shine - Fate/stay night UBW OP2 [piano]| Link - https://youtu.be/R9xZGpupgLw',
'Trance - 009 Sound System Dreamscape| Link - https://youtu.be/TKfS5zVfGBc',
'Jericho - Stiff Arm| Link - https://youtu.be/6_Ak1MjxpOE',
'Eminem - As the World Turns| Link - https://youtu.be/I_-xTRrSan0',
'MACINTOSH PLUS - \u30EA\u30B5\u30D5\u30E9\u30F3\u30AF420 / \u73FE\u4EE3\u306E\u30B3\u30F3\u30D4\u30E5| Link - https://youtu.be/cU8HrO7XuiE',
'Kiseijuu OP - Let Me Hear| Link - https://youtu.be/hZBs9RlgFfU',
'Earth, Wind & Fire - September| Link - https://youtu.be/Gs069dndIYk',
'Electric Light Orchestra - Mr. Blue Sky| Link - https://youtu.be/aQUlA8Hcv4s',
'timmies - tell me why i\'m waiting| Link - https://youtu.be/PNInRDWcTR0',
'SCOTTY SIRE - MISTER GLASSMAN| Link - https://youtu.be/cMtHByGJ8Ao',
'Let\'s Get It On - Marvin Gaye| Link - https://youtu.be/I2jLdYovW-c',
'Shrek 2- Livin la vida loca| Link - https://youtu.be/DOTlMUQzJrw',
'Dschinghis Khan - "Moskau" (English Version)| Link - https://youtu.be/kgkHO5yms3o',
'Super Mario Brothers Super Show Credits - Do the Mario!| Link - https://youtu.be/65uNCLBTje0',
'Unravel - Tokyo Ghoul OP [piano]| Link https://youtu.be/sEQf5lcnj_o',
'Kero Kero Bonito - Flamingo| Link - https://youtu.be/rY-FJvRqK0E',
'Rasputin-Boney M. (Lyrics)| Link - https://youtu.be/aiSdTQ9DW9g',
'Soviet Anthem sung in English (1944 Translation)| Link - https://youtu.be/i7pbnTI1_LM',
'C&C Red Alert 3 Theme - Soviet March| Link - https://youtu.be/lDQ7hXMLxGc',
'Bank Account| Link - https://youtu.be/eCK772REqw0',
'Moskau Lyrics| Link - https://youtu.be/8PvOSp4mxn0',
'G-Eazy - The Plan| Link - https://youtu.be/ujyTQNNjjDU',
'Initial D - Deja Vu| Link - https://youtu.be/dv13gl0a-FA',
'Yung Gravy - Karen| Link - https://youtu.be/-ZEuqYYqQvY',
'Yung Gravy - Sandy| Link - https://youtu.be/bXKkO0GkMBQ',
'TheFatRat - Time Lapse| Link - https://youtu.be/3fxq7kqyWO8',
'Tokyo Teddy Bear (English Cover)| Link - https://youtu.be/MW2lEOvFrBE',
'SharaX - Tokyovania Control (Vocal Cover)| Link - https://youtu.be/wOVrfMa8Bfo',
'R. Kelly - Cookie| Link - https://youtu.be/dO90-yT5Ckk',
'Ginuwine - Pony| Link - https://youtu.be/lbnoG2dsUk0',
'Queen - I Want To Break Free| Link - https://youtu.be/f4Mc-NYPHaQ',
'Lil Xan - Betrayed| Link - https://youtu.be/EbfK7dei7ec',
'Scarface - 06 - Money makes the world go round| Link - https://youtu.be/-35P-m6hvnE',
'Yung Gravy & bbno$ - Rotisserie| Link - https://youtu.be/1BgC8IR0olc',
'Yung Gravy & bbno$ - Gold| Link - https://youtu.be/AE1DapwYZuM',
'XXXTENTACION - Revenge List - https://youtu.be/CD_tD26E7k0',
'Yung Gravy & bbno$ - Gasoline| Link - https://youtu.be/SVLx8swe2jk',
'Gloria Estefan - Conga| Link - https://youtu.be/zw1o3gS2oNA',
'Jocelyn Flores| Link - https://youtu.be/C1D3G2VGQ_8',
'Yung Gravy - Back to the Basics| Link - https://youtu.be/-btKi7_ePew',
'Eurythmics - Sweet Dreams| Link - https://youtu.be/qeMFqkcPYcg',
'Slap da cake (funky house edition)| Link - https://youtu.be/Lc1TUnTKMLo',
'The Rolling Stones - Paint It, Black| Link - https://youtu.be/O4irXQhgMqg',
'Yung Gravy - 1 Thot 2 Thot Red Thot Blue Thot| Link - https://youtu.be/GzVvDGnWQXI',
'TheFatRat - Unity| Link - https://youtu.be/n8X9_MgEdCg',
'Ayo & Teo - Rolex| Link - https://youtu.be/lwk5OUII9Vc',
'Two Steps From Hell - Heart of Courage (Extended Version)| Link - https://youtu.be/XYKUeZQbMF0',
'MC Hammer - U Can\'t Touch This| Link - https://youtu.be/otCpCn0l4Wo',
'Childish Gambino - Redbone| Link - https://youtu.be/Kp7eSUU9oy8',
'Undertale - Hopes and Dreams (Original lyrics/Vocal cover)| Link - https://youtu.be/jE9dXgL3LDY',
'Kraddy - Android Porn **ORIGINAL** | Link - https://youtu.be/jr3XJr4FCYk'][Math.floor(Math.random()*72)]) : '' );
WelcomeArray=[' walks in with a big smile. Unfortunately, their pants are unzipped.',
' flies through the door, destroying the thriving weed farm. This is the third time this week...',
' joins the club. Time to party!',
', the manager of this establishment, walks in swiftly with their briefcase.',
' enters the building. Everyone, act natural. ',
' smashes through a window on a out-of-control hose. ',
' waltz into the room. Get it waltz, because ... oh forget it.',
' bursts thought the wall dressed as the Kool-aid man. "OH YEAH!!!"',
', you\'re late, get to work, slave.'
]
kills=['a screw',' a bow','a magnet','a nail file','coasters','deodorant','headphones','pants','a chair','a hanger','an ipod','an outlet','lip gloss','soap','a hair brush','a credit card','a blanket','chalk','perfume','a puddle','a paint brush','nail clippers','twister™','a slipper','a USB drive',' a pair of glasses','a computer','a cell phone','a box','some clothes','a lamp shade','a buckel','eye linertable','a washing machine','a zipper','teddies','a door','a bed','video gamessocks',' street lights','a key chain',' tooth picks','an eraser','a sketch pad','a keyboard','a sandal','a piano','a clay pot']
knifes=['butterfly knife',' long sword','dagger','Boning Knife','Bread Knife','Butcher Knife','Breaking Knife','Chef\'s Knife','Cimeter','Cleaver']
sreason=['the FBI was after them',' they were sad',' gave a bad hand shake',' forgot to flush','"It\'s the  Best way to make sure I\'m not dead already."','"They\'re waiting on me down below to start the party."','"The cost of living rises, but death remains affordable."']
ureason=['they ate my oreos','they stole their walmat gift card','they said they were fat','they told someone who their crush is','The bartender put Clamato in their beer when they wanted tomato juice','they were wearing a bulletproof vest, they still died']
slapitem=['20in dildo','te Holy Bible','pattle ','large mouthed bass','rubber glove','pillow pet\u2122','sandale','belt','small dog','dish rag, nasty','small automotive']
fights=['won!','lost, boo!']
rps=['Rock!','Paper!','Scissors!']
