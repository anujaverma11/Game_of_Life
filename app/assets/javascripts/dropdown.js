$(document).ready(function(){

  // Dropdown to select Block pattern live cells
  $(".block").on("click", function() {
    $('td.live').addClass("dead");
    $('td').removeClass('live');
    $('#X21_23,#X21_24,#X22_23,#X22_24').addClass("live");
    $('#X21_23,#X21_24,#X22_23,#X22_24').removeClass('dead');
  });

  // Dropdown to select Beehive pattern live cells
  $(".beehive").on("click", function() {
    $('td.live').addClass("dead");
    $('td').removeClass('live');
    $('#X21_23,#X21_24,#X22_22,#X22_25,#X23_23,#X23_24').addClass("live");
    $('#X21_23,#X21_24,#X22_22,#X22_25,#X23_23,#X23_24').removeClass('dead');
  });

  // Dropdown to select loaf pattern live cells
  $(".loaf").on("click", function() {
    $('td.live').addClass("dead");
    $('td').removeClass('live');
    $('#X20_27,#X20_28,#X21_26,#X21_29,#X22_27,#X22_29,#X23_28').addClass("live");
    $('#X20_27,#X20_28,#X21_26,#X21_29,#X22_27,#X22_29,#X23_28').removeClass('dead');
  });

  // Dropdown to select boat pattern live cells
  $(".boat").on("click", function() {
    $('td.live').addClass("dead");
    $('td').removeClass('live');
    $('#X20_21,#X20_22,#X21_21,#X21_23,#X22_22').addClass("live");
    $('#X20_21,#X20_22,#X21_21,#X21_23,#X22_22').removeClass('dead');
  });

  // Dropdown to select blinker pattern live cells
  $(".blinker").on("click", function() {
    $('td.live').addClass("dead");
    $('td').removeClass('live');
    $('#X19_24,#X20_24,#X21_24').addClass("live");
    $('#X19_24,#X20_24,#X21_24').removeClass('dead');
  });

  // Dropdown to select toad pattern live cells
  $(".toad").on("click", function() {
    $('td.live').addClass("dead");
    $('td').removeClass('live');
    $('#X21_22,#X21_23,#X21_24,#X22_21,#X22_22,#X22_23').addClass("live");
    $('#X21_22,#X21_23,#X21_24,#X22_21,#X22_22,#X22_23').removeClass('dead');
  });

  // Dropdown to select beacon pattern live cells
  $(".beacon").on("click", function() {
    $('td.live').addClass("dead");
    $('td').removeClass('live');
    $('#X20_22,#X20_23,#X21_22,#X21_23,#X22_24,#X22_25,#X23_24,#X23_25').addClass("live");
    $('#X20_22,#X20_23,#X21_22,#X21_23,#X22_24,#X22_25,#X23_24,#X23_25').removeClass('dead');
  });

  // Dropdown to select pulsar pattern live cells
  $(".pulsar").on("click", function() {
    $('td.live').addClass("dead");
    $('td').removeClass('live');
    $('#X17_23,#X17_29,#X18_23,#X18_29,#X19_23,#X19_24,#X19_28,#X19_29,#X21_19,#X21_20,#X21_21,#X21_24,#X21_25,#X21_27,#X21_28,#X21_31,#X21_32,#X21_33,#X22_21,#X22_23,#X22_25,#X22_27,#X22_29,#X22_31,#X23_23,#X23_24,#X23_28,#X23_29,#X25_23,#X25_24,#X25_28,#X25_29,#X26_21,#X26_23,#X26_25,#X26_27,#X26_29,#X26_31,#X27_19,#X27_20,#X27_21,#X27_24,#X27_25,#X27_27,#X27_28,#X27_31,#X27_32,#X27_33,#X29_23,#X29_24,#X29_28,#X29_29,#X30_23,#X30_29,#X31_23,#X31_29').addClass("live");
    $('#X17_23,#X17_29,#X18_23,#X18_29,#X19_23,#X19_24,#X19_28,#X19_29,#X21_19,#X21_20,#X21_21,#X21_24,#X21_25,#X21_27,#X21_28,#X21_31,#X21_32,#X21_33,#X22_21,#X22_23,#X22_25,#X22_27,#X22_29,#X22_31,#X23_23,#X23_24,#X23_28,#X23_29,#X25_23,#X25_24,#X25_28,#X25_29,#X26_21,#X26_23,#X26_25,#X26_27,#X26_29,#X26_31,#X27_19,#X27_20,#X27_21,#X27_24,#X27_25,#X27_27,#X27_28,#X27_31,#X27_32,#X27_33,#X29_23,#X29_24,#X29_28,#X29_29,#X30_23,#X30_29,#X31_23,#X31_29').removeClass('dead');
  });

  // Dropdown to select pentadecathlon pattern live cells
  $(".pentadecathlon").on("click", function() {
    $('td.live').addClass("dead");
    $('td').removeClass('live');
    $('#X17_23,#X17_24,#X17_25,#X18_24,#X19_24,#X20_23,#X20_24,#X20_25,#X22_23,#X22_24,#X22_25,#X23_23,#X23_24,#X23_25,#X25_23,#X25_24,#X25_25,#X26_24,#X27_24,#X28_23,#X28_24,#X28_25').addClass("live");
    $('#X17_23,#X17_24,#X17_25,#X18_24,#X19_24,#X20_23,#X20_24,#X20_25,#X22_23,#X22_24,#X22_25,#X23_23,#X23_24,#X23_25,#X25_23,#X25_24,#X25_25,#X26_24,#X27_24,#X28_23,#X28_24,#X28_25').removeClass('dead');
  });

  // Dropdown to select glider pattern live cells
  $(".glider").on("click", function() {
    $('td.live').addClass("dead");
    $('td').removeClass('live');
    $('#X0_1,#X1_2,#X2_0,#X2_1,#X2_2').addClass("live");
    $('#X0_1,#X1_2,#X2_0,#X2_1,#X2_2').removeClass('dead');
  });

  // Dropdown to select spaceship pattern live cells
  $(".spaceship").on("click", function() {
    $('#X1_1,#X1_4,#X2_5,#X3_1,#X3_5,#X4_2,#X4_3,#X4_4,#X4_5').addClass("live");
    $('#X1_1,#X1_4,#X2_5,#X3_1,#X3_5,#X4_2,#X4_3,#X4_4,#X4_5').removeClass('dead');
  });

});