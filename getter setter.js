<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jquery</title>
</head>
<body>
    <select id="selCountry">
     <option> korea</option>
     <option> singapore</option>
     <option> usa</option>
     <option> finland</option>
     <option> indonesia</option>
    </select><br>
    <input type="button" value="����" id="btnGO">
    <input type="text" id="txtname1"><br>
    <input type="text" id="txtname2"><br>
    

   
</body>
<script  src ="https://code.jquery.com/jquery-3.5.0.js"></script>
<script language="javascript">
    $(document)
    //�Է��� ���� alert�� ���������//
    .on('click','#btnGO',function(){
    alert($('selCountry').val());
    var pstr=$('#selCountry').val();
    $('#selCountry').val("korea");  
          return false;
        //getter �� �Ķ���Ͱ� ���� ��ȯ�����ִ�//
        //setter�� ��ȯ���� ������ �Ű�����(�Ķ����)���ִ�//


    //�̸� ����� ��ȣ �ּҸ� ������ �ϰ�ʹٸ�//
       // var str1 = $('#txtname').val();
        //var str2 = $('#mobile').val();
        //var str3 = $('#txtaddress').val();
        //alert(str1+("\n")+str2+("\n")+str3);
    //textname1�� ���� txtname2���̵�//
    //txtname1�� �����̵ǰ�//
    //setter//
    //����//
    /*
    $('#txtname2').val($('#txtname1')).val());
    $('#txtname1').val('');
    return false;


    */
    
 
    //getter//
   // $('#txtname2').val(str1);
    //setter �̿��ؼ� ����//
   //str1= $('#txtname1').val('');
    //return false;

    })
    
</script>
</html>