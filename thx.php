<!DOCTYPE html>
<html lang="en">
<head>
  	<link href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"
		crossorigin="anonymous" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>thx</title>
    <style type="text/css">
		body,h1,h2,p,div{ font: normal 14px OpenSans, Segoe UI, Tahoma,sans-serif; }
		body{padding: 40px 10px;text-align:center}
		h1 { font-size: 24px;padding:0;margin: 15px 0;color:#292; }
		p { font-size: 18px;padding:0;margin: 15px 0;color:#111; }
		h2 { font-size: 12px;padding:0;margin: 15px 0;color:blue; }
	   .main {height: 100%;max-width: 400px;}

</style>
</head>
<body>
  <center>
  <div class="card card-solid main">
    <h1>Спасибо за заказ!</h1>
    <p>Мы скоро с вами свяжемся!</p>
    <p>Ваше имя: <p1 style="text-decoration: underline;"><?=$_POST["name"]?></p1></p>
    <p>Ваш телефон: <p1 style="text-decoration: underline;"><?=$_POST["phone"]?></p1></p>
    <h2>*если вы ввели неверные данные <br>перейдите назад и оставьте заявку заново!</h2>
    </div>
    </center>
</body>
</html>