const labContent = {
    1: {
        condition: "Умова лабораторної роботи 1: Зробити багатосторінковий web-сайт.",
        resultLink: "index.html",
        codeLink: "index.html"
    },
    2: {
        condition: `Умова лабораторної роботи 2:
        2.1 Варіант 2. Вертикальне дворівневе меню, яке розкривається при наведенні покажчика миші. Другий рівень меню приховується, коли вказівник миші залишає область вибраного пункту або меню.
        2.2 Варіант 9. Організуйте рух зображення з лівого верхнього кута вікна до правого нижнього.`,
        resultLink1: "/lab2/Lab2_1.html",
        resultLink2: "/lab2/Lab2_2.html",
        codeLink1: "/lab2/code2_1.html",
        codeLink2: "/lab2/code2_2.html"
    },
    3: {
        condition: `Умова лабораторної роботи 3: 9) Гра «М&#39;ячі, що падають». Ігровим полем зверху вниз у випадковому порядку падають м&#39;ячі, які потрібно ловити кошиком, що пересувається за допомогою клавіатури горизонтально вздовж нижньої межі ігрового поля. Гра можна почати і припинити клацанням по відповідній кнопці.`,
        resultLink: "/lab3/lab3.html",
        codeLink: "/lab3/code3.html"
    },
    4: {
        condition: `Умова лабораторної роботи 4: 
        Створини форму реєстрації з малою кіл. спроб
        9. Дана рядок &#39;aba aea aca aza axa aa a+aa*a&#39;. Напишіть регулярний вираз, який знайде рядки aba, aa, a+a, a*a, не торкнувшись інших.`,
        resultLink: "/lab4/lab4.html",
        codeLink: "/lab4/code4.html"
    },
    5: {
        condition: `Умова лабораторної роботи 5: 
        5.1 9) За наведенням курсору на текстове поле виводити модальне вікно зі значенням цього поля
        5.2 9) Блок блакитного кольору рухається зверху вниз, збільшується, стає синім, переміщається у початкову точку, зменшується`,
        resultLink1: "/lab5/Lab5_1.html",
        resultLink2: "/lab5/Lab5_2.html",
        codeLink1: "/lab5/code5_1.html",
        codeLink2: "/lab5/code5_2.html"
    },
    6: {
        condition: `Умова лабораторної роботи 6:
        9. Фраза в зеленій рамці : Від топота копит пил по полю летить.
        _______________________________________________________________
        1. З&#39;являється в нижньому лівому куті вікна браузера
        2. Змінюється колір рамки на червоний
        3. Рухається у протилежний кут вікна браузера
        4. Зникає фраза (рамка залишається)
        5. Рухається до нижньої межі вікна браузера
        6. З&#39;являється фраза`,
        resultLink: "/lab6/lab6.html",
        codeLink: "/lab6/code6.html"
    },
    7: {
        condition: `Умова лабораторної роботи 7:
        Варіант 9
        Інформація про пропозиції туристичної агенції :
        - Країна;
        - Тип туру (екскурсія, індивідуальний тур, тур вихідного дня);
        - Опис туру;
        - гарячий тур ( непарний елемент );
        - Вартість;
        - Кількість.`,
        resultLink: "/lab7/lab7.html",
        codeLink: "/lab7/code7.html"
    },
    8: {
        condition: `Умова лабораторної роботи 8:
        1. Створити опис структури документа XML за допомогою DTD-схеми.
        2. Виконати опис структури документа XML за допомогою XML Schema .`,
        resultLink: "/lab8/lab8.html",
        codeLink: "/lab8/lab8.html"
    },
    9: {
        condition: `Умова лабораторної роботи 9:
        1. Створіть власні шаблони XSL. Як вихідний файл використовуйте результати робіт 6 і 7.
        2. Виконайте сортування записів за одним із можливих критеріїв.`,
        resultLink: "/lab9/lab9.html",
        codeLink: "/lab9/code9.html"
    },
    10: {
        condition: `Умова лабораторної роботи 10:`,
        resultLink: "/lab10/lab10.html",
        codeLink: "/lab10/code10.html"
    }
};
function loadLabContent(labNumber) {
    const content = labContent[labNumber];
    if (content) {
        let labConditionHTML = `
            <p>${content.condition.replace(/\n/g, '</p><p>')}</p> <!-- Adds paragraph breaks for each line -->
        `;

        // Для лабораторної роботи 2 додаємо дві кнопки для двох варіантів
        if (labNumber === 2) {
            labConditionHTML += `
                <a href="${content.resultLink1}" target="_blank">
                    <button class="sub-button">Переглянути результати виконання роботи (Завдання 2.1)</button>
                </a>
                <a href="${content.codeLink1}" target="_blank">
                    <button class="sub-button">Переглянути код файлів (Завдання 2.2)</button>
                </a>
                <a href="${content.resultLink2}" target="_blank">
                    <button class="sub-button">Переглянути результати виконання роботи (Завдання 2.1)</button>
                </a>
                <a href="${content.codeLink2}" target="_blank">
                    <button class="sub-button">Переглянути код файлів Завдання 2.2)</button>
                </a>
            `;
        } else if (labNumber === 5) {
            // Для лабораторної роботи 5 додаємо варіанти 5.1 та 5.2
            labConditionHTML += `
                <a href="${content.resultLink1}" target="_blank">
                    <button class="sub-button">Переглянути результати виконання роботи (Завдання 5.1)</button>
                </a>
                <a href="${content.codeLink1}" target="_blank">
                    <button class="sub-button">Переглянути код файлів (Завдання 5.1)</button>
                </a>
                <a href="${content.resultLink2}" target="_blank">
                    <button class="sub-button">Переглянути результати виконання роботи (Завдання 5.2)</button>
                </a>
                <a href="${content.codeLink2}" target="_blank">
                    <button class="sub-button">Переглянути код файлів (Завдання 5.2)</button>
                </a>
            `;
        } else {
            labConditionHTML += `
                <a href="${content.resultLink}" target="_blank">
                    <button class="sub-button">Переглянути результати виконання роботи</button>
                </a>
                <a href="${content.codeLink}" target="_blank">
                    <button class="sub-button">Переглянути код файлів</button>
                </a>
            `;
        }

        // Обновляем содержимое с измененной HTML-структурой
        document.getElementById('labContent').innerHTML = labConditionHTML;
    } else {
        document.getElementById('labContent').innerHTML = "Немає даних для цієї лабораторної роботи.";
    }
}

