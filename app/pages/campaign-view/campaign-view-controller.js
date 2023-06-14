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

const getCharacters = () => {
  console.log('Getting characters...');

  return new Promise((resolve, reject) => {
    $.ajax({
      url: '/recover-characters',
      method: 'GET',
      success: function (response) {
        console.log(response);
        resolve(response);
      },
      error: function (error) {
        console.error(error);
        reject(new Error('Error retrieving characters'));
      },
    });
  });
};

$(async function () {
  let characters = ['Char 1', 'Char 2', 'Char 3!'];

  const characterScreen = $('#character-screen');

  characters = await getCharacters();

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
      ${characters[i].name}
      </button>
      <div class="hidden-content">
      <p>Name: ${characters[i].name}</p>
      <p>Level: ${characters[i].characterLevel}</p>
      <p>Class: ${characters[i].baseClass}</p>
      <p>Class Lvl: ${characters[i].baseClassLevel}</p>
    </div>
      </div>`
    );
    console.log(characters[i].name);
  }

  $('.hidden-content').hide();
});
