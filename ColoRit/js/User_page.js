if (window.addEventListener) window.addEventListener("load", init, false); // initialization - ини-ши-лай-зэйшыон
else if (window.attachEvent) window.attachEvent("onload", init);

function init() {
    intputLog = document.getElementsByName("login")[0]; //.onchange = loginOnChange;
    document.getElementsByName("password")[0].onchange = pas1OnChange;
    document.getElementsByName("password")[1].onchange = pas2OnChange;

    comparep1 = document.getElementsByName("password")[0];
    comparep2 = document.getElementsByName("password")[1];

    textlog = "Введите логин";
    setuplog();

    intputLog.onfocus = function () {
        if (intputLog.value == textlog) {
            intputLog.value = "";
            intputLog.style.color = "black";
            intputLog.style.fontStyle = "normal";
        }
    }

    intputLog.onblur = function () {
        if (intputLog.value == "") {
            setuplog();
        }
        else {
            logOnChange();
        }
    }
    var form = document.forms[0];
    form.onsubmit = onsubmiHandler;
}

function setuplog() {
    intputLog.value = textlog;
    intputLog.style.color = "gray";
    intputLog.style.fontStyle = "italic";
}

function logOnChange() {
    var pattern = "^[a-zA-Z0-9-_\.]{1,20}$";
    validate(intputLog, pattern);
}

function pas1OnChange() {
    var pattern = "^[a-zA-Z0-9]{1,20}$";
    validate(this, pattern);
}

function pas2OnChange() {
    var pattern = "^[a-zA-Z0-9]{1,20}$";
    validate(this, pattern);
}

function validate(elem, pattern) {
    var result = elem.value.search(pattern);
    if (result == -1) elem.style.background = "red";
    else elem.style.background = "white";
}

function onsubmiHandler() {

    var invalid = false;
    var invalidpass = false;

    if (intputLog.value == textlog || pas1OnChange.value == "" || pas1OnChange.value == "" || intputLog.style.background == "red") {
        invalid = true;
    }

    if (comparep1.value != comparep2.value) {
        invalidpass = true;
    }

    if (invalidpass) {
        alert("Пароли не одинаковы");
        return false;
    }

    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        return false; // отмена отправки формы.
    }
}

//if (window.addEventListener) window.addEventListener("load", init, false);
//else if (window.attachEvent) window.attachEvent("onload", init);

////          window.onload=function(){};
////              или
//            window.addEventListener("load",function(){
                
//                //Вешаю фокус
//                var textLogin = "Введите логин";
                
//                intputLogin = document.forms[0].login; //(тут нужно обратиться к forms[0] т.к. я её не называл через name и без name к login  не обращусь) или intputLogin = document.getElementsByName("login")[0] - все равно мы обращаемся к имени элимента name="login"(НО! getElementsByName("login") ищет по имени в document и ему плевать, названы ли как-то до него формы или элименты ) - <input type="text" name="login" />
//                initInputL();
                
//                function initInputL (){
//                    intputLogin.value=textLogin;
//                    intputLogin.style.color="gray";
//                    intputLogin.style.fontStyle="italic";
//                }
                
//                intputLogin.onfocus = function (){
//                    if(intputLogin.value==textLogin)
//                    {
//                        intputLogin.value="";
//                        intputLogin.style.color="black";
//                        intputLogin.style.fontStyle="normal";
//                    }
//                }
                
//                intputLogin.onblur = function ()
//                {
//                    if(intputLogin.value=="")
//                    {
//                        initInputL();
//                    }
//                }                 
                          
//                 document.forms[0].addEventListener("submit", function (e) { // Действие по умолчанию для события submit - отправка значения на сервер.
//                var isValid = true; // Делаем предположение, что форма заполнена корректно.

////                var loginT = document.getElementsByName("login")[0], // или document.forms[0].login, - одинаковая запись
//                   var passwordT = document.getElementsByName("password")[0];

//                // если условие сработает значение в форме будет считаться не правильным.
//                if (intputLogin.value.length == 0 || intputLogin.value == textLogin)
//                    isValid = false;
                
//                if (passwordT.value.length == 0) 
//                    isValid = false;
                

//                // В случае если форма заполнена не правильно - отображаем сообщение об ошибке 
//                // и предотвращаем отправку запроса с помощью вызова preventDefault() на объекте (е)
//                if (!isValid) {
//                    e.preventDefault();
//                    alert("Вcе поля вводов должны быть заполнены");
//                }
//            });
//            })