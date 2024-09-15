function showDesc(id) {
    // alert($('#'+id).find('.title').text())

    $('#modesno').text($('#'+id).find('.sno').text());
    // $('#modelpsid').text($('#'+id).find('.title').text());
    $('#modelpstitle').text($('#'+id).find('.title').text());
    $('#modeldesc').text($('#'+id).find('.desc').text());
    $('#modeltheme').text($('#'+id).find('.pstheme').text());

    $('#psModel').show();

}

function closeModel() {
    $('#psModel').hide();
    
}