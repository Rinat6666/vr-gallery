<script>
  function goToScene2() {
    // Меняем фон
    document.querySelector('a-sky').setAttribute('src', '6.jpg');

    // Показываем стрелки сцены 2, скрываем сцены 1
    document.querySelector('#scene-1-arrows').setAttribute('visible', 'false');
    document.querySelector('#scene-2-arrows').setAttribute('visible', 'true');
  }

  function goToScene1() {
    document.querySelector('a-sky').setAttribute('src', '4.jpg');

    document.querySelector('#scene-1-arrows').setAttribute('visible', 'true');
    document.querySelector('#scene-2-arrows').setAttribute('visible', 'false');
  }
</script>
