var testData = [
    { id: 1, name: 'VNIST Company', parent: 0 },
    { id: 2, name: 'Phòng kinh doanh', parent: 1 },
    { id: 3, name: 'Phòng kỹ thuật', parent: 1 },
    { id: 4, name: 'Phòng tài chính', parent: 1 },
    { id: 6, name: 'Division 3', parent: 1 },
    { id: 7, name: 'Division 4', parent: 1 },
    { id: 8, name: 'Division 5', parent: 1 },
    { id: 5, name: 'Sub Division', parent: 3 },

];
$(function () {
    org_chart = $('#orgChart').orgChart({
        data: testData,
        showControls: true,
        allowEdit: true,
        onAddNode: function (node) {
            log('Created new node on node ' + node.data.id);
            org_chart.newNode(node.data.id);
        },
        onDeleteNode: function (node) {
            log('Deleted node ' + node.data.id);
            org_chart.deleteNode(node.data.id);
        },
        onClickNode: function (node) {
            log('Clicked node ' + node.data.id);
        }

    });
});
// just for example purpose
function log(text) {
    $('#consoleOutput').append('<p>' + text + '</p>')
}
// ////////////////
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();