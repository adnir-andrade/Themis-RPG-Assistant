'use strict';

$('.hidden-content').hide();

$('.button-slider').on('click', function () {
  if ($(this).next().is(':hidden')) {
    $(this).next().slideDown('slow');
  } else {
    $(this).next().slideUp('slow');
  }
});

// Fancy Buttons again, but this one with jQuery. TODO: Refactor to Util
$('.custom-button').each(function () {
  $(this).on('mouseover', () => {
    $(this).css({
      'mix-blend-mode': 'overlay',
      background:
        'radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 70%)',
    });
  });
});

$('.custom-button').each(function () {
  $(this).on('mouseout', () => {
    $(this).css({
      'mix-blend-mode': '',
      background: '',
    });
  });
});

$(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const campaignName = urlParams.get('name');
  $('.title').text(campaignName);
});

$('#add').on('click', () => {
  const url = '/character-creation';
  window.location.href = url;
});
