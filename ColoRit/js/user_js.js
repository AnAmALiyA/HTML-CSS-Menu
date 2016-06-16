window.onload = function () {

            // обработка события отправки запроса. Если окажится, что отправляемая форма не верна, то мы открепим обработку события на отправку на сервер.
            document.forms[0].addEventListener("submit", function (e) { // Действие по умолчанию для события submit - отправка значения на сервер.
                var isValid = true; // Делаем предположение, что форма заполнена корректно.

                var login = document.getElementsByName("login")[0],
                    password = document.getElementsByName("password")[0];

                // если условие сработает значение в форме будет считаться не правильным.
                if (login.value.length == 0) {
                    isValid = false;
                }
                if (password.value.length == 0) {
                    isValid = false;
                }

                // В случае если форма заполнена не правильно - отображаем сообщение об ошибке 
                // и предотвращаем отправку запроса с помощью вызова preventDefault() на объекте (е)
                if (!isValid) {
                    e.preventDefault();
                    alert("Вcе поля вводов должны быть заполнены");
                }
            });
    var watermarkLoog = "Введите логин";
            var input = document.forms[0].login;
            initInput();

            input.onfocus = function () { // При получении фокуса.
                if (input.value == watermarkLoog)
                {
                    input.value = "";
                    input.style.color = "black";
                    input.style.fontStyle = "normal";
                }
            }

            input.onblur = function () { // При потери фокуса.
                if (input.value == "")
                {
                    initInput();
                }
            }

            function initInput()
            {
                input.value = watermarkLoog;
                input.style.color = "gray";
                input.style.fontStyle = "italic";
            }

        }