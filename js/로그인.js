<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jquery</title>
</head>
<body>
 <table>
  <tr>
      <td align="right">�Ǹ�</td>
      <td><input type="text" id="txtname" size=20></td>
  </tr>
  <tr>
      <td>�������</td>
      <td><input type="date" id="txtbirth"></td></tr>
 
   <tr>
    <td>����</td>
   <td><input type="radio"name="female" value="����" id="female" name="gender">����&nbsp;
        <input type="radio"name="male" value="����"id="male" name="gender">����</td>
  </tr>
  <tr>
      <td>����ھ��̵�</td>
      <td><input type="text"id="userid" size="12"></td>
  </tr>
  <tr>
      <td>��й�ȣ</td>
      <td><input type="password" id="passcode1" size="12"></td>
      <tr><td>��й�ȣ Ȯ��</td></tr>
      <td><input type="password" id="passcode2" size="12"></td>
      <tr><td>��������</td>
        <td><select id="selArea">
            <option>����</option><option>���</option>
            <option>����</option><option>�泲</option>
            <option>���</option><option>�泲</option>
            <option>���</option><option>����</option>
            <option>����</option><option>����</option>
        </select></td></tr>
        <tr><td>���ɺо�</td></tr>
        <td>
        <input type="checkbox"value="��ȭ" id="movie">��ȭ
        <input type="checkbox" value="������" id="sports">������
        <input type="checkbox"value="����"  id="travel">����
        <input type="checkbox"value="����"  id="enter">����
        <input type="checkbox"value="��ġ"  id="politics">��ġ
        <input type="checkbox" value="����" id="economy">����
        </td></tr>
        <tr><td colspan="2">
        <input type="button"id="show"value="�Էº���">&nbsp;
        <input type="button"id="reset" value="����">
    
    </td></tr>
  

 </table>

</body>
<script  src="https://code.jquery.com/jquery-3.5.0.js"></script>

<script language="javascript">
    $(document)
   .on('click','#reset',function(){
       if($("#reset").val()=="����"){
            $('#passcode1').val('');
            $('#passcode2').val('');
            $('#userid').val('');
            $('#txtname').val('');
            $('#txtbirth').val('');
            $("#movie").prop("checked", false); 
            $("#sports").prop("checked", false); 
            $("#travel").prop("checked", false); 
            $("#enter").prop("checked", false); 
            $("#politics").prop("checked", false); 
            $("#economy").prop("checked", false); 
            $("input:checkbox[name='NAME']").attr("checked", false);
            $("input:radio[name='female']:radio[value='����']").prop("checked",false);
            $("input:radio[name='male']:radio[value='����']").prop("checked",false);
   }
})
.on('click','#show',function(){
    if($("#show").val()=="�Էº���"){
        str1= $('#userid').val();
        str2= $('#passcode1').val();
        str3= $('#passcode2').val();
        str4= $('#txtname').val();
        str5= $('#txtbirth').val();
    }
    alert(str1+("\n")+str2+("\n")+str3+("\n")+str4+("\n"));


})
    //select gender Ŭ���� ���������� ���� ��ư�� �ش缺���� üũ�ǵ��� //
    /*$(document)
   .on('click','#gender',function(){
       if($("#gender").val()=="female"){
        $('input:radio[id=female]').prop('checked',true);
       }else{
        $('input:radio[id=male]').prop('checked',true);

       }
    
     return false;
    
    })*/

</script>
</html>