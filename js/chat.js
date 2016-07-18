

<script>
function myFunction() {
    document.getElementById("field1").value = document.getElementById("field2").value;
}
</script>

<script language="javascript" type="text/javascript">
function addtext() {
	var newtext = document.myform.inputtext.value;
	if (document.myform.placement[1].checked) {
		document.myform.outputtext.value = "";
		}
	document.myform.outputtext.value += newtext;
}
</script>
