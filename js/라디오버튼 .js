   $(document)
   .on('click','#txtname',function(){
    //checkbox  is = :checked ��� //prop�� checked//
  var str=$('input:radio[name=gender]:checked').prop('id');
  $('#txtname').val(str);
    })
