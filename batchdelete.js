// ==UserScript==
// @name       Batch delete comments DL
// @namespace  http://hpomnemawataya.wordpress.org
// @version    0.1
// @description  batch delete comments on Duolingo
// @include    http://www.duolingo.com
// @include    https://www.duolingo.com
// @copyright  2014+, Wataya
// ==/UserScript==

batchDelete=function(){alert('Comment deleted!');};
var comments=document.getElementsByClassName('discussion-comments-list-item');
var comment=comments[0];
var footer=comment.getElementsByClassName('vote-module-small')[0];
var a=document.createElement('a');
var linktext=document.createTextNode('Batch delete');
a.appendChild(linktext);
a.title="Batch delete";
a.href="wataya";
footer.appendChild(a);


//var script=document.createElement('script');
//script.appendChild(document.createTextNode('('+inject+')();'));
//document.documentElement.appendChild(script);
