$(function () {
    var
        $table = $('#tree-table'),
        rows = $table.find('tr');

    rows.each(function (index, row) {
        var
            $row = $(row),
            level = $row.data('level'),
            id = $row.data('id'),
            $columnName = $row.find('td[data-column="name"]'),
            children = $table.find('tr[data-parent="' + id + '"]');

        if (children.length) {
            var expander = $columnName.prepend('' +
                '<span class="treegrid-expander glyphicon glyphicon-chevron-down"></span>' +
                '');

            children.show();

            expander.on('click', function (e) {
                var $target = $(e.target);
                if ($target.hasClass('glyphicon-chevron-down')) {
                    $target
                        .removeClass('glyphicon-chevron-down')
                        .addClass('glyphicon-chevron-right');

                    children.hide();
                    reverseHide($table, $row);
                } else {
                    $target
                        .removeClass('glyphicon-chevron-right')
                        .addClass('glyphicon-chevron-down');

                    children.show();
                    // reverseShow: Nếu bật tại đây thì tất cả các task con cũng sẽ mở
                    // reverseShow($table, $row); 
                }
            });
        }

        $columnName.prepend('' +
            '<span class="treegrid-indent" style="width:' + 15 * level + 'px"></span>' +
            '');
    });

    // Reverse hide all elements
    reverseHide = function (table, element) {
        var
            $element = $(element),
            id = $element.data('id'),
            children = table.find('tr[data-parent="' + id + '"]');

        if (children.length) {
            children.each(function (i, e) {
                reverseHide(table, e);
            });

            $element
                .find('.glyphicon-chevron-down')
                .removeClass('glyphicon-chevron-down')
                .addClass('glyphicon-chevron-right');

            children.hide();
        }
    };
    // Reverse show all elements
    reverseShow = function (table, element) {
        var
            $element = $(element),
            id = $element.data('id'),
            children = table.find('tr[data-parent="' + id + '"]');

        if (children.length) {
            children.each(function (i, e) {
                reverseShow(table, e);
            });

            $element
                .find('.glyphicon-chevron-right')
                .removeClass('glyphicon-chevron-right')
                .addClass('glyphicon-chevron-down');

            children.show();
        }
    };
});

$('#myModalHorizontal').on('hidden.bs.modal', function () {
    window.location.reload();
   })
$('.modal').on('hidden.bs.modal', function () {
    $("body").css("padding-right","0px");
   })