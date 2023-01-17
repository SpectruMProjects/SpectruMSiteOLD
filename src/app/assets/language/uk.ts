import { textType } from 'processes/types'

export const UK: textType = {
  footer: {
    info: 'Организация не имеет никакого отношения к Mojang AB. Все права на игру принадлежат Mojang AB. Весь остальной контент принадлежит SpectruMTeam.',
    button: {
      contact: 'Контакнты',
      pay: 'Способы оплаты',
      teamsuccess: 'Пользовательское соглашение',
    },
  },
  main: {
    header: {
      hello: 'Добро пожаловать на',
      info: 'Почувствуйте ламповую и дружелюбную атмосферу, где все игроки чувствуют себя как дома',
    },
    aboutproject: {
      block1: {
        first:
          'Наши сервера Minecraft являются уникальными и неповторимыми. Они стабильны и не содержат П2В (платные преимущества).',
        second:
          'На наших серверах вы сможете испытать новые игровые режимы, уникальные мини-игры и события, которые не найдете нигде еще.',
        third:
          'Наши администраторы и модераторы работают над тем, чтобы сделать игру на наших серверах максимально приятной и безопасной для всех игроков. Если у вас возникнут какие-то вопросы или проблемы, не стесняйтесь обращаться к нам за помощью. Мы всегда рады помочь.',
        fourth:
          'Мы стремимся к тому, чтобы наши сервера были интересными и разнообразными, чтобы всегда было чем заняться.',
        fifth:
          'Мы также стараемся предоставить нашим игрокам справедливую игру без преимуществ для игроков, которые платят деньги.',
        sixth:
          'Вы сможете провести свое время на наших серверах, зная, что все игроки имеют равные шансы. Мы также регулярно обновляем наши сервера, чтобы вы всегда играли на самой последней версии Minecraft.',
      },
      block2: {
        info: 'Почувствуйте ламповую и дружелюбную атмосферу, где все игроки чувствуют себя как дома. Мы разработали специальные функции и события, чтобы улучшить взаимодействие между игроками и создать уютную атмосферу. Мы также стремимся создать сообщество, которое является открытым и приветливым ко всем новым игрокам.',
      },
      block3: {
        info: 'Наши администраторы и модераторы всегда рады помочь новичкам и ответить на любые вопросы, у которых могут возникнуть. Мы надеемся, что вы почувствуете себя как дома на наших серверах и станете частью нашего уютного сообщества. Ждем вас на наших серверах!',
      },
      cardpay: {
        headpay: 'Стоимость доступа на Хардкор',
        button: 'Приобристи доступ на сервер',
      },
    },
  },
  menu: {
    home: 'Главная',
    hardcore: 'Хардкор',
    auth: 'Авторизация',
    profile: 'Профиль',
    theme: 'Тема',
  },
  profile: {
    head: 'Профиль',
    setting: {
      nickname: 'Никнейм',
      email: 'Почта',
      changepass: {
        head: 'Смена пароля',
        input: 'Новый пароль',
        button: 'Подтвердить',
      },
      admin: {
        head: 'Админ панель',
        button: 'Перейти',
      },
      exit: 'Выйти из аккаунта',
    },
    hardcore: {
      head: 'Статистика',
      block1: {
        info1: 'Примерное время возрождение после смерти',
        info2: 'Дата последней смерти',
        info3: 'Причина последней смерти',
      },
      block2: {
        head: 'Смертей',
      },
    },
  },
  hardcore: {
    abouthardcore: {
      about: 'О сервере',
      vanilla: 'Ванильный геймплей, минимальное количество плагинов для комфортной игры',
      hardcore: 'Только хардкор! Платите за свою смерть временем потраченным на сервере',
      smp: 'Проще говоря обычное выживание и никаких поблажек',
    },
    workhradcore: {
      how: 'Как работает Hardcore режим',
      maintext:
        'Если вы прошаренный игрок в Minecraft, то вы знаете что режим Hardcore работает по принципу одной смерти. Однако на сервере эта механика очень расточительна, т.к. по неосторожности можно потерять не только прогресс, но и возможность играть с друзьями. Поэтому мы сделали плагин который даст возможность возродиться спустя время, которое вы провели на сервере',
      note: 'Для того чтобы точно расчитать время возрождения, мы пользуемся формулой: время до возрождения = текущее время (на момент смерти) + время на сервере (только в режиме выживания)',
    },
    checkserver: {
      head: 'Ивенты, лёгкая сборка, и прочее...',
      info: 'Сервер на Paper, дружелюбное комьюнити, полностью бесплатное пользование, Discord сервер, и другие плюшки. Регистрируйся и заходи на сервер!',
      or: 'или',
      button1: 'Скопировать IP адрес',
      button2: 'Перейти в личный кабинет',
    },
  },
  auth: {
    login: {
      head: 'Авторизация',
      login: 'Логин',
      pass: 'Пароль',
      successbutton: 'Подтвердить',
      noacc: 'Нет аккаунта ?',
      register: 'Регистрация',
    },
    registration: {
      head: 'Регистрация',
      login: 'Логин',
      email: 'Почта',
      pass: 'Пароль',
      successbutton: 'Подтвердить',
      haveacc: 'Уже зарегестрированы ?',
      signup: 'Войти',
    },
  },
  admin: {
    menu: {
      head: 'Админ меню',
      users: 'Пользователи',
      exit: 'Выйти',
      button: {
        theme: 'Тема',
        users: 'Пользователи',
        lang: 'Язык',
      },
    },
    userpage: {
      head: 'Список пользователей',
      search: 'Поиск',
      card: {
        email: 'Почта',
        about: 'Подробнее',
        ban: {
          ban: 'Забанить',
          noban: 'Разбанить',
        },
        del: 'Удалить',
      },
    },
    usercard: {
      cardmodal: {
        ban: {
          ban: 'Вы уверены что хотите забанить пользователя ?',
          noban: 'Вы уверены что хотите разбанить пользователя ?',
          button1: 'Нет',
          button2: 'да',
        },
        change: {
          info: 'Изменение данных пользователя',
          email: 'Почта',
          login: 'Никнейм',
          button1: 'Закрыть',
          button2: 'Изменить',
        },
        del: {
          info: 'Вы уверены что хотите удалить пользователя ?',
          button1: 'Нет',
          button2: 'Да',
        },
      },
      model: {
        head: '3д модель',
      },
      info: {
        head: 'Основная информация',
        email: 'Почта',
        nickname: 'Никнейм',
        role: 'Роли',
        buttonchange: 'Изменить',
        buttonban: {
          ban: 'Забанить',
          noban: 'Разбанить',
        },
        buttondel: 'Удалить',
      },
      statistic: {
        head: 'Статистика',
      },
      bag: {
        head: 'Инвентарь',
      },
      response: {
        head: 'Запросы',
      },
    },
  },
  teamsuccess: {
    block1: {
      head: 'Пользовательское соглашение',
      text1: 'Пользователь, игрок – Физическое лицо использующее проект.',
      text2: 'Проект – Вся платформа, включая сайт, игровые сервера, лаунчер и т.п.',
    },
    block2: {
      head: '1. Пользовательское соглашение:',
      '1': 'Данный документ является официальным регламентом проекта, любые прочие таковыми называться не могут.',
      '2': 'Цель данных правил – защита интересов пользователей и ресурса и установление порядка на всех ресурсах проекта.',
      '3': 'Любой человек имеет право посещать проект, если он не нарушает Правила проекта.',
      '4': 'Регистрируясь на проекте, вы соглашаетесь со всеми правилами данного списка, правами описанными ниже и обязанностями.',
      '5': 'Регистрируясь на проекте, вы соглашаетесь с обработкой Администрацией ваших персональных данных, то есть совершение, в том числе, следующих действий: обработку (включая сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, обезличивание, блокирование, уничтожение персональных данных).',
      '6': 'Право использования всех сервисов проекта, предоставляется Администрацией на бесплатной основе, за исключением дополнительных функций (приобретаемых на платной основе и активируемых путем активации дополнительных возможностей в серверной версии (плагины) игры), а так-же платных пропусков на платные сервера. Использование бесплатного функционала предоставляется в текущей форме, не гарантируя 100% правильность работы. Игровые вещи, способности и т.п, утерянные в связи с ненадлежащей работой неоплачиваемых сервисов, не возвращаются.',
      '7': 'Оплата дополнительных частей программного продукта производится только на официальном сайте проекта, находящимся по адресу spectrumine.com в валюте – российский рубль. Зачисление средств производится с помощью агрегатора платежей в любой валюте по месту нахождения пользователя, конвертируемой самим агрегатором в российские рубли.',
      '8': 'При вводе на сайте не верного ника администрация не отвечает за последствия покупки чего-либо на этот ник.',
      '9': 'Так как не всегда удается определить нарушение правил пользователем, окончательное решение остается за Администраторами проекта.',
      '10': 'Правообладателями дополнительных частей продукта являются их авторы. Использование этих частей Администрацией осуществляется на основе соглашения о свободном распространении и использовании.',
      '11': 'Незнание Правил не освобождает от ответственности.',
      '12': 'Проект никак не связан с компанией Mojang AB. Все права на игру принадлежат Mojang AB.',
      '13': 'Все деньги поступающие от игроков на сторону платформы являются безвозмездным пожертвованием на развитие сервиса и возврату не подлежат.',
    },
    block3: {
      head: '2. Права и обязанности игроков:',
      '1': 'Игрок имеет право использовать все доступные ему возможности, если они не нарушают Правила проекта.',
      '2': 'Игрок полностью отвечает за надежность своего пароля и доступа к аккаунту.',
      '3': 'Игрок имеет право на добровольное пожертвование.',
      '4': 'Игрок соглашается с тем, что потраченные им средства не будут возвращены.',
      '5': 'Игроки, имеющие различные привилегии на сервере, ничем не отличаются от обычных игроков, кроме дополнительных косметических возможностей и полностью подчиняются Правилам проекта а так-же EULA компании Mojang AB.',
      '6': 'Игрок обязан сообщать о выявленных багах и недоработках Администрации сервера, в случае намеренного скрытия выявленных багов и недоработок, Администрация имеет право заблокировать или полностью удалить аккаунт игрока.',
      '7': 'Любой игрок может пожаловаться на других игроков.',
      '8': 'Игрок имеет право подать жалобу на игрока/модератора.',
    },
    block4: {
      head: '3. Права и обязанности Модерации (Персонал проекта):',
      '1': 'Модератор является руководством проекта и включает в себя модерацию и поддержку.',
      '2': 'Модератор обязан соблюдать Настоящие Правила.',
      '3': 'Модератор обязан отвечать на устные вопросы игроков (кроме личных (помоги построить дом и т.д)) , а также следить за соблюдением Настоящих Правил.',
      '4': 'Модератор вправе выдавать наказание исходя из Настоящих Правил.',
      '5': 'При выдаче наказания, Модератор обязан указать причину и номер правила.',
      '6': 'Модерации запрещено выдавать наказание если его нет в правилах.',
      '7': 'Модератору запрещено выдавать себя за создателя, и разжигать рознь в сторону Администрации.',
      '8': 'Действия Модератора, направленные на возбуждение ненависти либо вражды, а также на унижение достоинства человека либо группы лиц по признакам пола, расы, национальности, языка, происхождения, ориентации, отношения к религии, а равно принадлежности к какой-либо социальной группе, совершенные публично, - наказывается снятием с поста.',
    },
    block5: {
      head: '4. Права и обязанности Администрации:',
      '1': 'Администрация проекта может в исключительных случаях может отклоняться от Настоящих Правил и действовать на свое усмотрение.',
      '2': 'Администрация не хранит пароли пользователей в открытом виде.',
      '3': 'Администрация не несет ответственности за аккаунты игроков, включая социальную инженерию, вирусы, подбор пароля и т.п.',
      '4': 'Решения Администрации обжалованию не подлежат.',
      '5': 'Администрация вправе выдавать любое наказание.',
      '6': 'Жалобы на Администрацию не принимаются.',
      '7': 'Все полученные Администрацией средства, являются добровольным пожертвованием и возврату не подлежат (п. 2.4).',
      '8': 'Администрация вправе забирать привилегии, и отказывать в обслуживании игрокам без объяснения причины.',
      '9': 'Администрация вправе изменять возможности игровых привилегий как в лучшую, так и в худшую сторону, без каких-либо уведомлений.',
      '10': 'Толкование правил сайта осуществляется только главными Администраторами. Любые другие попытки истолковать правила в пользу любой из сторон признаются некорректными.',
      '11': 'Администрация имеет право не объяснять причины блокировки аккаунтов.',
      '12': 'Администрация оставляет за собой право в одностороннем порядке изменять текущие правила с уведомлением пользователей посредством официального сообщества проекта, находящимся на ресурсе "ВКонтакте".',
      '13': 'Администрация ведет управление игровыми процессами и всем проектом - исключительно по своему усмотрению.',
      '14': 'Администрация оставляет за собой право проводить периодические обновления игрового мира и всех статистик (вайп). Вайп производятся Администрацией по истечении временного отрезка, далее которого нормальное функционирование сервисов невозможно, ввиду особенностей построения игрового процесса. Длительность вышеуказанного временного отрезка определяется администрацией самостоятельно, исходя из текущего положения дел. Вайп не является отказом пользователю в использовании платных дополнений, т.к при этом не происходит отзыв лицензии на часть программного продукта или ограничения функционала этой части.',
      '15': 'Администрация вправе держать свою личность в анонимности. Из-за этого имеют права не отвечать на ваши вопросы, которые не относятся к серверу.',
    },
  },
  confirmation: {
    load: 'Ожидание подтверждения...',
  },
  error: {
    notifyError: {
      error: 'Неизвестная ошибка',
      usernameNotExistsInMojang: 'Имя пользователя не существует в Mojang',
      tooManyRegRequests: 'Слишком много запросов',
      userWithSameUsernameOrEmailExists: 'Пользователь с таким никнеймом или почтой уже существует',
      form: {
        'mail.notMail': 'Такой почты нету',
        'username.empty': 'Никнейм пуст',
        'username.incorrect': 'Введите корректно никнейм',
        'password.tooShort': 'Пароль слишком короткий',
        'password.incorrect': 'Введите корректно пароль',
      },
    },
    notifyChangeError: {
      error: 'Неизвестная ошибка',
      userWithSameEmailNotExists: 'Пользователя с такой почтой не существует',
      tooManyChangePassRequests: 'Слишком много запросов',
      incorrectForm: 'Некорректная форма отправки',
    },
    notifyConfirmationError: {
      error: 'Неизвестная ошибка',
      userWithSameUsernameOrEmailExists: 'Пользователь с таким никнеймом или почтой уже существует',
      invalideCode: 'Время для подтверждения закончилось',
    },
    notifyLoginError: {
      error: 'Неизвестная ошибка',
      userWithSameUsernameOrEmailNotExists: 'Пользователь с таким логином или почтой не найден',
      form: 'Введите правильно логин или пароль',
      incorrectPassword: 'Не верный пароль',
    },
    getUserError: {
      error: 'Неизвестная ошибка',
    },
    notifyConfirmationPassError: {
      error: 'Неизвестная ошибка',
      userNotFound: 'Пользователь не найден',
      tokenExpired: 'Время для подтверждения закончилось',
    },
    notifyConfirmationRolesError: {
      error: 'Неизвестная ошибка',
      notAllowed: 'Не найдено',
    },
  },
}
