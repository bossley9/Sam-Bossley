<html>
<head>
<title>Middle Earth</title>
</head>
<style>
@import url(../../css/input.css);
</style>
<body>
 <?PHP
    function redirect($where){      
       header("Location: $where");
    }
    if ($_REQUEST['select2-9'] == 'A2-9'){
        redirect('part3-10.php');
    }elseif($_REQUEST['select2-9'] == 'B2-9'){
        redirect('part2-9.2.php');
    }elseif($_REQUEST['select2-9'] == 'C2-9'){
        redirect('part2-3.php');
    }elseif($_REQUEST['select2-9'] == 'D2-9'){
        redirect('part3-12.php');
    }
 ?>
<br><br><br><br><br>
<center><table style="height:50%;width:50%;">
<tr><td><center>
  He pauses for a second and replies, "Sorry... I do not know how to get of here. I can, however, give you a guide. Would that be ok?"
</center></td></tr>

<tr><td><center>
  <form> 
  <select name="select2-9"> 
  <optgroup label="A">
  <option value="A2-9">Say "Yes!"</option> 
  </optgroup>
  <optgroup label="B">
  <option value="B2-9">Say "Do you know who I am?"</option> 
  </optgroup>
  <optgroup label="C">
  <option value="C2-9">Say "Uhhh....no."</option> 
  </optgroup>
  <optgroup label="D">
  <option value="D2-9">Start chanting in tongues and yell Ali Baba's name repeatedly at the top of your lungs</option> 
  </optgroup>
</center></td></tr>

<tr><td><center>
  <input type="submit" value="next"/>
  </select> 
  </form>
</center></td></tr>

</table></center>

<br>
<center>Back to</center>
<center><a href="../../stealth.html"><img src="../../assets/stealthblack.png"></a></center>

</body>
</html>
