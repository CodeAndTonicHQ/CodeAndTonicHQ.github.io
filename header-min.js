function redirectBlogUrls(){const e=window.location.href;if(e.includes("/?p=")){const t=e.replace("/?p=","/blog/");console.log(t),window.location.href=t}}console.log("hello local or maybe github dev"),redirectBlogUrls(),document.addEventListener("DOMContentLoaded",(function(){if(window.location.pathname.includes("/tapahtumat")&&document.querySelector(".events-list")){if(document.querySelector(".eventlist--upcoming")&&document.querySelector(".eventlist--upcoming").insertAdjacentHTML("beforebegin",'<h1 id="tulevat-tapahtumat" class="js-event-list-heading upcoming-events-custom-heading">Tulevat tapahtumat</h1>'),document.querySelector(".eventlist--past")&&document.querySelector(".eventlist--past").insertAdjacentHTML("beforebegin",'<h1 id="menneet-tapahtumat" class="js-event-list-heading past-events-custom-heading">Menneet tapahtumat</h1>'),window.location.hash.includes("#menneet")){document.getElementById("menneet-tapahtumat").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest",offsetTop:10})}if(window.location.hash.includes("#tulevat")){document.getElementById("tulevat-tapahtumat").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest",offsetTop:10})}}}));var monthNumberToMonthName=function(e){switch(e){case"01":return"January";case"02":return"February";case"03":return"March";case"04":return"April";case"05":return"May";case"06":return"June";case"07":return"July";case"08":return"August";case"09":return"September";case"10":return"October";case"11":return"November";case"12":return"December";default:monthName="error"}};monthNumberToMonthName("01"),$(document).ready((function(){$("time.blog-date").each((function(e,t){console.log(o);var o=$(this).text().split("/");console.log(o);var n=o[0];n.length<=1?(console.log("blog grid monthNumber is single digit. Let's add a 0"),n="0"+n):console.log("blog grid monthNumber is double digit. So it's cool as is");var a=monthNumberToMonthName(n),s=a.substring(0,3);console.log("kuukaudenimi kuukaudelle "+n+"on "+a);var l=o[1];l.length<=1?(console.log("blog grid day is single digit. Let's add a 0"),l="0"+l):console.log("blog grid day is double digit. So it's cool as is");var r=l+"."+s+" "+("20"+o[2]);$(this).html(r).addClass("dateFormatted-and-ready-to-show")}))})),$(document).ready((function(){if(document.querySelector("meta[itemprop=datePublished]")){console.log("yes");var e=$('meta[itemprop="datePublished"]').attr("content");console.log(e);var t=e.split("T");console.log(t);var o=t[0].split("-");console.log(o);var n=o[0],a=o[1],s=o[2],l=monthNumberToMonthName(a);l.substring(0,3);console.log("kuukaudenimi kuukaudelle "+a+"on "+l);var r=s+"/"+a+"/"+n;$(".blog-meta-item--date span").html(r).addClass("dateFormatted-and-ready-to-show")}else console.log("No meta description for blog date")})),$(document).ready((function(){$("time.summary-metadata-item--date").each((function(e,t){var o=$(this).attr("datetime").split("-"),n=o[0],a=o[1],s=o[2],l=monthNumberToMonthName(a),r=l.substring(0,3);console.log("kuukaudenimi kuukaudelle "+a+"on "+l);var i=s+". "+r+" "+n;$(this).html(i).addClass("dateFormatted-and-ready-to-show")}))}));