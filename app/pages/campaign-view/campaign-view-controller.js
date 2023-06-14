'use strict';

$(document).on('click', '.button-slider', function () {
  if ($(this).next().is(':hidden')) {
    $(this).next().slideDown('slow');
    $(this).parent().addClass('hidden-organization');
  } else {
    $(this)
      .next()
      .slideUp('slow', () => {
        $(this).parent().removeClass('hidden-organization');
      });
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

// Testing reading from database:
const characters = ['Char 1', 'Char 2', 'Char 3!'];
const characterScreen = $('#character-screen');

$(function () {
  console.log('Loading characters...');
  for (let i = 0; i < characters.length; i++) {
    if (i % 2 === 0) {
      characterScreen[0].insertAdjacentHTML(
        'beforeend',
        `<div class="w-100"></div>`
      );
    }

    characterScreen[0].insertAdjacentHTML(
      'beforeend',
      `<div class="p-3 col-md-4 justify-content-center character-container">
      <button  type="submit"  class="btn btn-dark themys-button themys-button-transp button-slider">
      ${characters[i]}
      </button>
      <div class="hidden-content">
      <p>Name: Haotran</p>
      <p>Level: 12</p>
      <p>Class: Assassin</p>
      <p>Class Lvl: 12</p>
    </div>
      </div>`
    );
    console.log(characters[i]);
  }

  $('.hidden-content').hide();
});
