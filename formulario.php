<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>formulario</title>
</head>
<body>
	<form action="index.php" method="post">
		<div>
			<label for="nombre">nombre</label>
			<input type="text" id="nombre" name="nombre">


		</div>
		<br>
		<label for="asicnatura">asicnatura</label>
		<select id="asiganatura" name="asignatura">

		<option value="ingles">ingles</option>
		<option value="matematicas">matematicas</option>
		<option value="calculo">calculo</option>
		<option value="ecologia">ecologia</option>
	</select>
	<br><br>
	<label for="opcion-1">
		<input type="checkbox " value="manzana" id="opcion.1" name="fresa">
		manzana
	</label>

	<br><br><br>
	<button type="submit">enviar</button>


		
	</form>

</body>
</html>