var loc = window.location.href+'';
if (loc.indexOf('http://')==0){
	window.location.href = loc.replace('http://','https://');	// https redirect
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}
 





$( document ).ready(function() {
	$( "#subscribebutton" ).click(function() {
		$( ".subscribeform" ).toggle();
		$( ".subscribecaptcha" ).toggle(300);
	});		
	$( ".stopMusic" ).click(function() {
		document.getElementById("musicContainer").innerHTML = "<div class='musicstop'>Music stopped</div>";
	});	
	$( "#clickHereButton" ).click(function() {
		document.getElementById("clickHereButton").innerHTML = "Not Found!";
	});		
	$( "#downloadButton" ).click(function() {
		document.getElementById("downloadButton").innerHTML = "Error 404";
	});		
	$( "#clickMeButton" ).click(function() {
		document.getElementById("clickMeButton").innerHTML = "Thank You!";
	});		
	$( "#loadCss" ).click(function() {
		loadjscssfile("/prettyskin.css", "css");
	});		
	$( "#mobiletoggle" ).click(function() {		//mobile toggle
		$( ".cleft ul" ).toggle();
	});		
	$( "#backToUgly" ).click(function() {		//back to ugly clicked
		history.pushState('', document.title, window.location.pathname);
		$("link[href='/prettyskin.css']").remove();
		
	});		
	/*
	if(window.location.hash) {
		var hash = window.location.hash.substring(1);
		if (hash == "white") {
			loadjscssfile("/prettyskin.css", "css");
		}		
	}	
	*/
	
	
	
});


var jokes = ["<strong>Q: </strong>Why do Farts stink?<br /><strong>A: </strong>So that Deaf people can enjoy them too.","<strong>Q: </strong>Why did the Hedgehog cross the road?<br /><strong>A: </strong>To see his Flat Mate.","<strong>Q: </strong>What do you call a Fish without an eye?<br /><strong>A: </strong>A 'Fsh'!","<strong>Q: </strong>Why does it take 1 million sperm to fertilize one egg?<br /><strong>A: </strong>They won't stop to ask directions.","<strong>Q: </strong>What's the difference between Big Foot and an intelligent man?<br /><strong>A: </strong>Big Foot's been spotted several times.","<strong>Q: </strong>What do you call a handcuffed man?<br /><strong>A: </strong>Trustworthy.","<strong>Q: </strong>Why is divorce so expensive?<br /><strong>A: </strong>Because it's worth it.","<strong>Q: </strong>What is black, white and red all over?<br /><strong>A: </strong>A skunk with nappy rash.","<strong>Q: </strong>Why did the man jump out of the window?<br /><strong>A: </strong>He wanted to catch a butterfly.","<strong>Q: </strong>Why did the monkey put a piece of steak on his head?<br /><strong>A: </strong>He thought he was a griller.","<strong>Q: </strong>What do you call a deer with no eyes?<br /><strong>A: </strong>No eye deer.","<strong>Q: </strong>What do you call a deer with no eyes and no legs?<br /><strong>A: </strong>Still no eye deer.","<strong>Q: </strong>Why was six afraid of seven?<br /><strong>A: </strong>Because seven eight nine.","<strong>Q: </strong>Why did the dinosaur walk across the road?<br /><strong>A: </strong>Because chickens were not invented yet.","<strong>Q: </strong>What has four wheels and flies?<br /><strong>A: </strong>A rubbish truck.","<strong>Q: </strong>What's brown and sticky?<br /><strong>A: </strong>A stick.","<strong>Q: </strong>When were vowels invented?<br /><strong>A: </strong>When u and i were born.","<strong>Q: </strong>What's orange and sounds like a parrot?<br /><strong>A: </strong>A carrot.","<strong>Q: </strong>What do you call a sheep with no head and legs?<br /><strong>A: </strong>A fuzz ball.","<strong>Q: </strong>What do you call a fairy that hasn't bathed in a year?<br /><strong>A: </strong>Stinkerbell.","<strong>Q: </strong>When is it a good time to eat a window?<br /><strong>A: </strong>When it's jammed.","<strong>Q: </strong>Whats the difference between a tractor and a giraffe? A.One has hydraulics the other has highbollocks.","<strong>Q: </strong>What kind of band doesn't play music?<br /><strong>A: </strong>A highbred.","<strong>Q: </strong>If one is single and two is a couple and three is a crowd, what is four and five?<br /><strong>A: </strong>9 (5+4)","<strong>Q: </strong>What do you get when you cross a parrot and a lion?<br /><strong>A: </strong>I don't know, but when it talks you'd better listen.","<strong>Q: </strong>Why do giraffes have long necks?<br /><strong>A: </strong>Because they have smelly feet.","<strong>Q: </strong>Why did the orange use suntan lotion?<br /><strong>A: </strong>He started to peel.","<strong>Q: </strong>Where does an elephant go when he wants to lie down?<br /><strong>A: </strong>Anywhere he pleases.","<strong>Q: </strong>Why did Cinderella get kicked off the baseball team?<br /><strong>A: </strong>Because she ran away from the ball.","<strong>Q: </strong>A man went to play golf for the day. He took his golf clubs and two pairs of pants. What were the extra pants for?<br /><strong>A: </strong>In case he got a hole-in-one.","<strong>Q: </strong>Why didn't the skeleton cross the road?<br /><strong>A: </strong>Because it had no guts.","<strong>Q: </strong>I have 3 heads, 5 legs, 7 arms and 444 fingers. What am I?<br /><strong>A: </strong>A liar.","<strong>Q: </strong>What do you get when you cross an elephant with a kangaroo?<br /><strong>A: </strong>Holes all over Australia.","<strong>Q: </strong>What goes ha, ha plonk?<br /><strong>A: </strong>Someone laughing their head off.","<strong>Q: </strong>What do you get when you cross a duck with cheese?<br /><strong>A: </strong>Cheese and quackers.","<strong>Q: </strong>What monster sits on the end of your finger?<br /><strong>A: </strong>The bogie man.","<strong>Q: </strong>What did the computer screen say to the keyboard after it went for a ride?<br /><strong>A: </strong>That was a harddrive.","<strong>Q: </strong>What is a pirate's favourite letter?<br /><strong>A: </strong>R(Arrrrrggggh)","<strong>Q: </strong>Why did the cow jump over the moon?<br /><strong>A: </strong>Because the farmer had cold hands.","<strong>Q: </strong>How do you make a tissue dance?<br /><strong>A: </strong>Put a little boogie in it.","<strong>Q: </strong>How do you get a man to stop biting his nails?<br /><strong>A: </strong>Make him wear shoes.","<strong>Q: </strong>Why do chicken coops have two doors?<br /><strong>A: </strong>Because if it had four doors it's be a chicken sedan.","<strong>Q: </strong>What is the difference between a tick and a lawyer?<br /><strong>A: </strong>A tick falls off you when you die.","<strong>Q: </strong>What's the definition of mixed emotions?<br /><strong>A: </strong>When you see your mother-in-law backing off a cliff in your new car.","<strong>Q: </strong>What do call a lawyer with an IQ of 50?<br /><strong>A: </strong>Your Honor.","<strong>Q: </strong>How do you know if a restaurant has a clown as a chef?<br /><strong>A: </strong>When the food tastes funny","Two bytes meet.  The first byte asks, â€œAre you ill?â€ <br />The second byte replies, â€œNo, just feeling a bit off.â€","Eight bytes walk into a bar.  The bartender asks, â€œCan I get you anything?â€<br />â€œYeah,â€ reply the bytes.  â€œMake us a double.â€","Q. How did the programmer die in the shower?<br />A. He read the shampoo bottle instructions: Lather. Rinse. Repeat.","How many programmers does it take to change a light bulb?<br />None â€“ Itâ€™s a hardware problem","Why do programmers always mix up Halloween and Christmas? <br />Because Oct 31 equals Dec 25.","There are only 10 kinds of people in this world: those who know binary and those who donâ€™t.","A programmer walks to the butcher shop and buys a kilo of meat. <br /> An hour later he comes back upset that the butcher shortchanged him by 24 grams.","â€œKnock, knock.â€<br />â€œWhoâ€™s there?â€<br />very long pauseâ€¦.<br />â€œJava.â€ ","Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science. ","Programming is like sex:<br />One mistake and you have to support it for the rest of your life.","A man is smoking a cigarette and blowing smoke rings into the air.  His girlfriend becomes irritated with the smoke and says, â€œCanâ€™t you see the warning on the cigarette pack?  Smoking is hazardous to your health!â€ <br />To which the man replies, â€œI am a programmer.  We donâ€™t worry about warnings; we only worry about errors.â€","There are three kinds of lies: Lies, damned lies, and benchmarks.","A programmer is walking along a beach and finds a lamp.  He rubs the lamp, and a genie appears.  â€œI am the most powerful genie in the world.  I can grant you any wish, but only one wish.â€ <br />The programmer pulls out a map, points to it and says, â€œIâ€™d want peace in the Middle East.â€ <br />The genie responds, â€œGee, I donâ€™t know.  Those people have been fighting for millennia.  I can do just about anything, but this is likely beyond my limits.â€ <br />The programmer then says, â€œWell, I am a programmer, and my programs have lots of users.  Please make all my users satisfied with my software and let them ask for sensible changes.â€<br />At which point the genie responds, â€œUm, let me see that map again.â€","All programmers are playwrights, and all computers are lousy actors.","Have you heard about the new Cray super computer?  Itâ€™s so fast, it executes an infinite loop in 6 seconds.","The generation of random numbers is too important to be left to chance.","The computer is mightier than the pen, the sword, and usually, the programmer.","Debugging: Removing the needles from the haystack.","Two strings walk into a bar and sit down. The bartender says, â€œSo whatâ€™ll it be?â€<br />The first string says, â€œI think Iâ€™ll have a beer quag fulk boorg jdk^CjfdLk jk3s d#f67howe%^U r89nvy~~owmc63^Dz x.xvcuâ€<br />â€œPlease excuse my friend,â€ the second string says, â€œHe isnâ€™t null-terminated.â€","From the Random Shack Data Processing Dictionary:","Endless Loop: n., see Loop, Endless.<br />Loop, Endless: n., see Endless Loop.","The three most dangerous things in the world are a programmer with a soldering iron, a hardware engineer with a software patch, and a user with an idea.  â€“ The Wizardry Compiled by Rick Cook","One hundred little bugs in the code<br />One hundred little bugs.<br />Fix a bug, link the fix in,<br />One hundred little bugs in the code.","A computer science student is studying under a tree and another pulls up on a flashy new bike.  The first student asks, â€œWhereâ€™d you get that?â€<br />The student on the bike replies, â€œWhile I was studying outside, a beautiful girl pulled up on her bike.  She took off all her clothes and said, â€˜You can have anything you wantâ€™.â€<br />The first student responds, â€œGood choice!  Her clothes probably wouldnâ€™t have fit you.â€","Why computers are like men:<br />- In order to get their attention, you have to turn them on.<br />- They have a lot of data, but are still clueless.<br />- They are supposed to help you solve problems, but half the time they are the problem.<br />- As soon as you commit to one, you realize that if you had waited a little longer, you could have had a better model.<br />- Why computers are like women:<br />- No one but the Creator understands their internal logic.<br />- The native language they use to communicate with other computers is incomprehensible to everyone else.<br />- Even your smallest mistakes are stored in long-term memory for later retrieval.<br />- As soon as you make a commitment to one, you find yourself spending half your paycheck on accessories for it.","It&rsquo;s hard to explain puns to kleptomaniacs because they always take things literally.","I used to think the brain was the most important organ. Then I thought, look what&rsquo;s telling me that.","The midget fortune teller who kills his customers is a small medium at large.","A farmer in the field with his cows counted 196 of them, but when he rounded them up he had 200.","What does a nosey pepper do? Get jalape&ntilde;o business.","What is Bruce Lee&rsquo;s favorite drink? Wataaaaah!","The dyslexic devil worshipper sold his soul to Santa.","You kill vegetarian vampires with a steak to the heart.","There was a prison break and I saw a midget climb up the fence. As he jumped down her sneered at me and I thought, well that&rsquo;s a little condescending.","If you want to catch a squirrel just climb a tree and act like a nut.","So this guy with a premature ejaculation problem comes out of nowhere.","A magician was walking down the street and turned into a grocery store.","A blind man walks into a bar. And a table. And a chair.","Why don&rsquo;t you ever see hippopotamus hiding in trees? Because they&rsquo;re really good at it.","Did you hear about the Mexican train killer? He had locomotives.","How does NASA organize their company parties? They planet.","Why can&rsquo;t you hear a pterodactyl go to the bathroom? Because the &ldquo;P&rdquo; is silent.","What kind of shoes do ninjas wear? Sneakers.","Why does Snoop Dogg carry an umbrella? Fo&rsquo; drizzle.","Did you hear about the new corduroy pillows? They&rsquo;re making headlines everywhere!","Why was six afraid of seven? Because seven was a well known six offender.","What time is it when you have to go to the dentist? Tooth-hurtie.","A plateau is the highest form of flattery.","It&rsquo;s hard to explain puns to kleptomaniacs because they always take things literally.","Time flies like an arrow, fruit flies like a banana.","A soldier survived mustard gas in battle, and then pepper spray by the police. He's now a seasoned veteran.","What's the best thing about Switzerland? I don't know, but their flag is a huge plus.","I'm addicted to brake fluid, but I can stop whenever I want.","What's the difference between my ex and the titanic? The titanic only went down on 1,000 people","Why is 6 afraid of 7? Because 7 is a registered 6 offender.","I told my doctor that I broke my arm in two places. He told me to stop going to those places.","Atheism is a non-prophet organization","What do you call it when Batman skips church? Christian Bale.","What's orange and sounds like a parrot? A carrot.","How do you keep an idiot in suspense?","I hate Russian dolls...so full of themselves","What's E.T. short for? Because he's only got little legs.","Wanna hear a joke about Potassium? (whether they say 'yes' or 'no'): K.","A baby seal walks into a club.","My grandad has the heart of a lion and a life time ban from the San Diego Zoo.","I went on a once in a lifetime holiday. Never again.","Rick Astley will let you borrow any movie from his Pixar collection, except one. He's never gonna give you Up.","It takes a lot of balls to golf like me.","I asked my North Korean friend how it was there, he said he couldn't complain.","Last night me and my girlfriend watched three DVDs back to back. Luckily I was the one facing the telly.","Exaggerations went up by a million percent last year.","They all laughed when I said I wanted to be a comedian. Well, they're not laughing now.","I used to be addicted to soap, but I'm clean now.","Two penguins walk into a bar... which is stupid because the second one should have seen it.","What do you call a magic dog? A Labracadabrador.","I was wondering why does a frisbee appear larger the closer it gets.... then it hit me.","Have I told you this deja vu joke before?","Where do you find a cow with no legs? Right where you left it.","Nostalgia isn't what it used to be...","I didn't know my dad was a construction site thief, but when I got home all the signs were there."];







$(window).load(function() {
	$("#jokeComesHere").html(jokes[Math.floor(Math.random() * jokes.length)]);
	
	$('.marquee').marquee({
		//speed in milliseconds of the marquee
		duration: 9000,
		//gap in pixels between the tickers
		gap: 1000,
		//time in milliseconds before the marquee will start animating
		delayBeforeStart: 500,
		//'left' or 'right'
		direction: 'left',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: false
	});
});

/**
 * jQuery.marquee - scrolling text like old marquee element
 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin
 */
;(function(d){d.fn.marquee=function(w){return this.each(function(){var a=d.extend({},d.fn.marquee.defaults,w),b=d(this),c,k,p,q,h,l=3,x="animation-play-state",e=!1,B=function(a,b,c){for(var d=["webkit","moz","MS","o",""],e=0;e<d.length;e++)d[e]||(b=b.toLowerCase()),a.addEventListener(d[e]+b,c,!1)},E=function(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c+":"+a[c]);b.push();return"{"+b.join(",")+"}"},g={pause:function(){e&&a.allowCss3Support?c.css(x,"paused"):d.fn.pause&&c.pause();b.data("runningStatus",
"paused");b.trigger("paused")},resume:function(){e&&a.allowCss3Support?c.css(x,"running"):d.fn.resume&&c.resume();b.data("runningStatus","resumed");b.trigger("resumed")},toggle:function(){g["resumed"==b.data("runningStatus")?"pause":"resume"]()},destroy:function(){clearTimeout(b.timer);b.css("visibility","hidden").html(b.find(".js-marquee:first"));setTimeout(function(){b.css("visibility","visible")},0)}};if("string"===typeof w)d.isFunction(g[w])&&(c||(c=b.find(".js-marquee-wrapper")),!0===b.data("css3AnimationIsSupported")&&
(e=!0),g[w]());else{var r;d.each(a,function(c,d){r=b.attr("data-"+c);if("undefined"!==typeof r){switch(r){case "true":r=!0;break;case "false":r=!1}a[c]=r}});a.duration=a.speed||a.duration;q="up"==a.direction||"down"==a.direction;a.gap=a.duplicated?a.gap:0;b.wrapInner('<div class="js-marquee"></div>');var f=b.find(".js-marquee").css({"margin-right":a.gap,"float":"left"});a.duplicated&&f.clone(!0).appendTo(b);b.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');c=b.find(".js-marquee-wrapper");
if(q){var m=b.height();c.removeAttr("style");b.height(m);b.find(".js-marquee").css({"float":"none","margin-bottom":a.gap,"margin-right":0});a.duplicated&&b.find(".js-marquee:last").css({"margin-bottom":0});var s=b.find(".js-marquee:first").height()+a.gap;a.duration*=(parseInt(s,10)+parseInt(m,10))/parseInt(m,10)}else h=b.find(".js-marquee:first").width()+a.gap,k=b.width(),a.duration*=(parseInt(h,10)+parseInt(k,10))/parseInt(k,10);a.duplicated&&(a.duration/=2);if(a.allowCss3Support){var f=document.body||
document.createElement("div"),n="marqueeAnimation-"+Math.floor(1E7*Math.random()),z=["Webkit","Moz","O","ms","Khtml"],A="animation",t="",u="";f.style.animation&&(u="@keyframes "+n+" ",e=!0);if(!1===e)for(var y=0;y<z.length;y++)if(void 0!==f.style[z[y]+"AnimationName"]){f="-"+z[y].toLowerCase()+"-";A=f+A;x=f+x;u="@"+f+"keyframes "+n+" ";e=!0;break}e&&(t=n+" "+a.duration/1E3+"s "+a.delayBeforeStart/1E3+"s infinite "+a.css3easing,b.data("css3AnimationIsSupported",!0))}var C=function(){c.css("margin-top",
"up"==a.direction?m+"px":"-"+s+"px")},D=function(){c.css("margin-left","left"==a.direction?k+"px":"-"+h+"px")};a.duplicated?(q?c.css("margin-top","up"==a.direction?m:"-"+(2*s-a.gap)+"px"):c.css("margin-left","left"==a.direction?k+"px":"-"+(2*h-a.gap)+"px"),l=1):q?C():D();var v=function(){a.duplicated&&(1===l?(a._originalDuration=a.duration,a.duration=q?"up"==a.direction?a.duration+m/(s/a.duration):2*a.duration:"left"==a.direction?a.duration+k/(h/a.duration):2*a.duration,t&&(t=n+" "+a.duration/1E3+
"s "+a.delayBeforeStart/1E3+"s "+a.css3easing),l++):2===l&&(a.duration=a._originalDuration,t&&(n+="0",u=d.trim(u)+"0 ",t=n+" "+a.duration/1E3+"s 0s infinite "+a.css3easing),l++));q?a.duplicated?(2<l&&c.css("margin-top","up"==a.direction?0:"-"+s+"px"),p={"margin-top":"up"==a.direction?"-"+s+"px":0}):(C(),p={"margin-top":"up"==a.direction?"-"+c.height()+"px":m+"px"}):a.duplicated?(2<l&&c.css("margin-left","left"==a.direction?0:"-"+h+"px"),p={"margin-left":"left"==a.direction?"-"+h+"px":0}):(D(),p={"margin-left":"left"==
a.direction?"-"+h+"px":k+"px"});b.trigger("beforeStarting");if(e){c.css(A,t);var f=u+" { 100%  "+E(p)+"}",g=d("style");0!==g.length?g.filter(":last").append(f):d("head").append("<style>"+f+"</style>");B(c[0],"AnimationIteration",function(){b.trigger("finished")});B(c[0],"AnimationEnd",function(){v();b.trigger("finished")})}else c.animate(p,a.duration,a.easing,function(){b.trigger("finished");a.pauseOnCycle?b.timer=setTimeout(v,a.delayBeforeStart):v()});b.data("runningStatus","resumed")};b.bind("pause",
g.pause);b.bind("resume",g.resume);a.pauseOnHover&&b.bind("mouseenter mouseleave",g.toggle);e&&a.allowCss3Support?v():b.timer=setTimeout(v,a.delayBeforeStart)}})};d.fn.marquee.defaults={allowCss3Support:!0,css3easing:"linear",easing:"linear",delayBeforeStart:1E3,direction:"left",duplicated:!1,duration:5E3,gap:20,pauseOnCycle:!1,pauseOnHover:!1}})(jQuery);






/* jseyes.js
The classic Xeyes in JavaScript
(c) PROPIX Ltd,  Written by PintÃ©r GÃ¡bor
SzÃ©kesfehÃ©rvÃ¡r, KrivÃ¡nyi u. 15.
H-8000, HUNGARY
Tel: +36 30 3489752
Fax: +36 22 304326
Email: propix@freemail.hu
Web: http://www.propix.hu
Revisions:
  V1.0  10/14/2001  Original release
		V1.1  02/20/2008: Updated by JavaScriptKit.com to work in the latest browsers (IE7, FF etc)
Usage:
  1. Include this file from the head of your page
  2. Define parameters or accept the defaults
  3. Insert the image
This script requires Internet Explorer 5+ or Nescape Navigator 6+! In other browsers it does nothing.
1. Include jseyes.js from the head of your page
Insert the following line into the head of your page:
  <script src="jseyes.js"></script>
2. Define parameters
You can accept the defaults or assign new values to these variables:
jseyesimg="jseyes.gif"
  The main image. Please do not edit.
jseyeimg="jseyeblue.gif"
  The image of the eye. Must be a 21x29 solid ellipse with transparent background.
4. Insert the image
Call jseyes() where you want to see the image:
  <script>
    jseyes();
  </script>
Or call jseyes(x, y) to show the image at absolute position:
  <script>
    jseyes(100,100);
  </script>
Example: http://www.propix.hu/www/jseyes/jseyes.html
*/
// Defaults
var jseyesimg="/img/jseyes.gif";
var jseyeimg="/img/jseyeblue.gif";
// Internal
var jseyeso=null, jseye1=null, jseye2=null;
var standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body //create reference to common "body" across doctypes
// General utils
// Find object by name or id
function jseyesobj(id) {
  var i, x;
  x= document[id];
  if (!x && document.getElementById) x= document.getElementById(id);
  for (i=0; !x && i<document.forms.length; i++) x= document.forms[i][id];
  return(x);
}
// Move eyes
function jseyesmove(x, y) {
  var ex, ey, dx, dy;
  if (jseyeso && jseye1 && jseye2 && jseyeso.style) {
    ex=jseyeso.offsetLeft+46; ey=jseyeso.offsetTop+58;
    dx=x-ex; dy=y-ey;
    r=(dx*dx/49+dy*dy/289<1) ? 1 : Math.sqrt(49*289/(dx*dx*289+dy*dy*49));
    jseye1.style.left= r*dx+66.5+'px'; jseye1.style.top= r*dy+44+'px';
    ex+=56; dx-=56;
    r=(dx*dx/49+dy*dy/289<1) ? 1 : Math.sqrt(49*289/(dx*dx*289+dy*dy*49));
    jseye2.style.left= r*dx+92.5+'px'; jseye2.style.top= r*dy+44+'px';
  }
}
// Main
function jseyes() {
  var img;
  var x, y, a=false;
  if (arguments.length==2) {
    x= arguments[0];
    y= arguments[1];
    a= true;
  }
    img= "<div id='jseyeslayer' style='position:"+
           (a ? "absolute; left:"+x+"; top:"+y : "relative")+
           "; z-index:5; width:150; height:150 overflow:hidden'>"+
	     "<div id='jseye1' style='position:absolute; left:36; top:44; z-index:6; width:21; height:29'>"+
	       "<img src='"+jseyeimg+"' width=21 height=29 >"+
	     "</div>"+
	     "<div id='jseye2' style='position:absolute; left:92; top:44; z-index:6; width:21; height:29'>"+
	       "<img src='"+jseyeimg+"' width=21 height=29 >"+
	     "</div>"+
	     "<img src='"+jseyesimg+"' width=150 height=150 >"+
	 "</div>";
    document.write(img);
    jseyeso=jseyesobj('jseyeslayer');
    jseye1=jseyesobj('jseye1');
    jseye2=jseyesobj('jseye2');
    document.onmousemove=jseyesmousemove;
}
// Mouse move events
function jseyesmousemove(e) {
		var mousex=(e)? e.pageX : event.clientX+standardbody.scrollLeft
		var mousey=(e)? e.pageY : event.clientY+standardbody.scrollTop
  jseyesmove(mousex, mousey);
  //return(false);
}














// array to store our Snowflake objects
var snowflakes = [];
// global variables to store our browser's window size
var browserWidth;
var browserHeight;
// specify the number of snowflakes you want visible
var numberOfSnowflakes = 25;
//
// listen for "DOMContentLoaded", "resize", and "focus" events and handle them
//
function setup() {
	this.addEventListener("DOMContentLoaded", generateSnowFlakes, true);
	this.addEventListener("resize", resetPositions, true);
	this.addEventListener("focus", tabHasFocus, true);
}
setup();
//
// constructor for our Snowflake class
//
function Snowflake(element, radius, speed, width, xPos, yPos) {
	// set initial snowflake properties
    this.element = element;
    this.radius = radius;
    this.speed = speed;
    this.width = width;
    this.xPos = xPos;
    this.yPos = yPos;
	// declare variables used for snowflake's motion
    this.counter = 0;
    var sign = Math.floor(Math.random() * 2);
    if (sign == 1) {
        sign = -1;
    } else {
        sign = 1;
    }
	// setting an initial opacity and size for our snowflake
    this.element.style.opacity = .1 + Math.random();
    this.element.style.fontSize = 12+Math.random()*50 + "px";	
	// the function responsible for actually moving our snowflake
    this.update = function () {
		// using some trigonometry to determine our x and y position
        this.counter += speed/300;
        this.xPos += sign*speed*Math.cos(this.counter)/20;
        this.yPos += speed/10;
		// setting our snowflake's position
        this.element.style.left = Math.round(this.xPos) + "px";
        this.element.style.top = Math.round(this.yPos) + "px";
        // if snowflake goes below the browser window, move it back to the top
        if (this.yPos > browserHeight) {
        	this.yPos = -50;
        }
    }
}
//
// the function responsible for creating the snowflake and letting them
// fall in their merry way
//
function generateSnowFlakes(e) {
	// get our snowflake element from the DOM and store it
    var originalSnowflake = document.getElementsByClassName("snowflake")[0];
    // access our snowflake element's parent container
    var snowflakeContainer = originalSnowflake.parentNode;
    // set our browser's size
    browserHeight = window.outerHeight;
    browserWidth = window.outerWidth;
    // create each individual snowflake
    for (var i = 0; i < numberOfSnowflakes; i++) {
    	// clone our original snowflake and add it to snowflakeContainer
        var snowflakeCopy = originalSnowflake.cloneNode(true);
        snowflakeContainer.appendChild(snowflakeCopy);
		// set our snowflake's initial position and related properties
        var initialXPos = setPosition(50, browserWidth);
        var initialYPos = setPosition(50, browserHeight);
        var speed = 5 + Math.random() * 40;
        var radius = 4+Math.random() * 10;
        
        // create our Snowflake object
        var snowflakeObject = new Snowflake(snowflakeCopy, radius, speed, 0, initialXPos, initialYPos );
        snowflakes.push(snowflakeObject);
    }
    // remove the original snowflake because we no longer need it visible
	snowflakeContainer.removeChild(originalSnowflake);
	// call the moveSnowflakes function every 30 milliseconds
    setInterval(moveSnowflakes, 30);
}
//
// responsible for moving each snowflake by calling its update function
//
function moveSnowflakes() {
    for (var i = 0; i < snowflakes.length; i++) {
        var snowflake = snowflakes[i];
        snowflake.update();
    }
}
//
// this function returns a number between (maximum-offset) and (maximum+offset)
//
function setPosition(offset, maximum) {
	return Math.round(-1*offset + Math.random() * (maximum+2*offset));
}
//
// resets the position of all the snowflakes to a new value
//
function resetPositions(e) {
	browserHeight = window.outerHeight;
    browserWidth = window.outerWidth; 
	for (var i = 0; i < snowflakes.length; i++) {

        var snowflake = snowflakes[i];
        snowflake.xPos = setPosition(50, browserWidth);
        snowflake.yPos = setPosition(50, browserHeight);
    }
}
//
// this function handles the case where the snowflakes aren't positioned correctly
// because the document was opened as a background tab
//
function tabHasFocus() {
	resetPositions(null);
	this.removeEventListener("focus", tabHasFocus, true);	
}






