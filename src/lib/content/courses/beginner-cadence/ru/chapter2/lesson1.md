---
title: Наш первый смарт-контракт
lesson: 1
language: ru
excerpt: первый смарт-контракт
---

# Глава 2 - День 1 - Наш первый смарт-контракт

Здравствуйте, красавцы! Добро пожаловать в главу 2, в которой мы начнем погружаться в реальный код Cadence.

Сегодня мы будем изучать самые основы кода Cadence, реализуя наш первый смарт-контракт. То есть, как объявить переменную, как написать функцию и т.д.

## Видео

Если вы хотите посмотреть видео, вы можете посмотреть эти два видео (они очень похожи):

1. https://www.youtube.com/watch?v=QbqNM4k76B0 (обзор смарт-контрактов, учетных записей и развертывание нашего первого контракта)
2. https://www.youtube.com/watch?v=DSwNNOEdBXU (объяснение базового синтаксиса + развертывание контракта) **ПРИМЕЧАНИЕ**: смотрите это видео с 00:00 до 07:23. Все, что после 07:23, в этом уроке не рассматривается.

## Наш первый смарт-контракт

_Прежде чем продолжить, убедитесь, что вы прочитали Главу 1, День 1. Та глава охватывает все, что вам нужно знать о смарт-контрактах до этого момента._

Для того чтобы начать создавать наш первый смарт-контракт, нам нужно найти место, где его можно разместить! Для этого запустите браузер по вашему выбору (я бы рекомендовал Google Chrome), перейдите на игровую площадку Flow, вставив этот URL: https://play.onflow.org. После этого выполните следующие действия

1. С левой стороны нажмите на вкладку '0x01'.
2. Удалите все, что находится на этой странице.

Это должно выглядеть так:
<img src="/courses/beginner-cadence/blanksc.png" alt="drawing" size="400" />

Что мы сделали, так это нажали на `Аккаунт` с адресом `0x01` и удалили контракт на этом аккаунте. В связи с этим возникает важный вопрос.

### Что такое адрес?

Адрес - это то, что начинается с `0x`, а затем куча случайных цифр и букв. Вот пример адреса на Flow: `0xe5a8b7f23e8b548f`. На игровой площадке Flow вы увидите гораздо более короткие адреса, например `0x01`. Это просто для упрощения.

Но что на самом деле представляет собой адрес? Ну, вы можете думать о них как о пользователях. Когда я хочу что-то сделать на Блокчейне, мне нужно иметь учетную запись. У каждой учетной записи есть адрес, связанный с ней. Поэтому, когда вы видите что-то вроде `0xe5a8b7f23e8b548f`, это действительно просто учетная запись человека, которую он использует для хранения данных, отправки транзакций и т.д.

### Где живут смарт-контракты?

Смарт-контракты - это развернутые счета. Как мы уже говорили, счета принадлежат пользователю, и каждый счет имеет связанный с ним адрес, который всегда начинается с `0x`. В данном случае, поскольку мы находимся на игровой площадке Flow, она автоматически предоставила нам 5 аккаунтов, а именно `0x01`, `0x02` и так далее. Таким образом, смарт-контракты живут по адресу. Поэтому, когда мы развертываем контракт с именем "Hello World" на аккаунте `0x01`, именно так мы его и идентифицируем. Если бы мы хотели взаимодействовать с ним, нам нужно было бы знать и имя контракта, и его адрес. Более подробно мы рассмотрим это позже, когда будем импортировать материал.

### Вернемся к нашему примеру...

В данном случае мы развернем наш смарт-контракт на аккаунте `0x01`. Это означает, что аккаунт `0x01` является **владельцем** этого смарт-контракта. В реальном мире вы бы развернули свой смарт-контракт на **свою** учетную запись, но поскольку это мир имитации, мы можем выбрать любую учетную запись, поэтому мы выбрали `0x01`.

Давайте теперь создадим наш контракт. На пустом месте напечатайте следующее:

```cadence
pub contract HelloWorld {

    init() {

    }
}
```

Название `pub contract [contract name]` будет ВСЕГДА тем, что вы вводите при создании нового контракта. Вы можете заполнить `contract name` любым именем, которым вы хотите назвать свой контракт.

Функция `init()` - это функция, которую ДОЛЖЕН иметь каждый контракт. Она вызывается при первоначальном развертывании контракта, что в реальном мире происходит только один раз. Поэтому мы можем инициализировать некоторые вещи в ней, когда захотим.

Итак, бум! Это ваш первый смарт-контракт, хотя он ничего не делает ;( Давайте заставим его хранить переменную `greeting`, чтобы мы могли хранить некоторые данные в этом контракте.

Измените код вашего контракта так, чтобы он выглядел следующим образом:

```cadence
pub contract HelloWorld {

    pub let greeting: String

    init() {
        self.greeting = "Hello, World!"
    }
}
```

В Cadence, когда вы объявляете переменную, вы следуете следующему формату:

`[access modifier] [var/let] [variable name]: [type]`

Используя наш пример, приведенный выше...

- Наш модификатор доступа - `pub`, он означает, что любой может прочитать эту переменную. В будущем мы увидим множество других модификаторов доступа, но пока будем придерживаться `pub`, чтобы упростить жизнь.
- `let` означает, что эта переменная является константой. Если вы кодили на других языках программирования, то знаете что означает константа, как только мы сделаем эту переменную равной чему-то, мы **не сможем ее изменить**. Однако, `var` мы можем спокойно изменить когда угодно.
- Имя нашей переменной - `greeting`.
- Тип нашей переменной - `String`. Это означает, что мы можем поместить в нее такие вещи, как "Привет", "Джейкоб - лучший", "Я люблю Джейкоба" и т.п.

Далее, мы помещаем `self.greeting = "Hello, World!"` внутрь функции `init()`. Помните, что функция `init()` вызывается при развертывании контракта, что происходит только один раз. `self` - это ключевое слово, которое означает "переменная, находящаяся на один уровень выше". В данном случае `self.greeting` ссылается на переменную `greeting`, которую мы объявили прямо над ней, и мы установили ее равной "Hello, World!".

Чтобы развернуть этот контракт, нажмите зеленую кнопку "Deploy". Ваша страница должна выглядеть следующим образом:

<img src="/courses/beginner-cadence/helloworld.png" alt="drawing" size="400" />

ПРИМЕЧАНИЕ: Если вы получаете ошибки, попробуйте сначала обновить страницу. Если вы все еще видите ошибки, такие как: "GraphQL error", попробуйте переключить браузер на Google Chrome.

Потрясающе!!! Вы развернули свой первый смарт-контракт.

## Чтение нашего приветствия

Давайте убедимся, что наша переменная `greeting` действительно получила значение "Hello, World!". Помните, что мы можем просматривать данные из Блокчейна с помощью скрипта.

С левой стороны, в разделе "Script Templates", нажмите на вкладку с надписью "Script" и удалите все, что находится внутри нее. Далее напишите следующий код:

```cadence
import HelloWorld from 0x01

pub fun main(): String {
    return HelloWorld.greeting
}
```

Этот сценарий вернет значение greeting, которое равно "Hello, World!". Давайте посмотрим, что мы сделали:

1. Сначала мы импортировали наш смарт-контракт, выполнив команду `import HelloWorld from 0x01`. В Cadence вы импортируете контракт, выполнив команду `import [contract name] from [address of that contract]`. Поскольку мы развернули HelloWorld на `0x01`, мы написали так как приведено выше.
2. Далее мы написали функцию. В Cadence вы записываете функцию, выполняя команду `[access modifier] fun [function name](): [return type] { ... }`. В данном случае мы использовали `pub` для нашего модификатора доступа (подробнее об этом позже), назвали нашу функцию `main` и сказали, что мы будем возвращать тип `String`, который, помните, является типом `greeting`.
3. Затем мы обратились к переменной `greeting` из контракта, используя `HelloWorld.greeting`.

Если вы нажмете кнопку "Execute" справа, вы увидите в терминале, что он выводит "Hello, World!", как показано ниже:

<img src="/courses/beginner-cadence/hwscript.png" alt="drawing" size="400">

Если ваш результат выглядит так, то вы выполнили свой первый скрипт!

## Проверка концепции

Итак, мы только что написали код. Это было быстро. Но как все это связано с тем, о чем я говорил в Главе 1, День 1?

Помните, я говорил, что смарт-контракты - это и программы, и свод правил. Они позволяют нам делать определенные вещи, не больше и не меньше. В этом примере наш смарт-контракт позволяет нам инициализировать `greeting` и прочитать `greeting`. Обратите внимание, что он НЕ позволяет нам изменить `greeting` на что-то другое. Если бы мы хотели добавить эту функциональность, нам пришлось бы сделать это заранее, до того, как мы его развернули. Вот почему так важно, чтобы разработчик смарт-контракта реализовал все функциональные возможности, которые вы хотите предоставить пользователю, до того, как вы развернете контракт. Потому что после развертывания вы уже ничего не сможете сделать. (Конечно, на игровой площадке Flow мы можем развернуть контракт снова. Но в реальном мире вы не сможете этого сделать).

## Заключение

Сегодня мы узнали, как развернуть наш первый контракт, объявить переменную, написать функцию и выполнить скрипт. Вот это да! Это очень много. Но это было не так уж плохо, верно?

# Квесты

Для сегодняшнего задания загрузите новую игровую площадку Flow, перейдя по адресу https://play.onflow.org, как мы делали в этом уроке. Вы будете использовать ее для написания кода.

1. Разверните контракт на аккаунте `0x03` под названием "JacobTucker". Внутри этого контракта объявите **константу** переменную с именем `is` и сделайте ее тип `String`. Инициализируйте переменную в "the best", когда ваш контракт будет развернут.

2. Проверьте, что ваша переменная `is` действительно равна "the best", выполнив скрипт для чтения этой переменной. Приложите скриншот вывода.

Это так здорово, что я могу создавать эти квесты. Мне это нравится.

В любом случае, пожалуйста, не забывайте сохранять свои ответы, чтобы я мог просмотреть их, если вы мне их отправите. Удачи!