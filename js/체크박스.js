 $(document)
   .on('click','#txtname',function(){
    //checkbox  is = :checked ��� //prop�� checked//
     if($('#attend').is(':checked')==true){
         //prop=�Ӽ�//
         $('#attend').prop('checked',false);
      }else{
         $('#attend').prop('checked',true);
      }
     
       return false;
    })