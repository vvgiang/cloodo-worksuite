jQuery(document).ready(function($) {
    $('button.gethref').click(function(){
       var dataHref = $(this).attr('data-href');
       console.log(dataHref);
        $('.posthref').attr('href',dataHref);
    });
    $('#show').change(function(){
        var a = $(this).val();
        alert(a);
        $.get('ajax.php',{val:a},function(data){
        });
    });
});