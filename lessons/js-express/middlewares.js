/* eslint-disable no-undef */
// sc:  https://ru.hexlet.io/courses/js-express/lessons/middlewares/exercise_unit

// Часто приложению нужно анализировать клиентов, которые приходят. Например, для
// пользователей ie6 часть функций может быть недоступна, поэтому желательно
// показывать предупреждение. Возможно сайт имеет оптимизированную версию для
// мобильных устройств и при определении оных, подставляет именно эту версию.

// Для подобных задач, нужна возможность удобно оперировать свойствами user-agent.
// В каждом языке есть по несколько популярных решений. Все они сводятся к тому
// что им передается значение заголовка user-agent, а на выходе получается
// ассоциативный массив со всевозможными параметрами.

// solution.js
// Реализуйте и экспортируйте по умолчанию мидлвару, которая добавляет в request
// свойство useragent. Значением поля должен быть объект, полученный в результате
// парсинга заголовка User-Agent используя библиотеку ua-parser-js, которая уже
// импортирована.

// В этом задании нет сервера!

// import UAParser from 'ua-parser-js';

// BEGIN (write your solution here)
export default (req, res, next) => {
    const ua = UAParser(req.headers['user-agent']);
    req.useragent = ua;
    next();
};
// END
