/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Drupal.behaviors.lyric_sheet_chords = function (context) {
  $('a.remove-chords:not(.remove-chords-processed)', context)
  .click(function(){
    $('span.chord').remove();
    $(this).remove();
    return false;
  })
  .addClass('ogfc-clickLink-processed');
}
