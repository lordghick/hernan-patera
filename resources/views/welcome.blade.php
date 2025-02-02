<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', subject: app()->getLocale()) }}">
<link rel="shortcut icon" href="{{ asset('storage/icons8-fútbol-50.png') }}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Andrea Casales</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Import del app.js -->
    @vite(['resources/js/app.js'])
</head>

<body>
    <div id="app"></div>
</body>

</html>