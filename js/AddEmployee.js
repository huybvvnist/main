$(document).ready(function(){

    var check = 0;
    var check1 = 0;
    if (check==0) {
        $("#experience tfoot tr").find("td:eq(0)").html('<center>Chưa có dữ liệu cần nhập vào</center>');
    };
    if (check1==0) {
        $("#certificate tfoot tr").find("td:eq(0)").html("<center>Chưa có dữ liệu cần nhập vào</center>");
    };
    $('[data-toggle="tooltip"]').tooltip();
    var actions = '<a class="add2" title="Lưu" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a><a class="edit2" title="Chỉnh sửa" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a><a class="delete2" title="Xoá" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>';
    // Append table with add row form on add new button click
    // bắt sự kiện thêm mới kinh nghiệm làm việc
    $(".add-new2").click(function(){
        $(this).attr("disabled", "disabled");
        $("#experience tfoot tr").find("td:eq(0)").html("");
        var index = $("#experience tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control pull-right" name="reservation1" placeholder="mm/yy"></td>' +
            '<td><input type="text" class="form-control pull-right" name="reservation2" placeholder="mm/yy"></td>' +
            '<td><input type="text" class="form-control" name="unit" id="unit"></td>' +
            '<td><input type="text" class="form-control" name="position"></td>' +
            '<td>' + actions + '</td>' +
        '</tr>';
        $("#experience").append(row);
        check=check+1;		
        $("#experience tbody tr").eq(index + 1).find(".add2, .edit2").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
    // Add row on add button click
    $(document).on("click", ".add2", function(){
        var empty = false;
        var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
            if(!$(this).val()){
                $(this).addClass("error");
                empty = true;
            } else{
                $(this).removeClass("error");
            }
        });
        $(this).parents("tr").find(".error").first().focus();
        if(!empty){
            input.each(function(){
                $(this).parent("td").html($(this).val());
            });			
            $(this).parents("tr").find(".add2, .edit2").toggle();
            $(".add-new2").removeAttr("disabled");
        }		
    });
    // Edit row on edit button click
    $(document).on("click", ".edit2", function(){	
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
            $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
        });		
        $(this).parents("tr").find(".add2, .edit2").toggle();
        $(".add-new2").attr("disabled", "disabled");
    });
    // Delete row on delete button click
    $(document).on("click", ".delete2", function(){
        
        $(this).parents("tr").remove();
        check = check-1;
        if (check==0) {
            $("#experience tfoot tr").find("td:eq(0)").html("<center>Chưa có dữ liệu cần nhập vào</center>");
        };
        $(".add-new2").removeAttr("disabled");
    });


    // bắt sụ kiện thêm mới bằng cấp chứng chỉ
    var actions1 = '<a class="add1" title="Lưu" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a><a class="edit1" title="Chỉnh sửa" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a><a class="delete1" title="Xoá" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>';

    $(".add-new1").click(function(){
        $(this).attr("disabled", "disabled");
        $("#certificate tfoot tr").find("td:eq(0)").html("");
        var index = $("#certificate tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="name" id="name"></td>' +
            '<td ><input type="file" style="padding: 0 0 0 0" class="form-control" name="file" id="file"></td>' +
            '<td>' + actions1 + '</td>' +
        '</tr>';
        $("#certificate").append(row);	
        check1 = check1 +1;	
        $("#certificate tbody tr").eq(index + 1).find(".add1, .edit1").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
    $(document).on("click", ".add1", function(){
        var empty = false;
        var empty1 = false;
        var input = $(this).parents("tr").find('input[type="text"]');
        var inputfile = $(this).parents("tr").find('input[type="file"]');	
        input.each(function(){
            if(!$(this).val()){
                $(this).addClass("error");
                empty = true;
            } else{
                $(this).removeClass("error");
            }
            inputfile.each(function(){
                if(!$(this).val()){
                    $(this).addClass("error");
                    empty1 = true;
                } else{
                    $(this).removeClass("error");
            }
            });
        });
        $(this).parents("tr").find(".error").first().focus();
        if(!empty&&!empty1){
            input.each(function(){
                $(this).parent("td").html($(this).val());
            });
            inputfile.each(function(){
                $(this).parent("td").html($(this).val().trim());
            });				
            $(this).parents("tr").find(".add1, .edit1").toggle();
            $(".add-new1").removeAttr("disabled");
        }		
        
    });

    $(document).on("click", ".edit1", function(){
        var text = $(this).parents("tr").find("td:first-child").text();
        $(this).parents("tr").find("td:first-child").html('<input type="text" class="form-control" value="' + text+ '">');	
        $(this).parents("tr").find(".add1, .edit1").toggle();
        $(".add-new1").attr("disabled", "disabled");
    });
    $(document).on("click", ".delete1", function(){
        $(this).parents("tr").remove();
        check1 = check1 - 1;
        if (check1==0) {
            $("#certificate tfoot tr").find("td:eq(0)").html("<center>Chưa có dữ liệu cần nhập vào</center>");
        };
        $(".add-new1").removeAttr("disabled");
    });
});