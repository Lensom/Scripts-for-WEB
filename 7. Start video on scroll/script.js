$(document).ready(function () {

// Event click - volume
$('.mute-bt').on('click', function () {
	var video = $(this).closest('.info-video-container').siblings('.video-wrapper').find('video').get(0);

	if ($(this).hasClass('active')) {
		video.muted = false;
		$(this).removeClass('active');
	} else {
		video.muted = true;
		$(this).addClass('active');
	}
});

// 	// Event click - play/pause
$('.play-bt').on('click', function () {
	var video = $(this).closest('.info-video-container').siblings('.video-wrapper').find('video').get(0);

	if ($(this).hasClass('active')) {
		video.pause();
		$(this).removeClass('active');
	} else {
		video.play();
		$(this).addClass('active');
	}
});

var k = $('.vm-video');

// Take the first video and play him when page is load
var firstVideo = k[0];

firstVideo.play();
firstVideo.muted = true;

$(window).scroll(function (e) {
	var offsetRange = $(window).height() / 3,
		offsetTop = $(window).scrollTop() + offsetRange + $(".header").outerHeight(true),
		offsetBottom = offsetTop + offsetRange;

	$(".vm-video").each(function () {
		var y1 = $(this).offset().top;
		var y2 = offsetTop;
		if (y1 + $(this).outerHeight(true) < y2 || y1 > offsetBottom) {
			this.pause();
		} else {
			this.play();
			$('.main-banner .play-bt').addClass('active');
		}
	});
});


$(window).scroll(function (e) {
	var offsetRange = $(window).height() / 3,
		offsetTop = $(window).scrollTop() + offsetRange + $(".header").outerHeight(true),
		offsetBottom = offsetTop + offsetRange;

	$(".sc-video").each(function () {
		var y1 = $(this).offset().top;
		var y2 = offsetTop;
		if (y1 + $(this).outerHeight(true) < y2 || y1 > offsetBottom) {
			this.pause();
		} else {
			this.play();
				$('.scroll-section .play-bt').addClass('active');
		}
	});
});

})


