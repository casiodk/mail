jQuery ->

  randomColor = ->
    red   = Math.round Math.random() * 255
    green = Math.round Math.random() * 255
    blue  = Math.round Math.random() * 255

    return "rgba(#{[red, green, blue, '0.8'].join ','})"

  $( '.word' ).each ->
    initialDegree = "#{Math.random() * 10}deg"
    $(@).transit
      rotate: initialDegree
    .css 'background-color', randomColor()

    $(@).hover ->
      $(@).transit rotate: "#{Math.random() * 20}deg"
    , ->
      $(@).transit rotate: initialDegree


