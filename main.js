lightbox.option({
  'maxHeight': 550,
  'resizeDuration': 200,
  'wrapAround': true,
  'showImageNumberLabel': false

});

$(document).ready(function() {
$('#search').hideseek({
      list:           '.hideseek-data',
      nodata:         '',
      attribute:      'data-title',
      matches:        false,
      highlight:      true,
      ignore:         '',
      navigation:     false,
      ignore_accents: false,
      hidden_mode:    false,
      min_chars:      1
});
});
