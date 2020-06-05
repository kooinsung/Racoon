var racoon = (function () {
  var root = this;
  //
  // var slider;
  // var index = 0;
  // var pageindex = 0;
  // var box_index = 1;
  // var preventScroll = true;
  // var isIng = false;
  // var tweenBgExpanding1 = null;
  // var tweenBgExpanding2 = null;
  // var tweenBgExpanding3 = null;
  // var tl, tl2;
  // var currentTween1, currentTween2;
  //
  // var easingCustomString = "M0,0 C0,0 -0.011,0.004 0.03,0.003 0.054,0.003 0.068,0.003 0.092,0.001 0.11,0 0.121,-0.002 0.14,-0.005 0.171,-0.01 0.189,-0.016 0.22,-0.021 0.231,-0.023 0.238,-0.023 0.249,-0.023 0.256,-0.022 0.262,-0.021 0.269,-0.019 0.276,-0.017 0.281,-0.014 0.287,-0.01 0.293,-0.006 0.294,-0.001 0.299,0.004 0.305,0.011 0.309,0.016 0.314,0.024 0.321,0.036 0.325,0.044 0.33,0.057 0.337,0.074 0.342,0.084 0.347,0.102 0.36,0.148 0.36,0.174 0.36,0.222 0.36,0.276 0.361,0.305 0.37,0.36 0.391,0.49 0.389,0.558 0.411,0.687 0.421,0.747 0.428,0.779 0.441,0.838 0.446,0.862 0.45,0.876 0.458,0.9 0.463,0.918 0.467,0.929 0.474,0.946 0.48,0.961 0.485,0.97 0.493,0.983 0.498,0.993 0.5,1 0.508,1.008 0.516,1.014 0.524,1.02 0.534,1.025 0.543,1.03 0.598,1.031 0.609,1.03 0.664,1.024 0.777,1.006 0.836,1.002 0.898,0.996 1,0.999 1,0.999";
  //
  // var init = function () {
  //
  //   $(window).on("scroll", function () {
  //     //crollDetect();
  //   }).trigger("scroll");
  //
  //   $(window).on("resize", function () {
  //     scrollDetect();
  //     resizeDetect();
  //   }).trigger("resize");
  //
  // };
  //
  // var preventDefault = function (e) {
  //   e.preventDefault();
  // };
  //
  // var disableScroll = function () {
  //   document.body.addEventListener('touchmove', preventDefault, {passive: false});
  // };
  //
  // var enableScroll = function () {
  //   document.body.removeEventListener('touchmove', preventDefault, {passive: false});
  // };
  //
  // var scrollPaging = function (event) {
  //   //console.log(e);
  //   //console.log(event.deltaX, event.deltaY, event.deltaFactor);
  //   if (!isIng) {
  //     isIng = true;
  //     try {
  //       //tl.progress(100);
  //       //tl2.progress(100);
  //     } catch (e) {
  //
  //     }
  //     if (event.deltaY < 0) {
  //       //Down
  //       scrollDown();
  //     } else {
  //       //Up
  //       //console.log($(".wrap_section").scrollTop());
  //       //console.log(index);
  //       scrollUp();
  //     }
  //
  //     //console.log("index", index);
  //   } else {
  //     //console.log("XX")
  //   }
  // };
  //
  // var scrollDown = function () {
  //   if (index < 3) {
  //     if (index != 2 || (index == 2 && box_index == 3)) {
  //       //$(".f_section_0" + index).addClass("action");
  //       index++;
  //       pageindex++;
  //       console.log("pageindex==", pageindex);
  //       //console.log(index, box_index);
  //
  //       TweenMax.to($(".wrap_page0" + index), 0.7, {
  //         y: '0%', ease: Power2.easeInOut, onComplete: function () {
  //           if (index == 3) {
  //             //$("html").removeClass("full");
  //             preventScroll = false;
  //           } else {
  //             preventScroll = true;
  //           }
  //           isIng = false;
  //
  //           if (index == 2) {
  //             TweenMax.set($(".video"), {y: '-200%', autoAlpha: 0});
  //             TweenMax.to($(".cont02_1 .f_left .img_box"), 0.7, {delay: -0.3, autoAlpha: 1, ease: Power2.easeInOut});
  //             TweenMax.to($(".txt_overflow01"), 0.7, {delay: 0, autoAlpha: 1, ease: Power2.easeInOut});
  //
  //             //Video Stop!
  //             try {
  //               var tmp = player.getPlayerState();
  //               if (player.getPlayerState() == YT.PlayerState.PLAYING) {
  //                 player.pauseVideo();
  //               }
  //             } catch (e) {
  //
  //             }
  //           }
  //
  //           if (index == 0) {
  //             paginationChange(1);
  //           } else if (index == 1) {
  //             paginationChange(2);
  //           } else if (index == 2) {
  //             paginationChange(3);
  //           } else if (index == 3) {
  //             paginationChange(4);
  //           }
  //         }
  //       });
  //
  //       //console.log("index=="+index);
  //       if (index == 0) {
  //         //Video Pos ReSet
  //         TweenMax.set($(".video"), {y: '150%', autoAlpha: 0});
  //       } else if (index == 1) {
  //
  //         try {
  //           var tmp = player.getPlayerState();
  //
  //           if (player.getPlayerState() == YT.PlayerState.UNSTARTED || player.getPlayerState() == YT.PlayerState.PAUSED
  //               || player.getPlayerState() == YT.PlayerState.CUED) {
  //             player.playVideo();
  //           }
  //         } catch (e) {
  //
  //         }
  //
  //         //Video Show
  //         tl = new TimelineMax({
  //           delay: 0.5, repeat: 0, repeatDelay: 0, onComplete: function () {
  //           }
  //         });
  //         tl
  //         .to($(".video"), 0.5, {
  //           y: '5%', autoAlpha: 1, ease: Power4.easeOut, onComplete: function () {
  //             try {
  //               var tmp = player.getPlayerState();
  //
  //               if (player.getPlayerState() == YT.PlayerState.UNSTARTED || player.getPlayerState() == YT.PlayerState.PAUSED
  //                   || player.getPlayerState() == YT.PlayerState.CUED) {
  //                 player.playVideo();
  //               }
  //             } catch (e) {
  //
  //             }
  //
  //           }
  //         })
  //         .to($(".video"), 1, {
  //           y: '0%', autoAlpha: 1, ease: Power0.easeNone, onComplete: function () {
  //
  //           }
  //         });
  //
  //       } else if (index == 2) {
  //
  //         //Page 02 First Slide Show
  //         TweenMax.to($(".slide_img0" + box_index), 3, {autoAlpha: 1, ease: Elastic.easeInOut.config(1, 1)});
  //
  //         if (box_index == 1) {
  //           // tweenBgExpanding1 = TweenMax.to($(".slide_img0" + box_index + " .bg_wrap"), 20, {
  //           // 	scale: "1.3",
  //           // 	ease: Power0.easeNone
  //           // });
  //           $(".num_page .first").html("0" + box_index);
  //           $(".bg_wrap").removeClass("expanding");
  //           $(".slide_img0" + box_index + " .bg_wrap").addClass("expanding");
  //         }
  //       }
  //     } else {
  //
  //       //Box Slide Out
  //       TweenMax.to($(".slide_img0" + box_index), 1, {y: '-100%', autoAlpha: 0, ease: Elastic.easeInOut.config(1, 1)});
  //       //Text Out
  //       TweenMax.to($(".txt_overflow0" + box_index), 0.5, {y: '100%', autoAlpha: 0, ease: Elastic.easeInOut.config(1, 1)});
  //
  //       //Box Number ++
  //       box_index++;
  //       pageindex++;
  //
  //       console.log("pageindex==", pageindex);
  //       $(".slide_img0" + box_index + " .bg_wrap").removeClass("expanding");
  //
  //       //Box Index Show
  //       $(".num_page .first").html("0" + box_index);
  //
  //       //console.log(tl);
  //       if (typeof tl != "undefined") {
  //         currentTween1 = tl;
  //         setTimeout(function () {
  //           currentTween1.pause();
  //           currentTween1.progress(100);
  //         }, 500);
  //       }
  //
  //       if (typeof tl2 != "undefined") {
  //         currentTween2 = tl2;
  //         setTimeout(function () {
  //           currentTween2.pause();
  //           currentTween2.progress(100);
  //         }, 500);
  //       }
  //
  //       //New Box In
  //       tl = new TimelineMax({
  //         delay: 0, repeat: 0, repeatDelay: 0, onComplete: function () {
  //
  //           //$(".bg_wrap").not(".slide_img0"+box_index+" .bg_wrap").removeClass("expanding");
  //         }
  //       });
  //       tl
  //       .to($(".slide_img0" + box_index), 1, {y: '-2%', autoAlpha: 1, ease: Power4.easeInOut})
  //       .to($(".slide_img0" + box_index), 1, {y: '0%', autoAlpha: 1, ease: Power0.easeNone});
  //
  //       //New Text In
  //       tl2 = new TimelineMax({
  //         delay: 0, repeat: 0, repeatDelay: 0, onComplete: function () {
  //
  //           //$(".bg_wrap").not(".slide_img0"+box_index+" .bg_wrap").removeClass("expanding");
  //         }
  //       });
  //       tl2
  //       .to($(".txt_overflow0" + box_index), 1, {y: '-5%', autoAlpha: 1, ease: Elastic.easeInOut.config(1, 1)})
  //       .to($(".txt_overflow0" + box_index), 1.5, {y: '0%', autoAlpha: 1, ease: Power0.easeNone});
  //
  //       //TweenMax.to($(".txt_overflow0" + box_index), 1.5, {y: '0%', autoAlpha: 1, ease: Elastic.easeInOut.config(1, 1)});
  //
  //       setTimeout(function () {
  //         isIng = false;
  //       }, 1000);
  //
  //       if (box_index == 2) {
  //         //tweenBgExpanding2 = TweenMax.to($(".slide_img0"+box_index+" .bg_wrap"), 20, {scale: "1.3", ease: Power0.easeNone});
  //       } else if (box_index == 3) {
  //         //tweenBgExpanding3 = TweenMax.to($(".slide_img0"+box_index+" .bg_wrap"), 20, {scale: "1.3", ease: Power0.easeNone});
  //       }
  //
  //       $(".slide_img0" + box_index + " .bg_wrap").addClass("expanding");
  //     }
  //
  //   } else {
  //     isIng = false;
  //   }
  // };
  //
  // var scrollUp = function () {
  //   if (index > 0 && $(".wrap_scroll_page").scrollTop() == 0) {
  //     preventScroll = true;
  //     //console.log(index, box_index);
  //     if (index != 2 || (index == 2 && box_index == 1)) {
  //       TweenMax.to($(".wrap_page0" + index), 0.7, {
  //         y: '100%', ease: Power2.easeInOut, onComplete: function () {
  //           isIng = false;
  //
  //           if (index == 0) {
  //             TweenMax.set($(".video"), {y: '150%', autoAlpha: 0});
  //             try {
  //               var tmp = player.getPlayerState();
  //               if (player.getPlayerState() == YT.PlayerState.PLAYING) {
  //                 player.pauseVideo();
  //               }
  //             } catch (e) {
  //
  //             }
  //           } else if (index == 1) {
  //             TweenMax.set($(".cont02_1 .f_left .img_box"), {autoAlpha: 0});
  //             TweenMax.set($(".txt_overflow01"), {autoAlpha: 0});
  //             TweenMax.set($(".slide_img01"), {autoAlpha: 0});
  //           }
  //
  //           if (index == 0) {
  //             paginationChange(1);
  //           } else if (index == 1) {
  //             paginationChange(2);
  //           } else if (index == 2) {
  //             paginationChange(3);
  //           } else if (index == 3) {
  //             paginationChange(4);
  //           }
  //         }
  //       });
  //       index--;
  //       pageindex--;
  //       if (index == 1) {
  //         try {
  //           var tmp = player.getPlayerState();
  //
  //           if (player.getPlayerState() == YT.PlayerState.UNSTARTED || player.getPlayerState() == YT.PlayerState.PAUSED
  //               || player.getPlayerState() == YT.PlayerState.CUED) {
  //             player.playVideo();
  //           }
  //         } catch (e) {
  //
  //         }
  //
  //         //TweenMax.to($(".video"), 1, {y: '-0%', autoAlpha: 1, ease: Elastic.easeInOut.config(1, 1)});
  //         tl = new TimelineMax({
  //           delay: 0.5, repeat: 0, repeatDelay: 0, onComplete: function () {
  //           }
  //         });
  //         tl
  //         .to($(".video"), 0.5, {
  //           y: '4%', autoAlpha: 1, ease: Power4.easeOut, onComplete: function () {
  //             try {
  //               var tmp = player.getPlayerState();
  //
  //               if (player.getPlayerState() == YT.PlayerState.UNSTARTED || player.getPlayerState() == YT.PlayerState.PAUSED
  //                   || player.getPlayerState() == YT.PlayerState.CUED) {
  //                 player.playVideo();
  //               }
  //             } catch (e) {
  //
  //             }
  //
  //           }
  //         })
  //         .to($(".video"), 1, {
  //           y: '0%', autoAlpha: 1, ease: Power0.easeNone, onComplete: function () {
  //
  //           }
  //         });
  //
  //       }
  //
  //     } else {
  //       TweenMax.to($(".slide_img0" + box_index), 1, {y: '100%', autoAlpha: 0, ease: Elastic.easeInOut.config(1, 1)});
  //       TweenMax.to($(".cont02_1 .f_left .img_box"), 0.7, {delay: -0.3, autoAlpha: 1, ease: Power2.easeInOut});
  //       TweenMax.to($(".txt_overflow0" + box_index), 0.5, {y: '100%', autoAlpha: 0, ease: Elastic.easeInOut.config(1, 1)});
  //       box_index--;
  //       pageindex--;
  //       $(".slide_img0" + box_index + " .bg_wrap").removeClass("expanding");
  //       $(".num_page .first").html("0" + box_index);
  //
  //       if (typeof tl != "undefined") {
  //         currentTween1 = tl;
  //         setTimeout(function () {
  //           currentTween1.pause();
  //           currentTween1.progress(100);
  //         }, 500);
  //       }
  //
  //       if (typeof tl2 != "undefined") {
  //         currentTween2 = tl2;
  //         setTimeout(function () {
  //           currentTween2.pause();
  //           currentTween2.progress(100);
  //         }, 500);
  //       }
  //
  //       tl = new TimelineMax({
  //         delay: 0, repeat: 0, repeatDelay: 0, onComplete: function () {
  //
  //           //isIng = false;
  //           //$(".bg_wrap").not(".slide_img0"+box_index+" .bg_wrap").removeClass("expanding");
  //         }
  //       });
  //       tl
  //       .to($(".slide_img0" + box_index), 1, {y: '2%', autoAlpha: 1, ease: Power4.easeInOut})
  //       .to($(".slide_img0" + box_index), 1, {y: '0%', autoAlpha: 1, ease: Power0.easeNone});
  //
  //       tl2 = new TimelineMax({
  //         delay: 0, repeat: 0, repeatDelay: 0, onComplete: function () {
  //           //$(".bg_wrap").not(".slide_img0"+box_index+" .bg_wrap").removeClass("expanding");
  //         }
  //       });
  //       tl2
  //       .to($(".txt_overflow0" + box_index), 1, {y: '-5%', autoAlpha: 1, ease: Elastic.easeInOut.config(1, 1)})
  //       .to($(".txt_overflow0" + box_index), 1.5, {y: '0%', autoAlpha: 1, ease: Power0.easeNone});
  //
  //       //TweenMax.to($(".txt_overflow0" + box_index), 0.5, {y: '0%', autoAlpha: 1, ease: Elastic.easeInOut.config(1, 1)});
  //
  //       setTimeout(function () {
  //         isIng = false;
  //       }, 1000);
  //
  //       if (box_index == 1) {
  //         //tweenBgExpanding1 = TweenMax.to($(".slide_img0"+box_index+" .bg_wrap"), 20, {scale: "1.3", ease: Power0.easeNone});
  //       } else if (box_index == 2) {
  //         //tweenBgExpanding2 = TweenMax.to($(".slide_img0"+box_index+" .bg_wrap"), 20, {scale: "1.3", ease: Power0.easeNone});
  //       }
  //
  //       $(".slide_img0" + box_index + " .bg_wrap").addClass("expanding");
  //     }
  //   } else {
  //     isIng = false;
  //     preventScroll = false;
  //   }
  //
  //   if (index < 3) {
  //     $("html").addClass("full");
  //   }
  // };
  //
  // var page = 1;
  // var paginationChange = function (pg) {
  //   //console.log("page", pg);
  //   $(".pagination ul li").removeClass("on_sky on_black");
  //   //$(".pagination ul").removeClass("white black");
  //
  //   if (pg == 1) {
  //     page = 1;
  //     $(".pagination ul").removeClass("gray");
  //     $(".pagination ul").addClass("white");
  //     $(".pagination ul li").eq(0).addClass("on_sky");
  //
  //     $(".logo_set, .arrow_set").removeClass("bk").addClass("wh");
  //     $(".side_txt_set").removeClass("page01 page02 page03 page04 page05 white gray");
  //   } else if (pg == 2) {
  //     page = 2;
  //     $(".pagination ul").removeClass("gray");
  //     $(".pagination ul").addClass("white");
  //     $(".pagination ul li").eq(1).addClass("on_black");
  //
  //     $(".logo_set, .arrow_set").removeClass("bk").addClass("wh");
  //     $(".side_txt_set").removeClass("page01 page02 page03 page04 page05 white gray");
  //     $(".side_txt_set").addClass("white page01");
  //   } else if (pg == 3) {
  //
  //   } else if (pg == 4) {
  //
  //   } else if (pg == 5) {
  //
  //   } else if (pg == 6) {
  //     page = 6;
  //     index = 5;
  //
  //     if ($(".pagination ul").hasClass("white")) {
  //       $(".pagination ul").removeClass("white");
  //       $(".pagination ul").addClass("gray");
  //     }
  //
  //     $(".pagination ul li").eq(5).addClass("on_black");
  //
  //     $(".logo_set, .arrow_set").removeClass("wh").addClass("bk");
  //     $(".arrow_set").fadeOut();
  //     $(".side_txt_set").removeClass("page01 page02 page03 page04 page05 white");
  //     $(".side_txt_set").addClass("gray page05");
  //   }
  // };
  //
  // var scrollDetect = function () {
  //   var wHeight = $(window).height();
  //   $(".wrap_height_sync").height(wHeight);
  //
  //   var scrolPage_top = $(".wrap_scroll_page").offset().top;
  //   var section05_top = $(".slide_box").offset().top;
  //   var section06_top = $(".wrap_cont05").offset().top;
  //   var winSC = $(".wrap_scroll_page").scrollTop();
  //   var winH = $(window).height();
  //   var winH_Half = winH / 2;
  //
  //   if (scrolPage_top == 0 && winH_Half < section05_top) {
  //     paginationChange(4);
  //     pageindex = 4;
  //   } else if (winH_Half >= section05_top && winH_Half < section06_top) {
  //     paginationChange(5);
  //     pageindex = 4;
  //     $('.slide_set').slick("slickPlay");
  //
  //   } else if (winH_Half >= section06_top) {
  //     pageindex = 4;
  //     paginationChange(6);
  //   }
  //
  //   if (winH >= section06_top) {
  //     $(".wrap_fixed .btn_hope_set").fadeOut();
  //   } else {
  //     $(".wrap_fixed .btn_hope_set").fadeIn();
  //   }
  // };
  //
  // var resizeDetect = function () {
  //   // 800/1760
  //   var ratio = 800 / 1760;
  //   //1359 * 0.4062
  //
  //   var box_ratio_1920 = 1000 / 1760;
  //   var box_ratio_1440 = 830 / 1280;
  //   var box_ratio_1280 = 740 / 1120;
  //
  //   var slide_width = $(".slide_box").width() - 160;
  //   var white_box_width = Math.round(slide_width * 0.45511363);
  //   //$(".slide_btn_set").width(100);
  //   $(".slide_btn_set").css({"width": white_box_width + "px"});
  //
  //   var winW = $(window).width();
  //   var box_ratio;
  //   if (winW >= 1920) {
  //     box_ratio = box_ratio_1920;
  //   } else if (winW >= 1440 && winW < 1920) {
  //     box_ratio = box_ratio_1440;
  //   } else if (winW < 1440) {
  //     box_ratio = box_ratio_1280;
  //   }
  //
  //   slide_padding_top = Math.round($(".slide_set").width() * box_ratio);
  //   $(".slide_box").css({"padding-top": slide_padding_top + "px"});
  // };
  //
  // var video_ready = function () {
  //   if ($("html").hasClass("ie-super-old")) {
  //     return;
  //   }
  //   if (!YTLoad) {
  //     setTimeout(function () {
  //       video_ready();
  //     }, 500);
  //     return;
  //   }
  //   player = new YT.Player('video_player', {
  //     height: '100%',
  //     width: '100%',
  //     playerVars: {
  //       'showinfo': 0,
  //       'loop': 1,
  //       'autohide': 0,
  //       'controls': 0,
  //       'modestbranding': 1,
  //       'rel': 0,
  //       'disablekb': 1,
  //       'ecver': 2,
  //       'origin': 'https://www.unicef.or.kr/',
  //       'enablejsapi': 1
  //     },
  //     videoId: 'pi_00mh0jcA',
  //     events: {
  //       'onReady': onPlayerReady,
  //       'onStateChange': onPlayerStateChange
  //     }
  //   });
  // };
  //
  // return {
  //   init: init,
  //   resizeDetect: resizeDetect,
  //   video: video_ready
  // }
})();

$(function () {
  main.init();
});
