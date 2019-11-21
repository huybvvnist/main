// defind multi select
window.$(document).ready(function () {
    window.$('#multiSelectUnit').multiselect({
        buttonWidth: '160px',
        //   includeSelectAllOption : true,
        nonSelectedText: 'Chọn đơn vị',
        allSelectedText: 'Tất cả đơn vị'
    });
});
window.$(document).ready(function () {
    window.$('#multiSelectUnit1').multiselect({
        buttonWidth: '160px',
        //   includeSelectAllOption : true,
        nonSelectedText: 'Chọn đơn vị',
        allSelectedText: 'Tất cả đơn vị'
    });
});
// defind text area
$(function () {
    //bootstrap WYSIHTML5 - text editor
    window.$('.textarea').wysihtml5()
})