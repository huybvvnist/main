$(function () {
  $('#example1').DataTable()
  $('#example2').DataTable({
    'paging': true,
    'lengthChange': false,
    'searching': false,
    'ordering': true,
    'info': true,
    'autoWidth': false
  })
  $('#example3').DataTable({
    'paging': false,
    'lengthChange': true,
    'searching': true,
    'ordering': true,
    'info': false,
    'autoWidth': true
  })
})