import { textType } from 'processes/types'

export const EN: textType = {
  footer: {
    info: 'The organization has nothing to do with Mojang AB. All rights to the game belong to Mojang AB. All other content belongs to SpectruMTeam.',
    button: {
      contact: 'Contacts',
      pay: 'Ways of payment',
      teamsuccess: 'Terms of use',
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
    home: 'Home',
    hardcore: 'Hardcore',
    auth: 'Authorization',
    profile: 'Profile',
    theme: 'Theme',
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
      head: 'Authorization',
      login: 'Login',
      pass: 'Password',
      successbutton: 'Confirm',
      noacc: "Don't have an account?",
      register: 'Registration',
    },
    registration: {
      head: 'Registration',
      login: 'Login',
      email: 'Mail',
      pass: 'Password',
      successbutton: 'Confirm',
      haveacc: 'Already registered?',
      signup: 'Sign Up',
    },
  },
  admin: {
    menu: {
      head: 'Admin panel',
      users: 'Users',
      exit: 'Exit',
      button: {
        theme: 'Theme',
        users: 'Users',
        lang: 'Language',
      },
    },
    userpage: {
      head: 'List of users',
      search: 'Search',
      card: {
        email: 'Mail',
        about: 'More',
        ban: {
          ban: 'Ban',
          noban: 'Unban',
        },
        del: 'Delete',
      },
    },
    usercard: {
      cardmodal: {
        ban: {
          ban: 'Are you sure you want to ban the user ?',
          noban: 'Are you sure you want to unban the user ?',
          button1: 'No',
          button2: 'Yes',
        },
        change: {
          info: 'Changing user data',
          email: 'Mail',
          login: 'Nickname',
          button1: 'Close',
          button2: 'Change',
        },
        del: {
          info: 'Are you sure you want to delete the user ?',
          button1: 'No',
          button2: 'Yes',
        },
      },
      model: {
        head: '3D model',
      },
      info: {
        head: 'Basic information',
        email: 'Mail',
        nickname: 'Nickname',
        role: 'Role',
        buttonchange: 'Change',
        buttonban: {
          ban: 'Ban',
          noban: 'Unban',
        },
        buttondel: 'Delete',
      },
      statistic: {
        head: 'Statistic',
      },
      bag: {
        head: 'Inventory',
      },
      response: {
        head: 'Requests',
      },
    },
  },
  teamsuccess: {
    block1: {
      head: 'Terms of use',
      text1: 'User, player - An individual using the project.',
      text2: 'Project - The entire platform, including the website, game servers, launcher, etc.',
    },
    block2: {
      head: '1. Terms of use:',
      '1': 'This document is the official regulation of the project, any others cannot be called as such.',
      '2': 'The purpose of these rules is to protect the interests of users and the resource and establish order on all project resources.',
      '3': 'Any person has the right to visit the project if he does not violate the Rules of the project.',
      '4': 'By registering on the project, you agree to all the rules of this list, the rights described below and obligations.',
      '5': 'By registering on the project, you agree to the processing by the Administration of your personal data, that is, the commission of, among other things, the following actions: processing (including collection, systematization, accumulation, storage, clarification (updating, changing), use, depersonalization, blocking, destruction of personal data).',
      '6': 'The right to use all project services is provided by the Administration free of charge, with the exception of additional functions (purchased on a paid basis and activated by activating additional features in the server version (plugins) of the game), as well as paid passes to paid servers. The use of free functionality is provided in its current form, without guaranteeing 100% correct operation. Game items, abilities, etc., lost due to improper operation of unpaid services, are not returned.',
      '7': "Payment for additional parts of the software product is made only on the official website of the project, located at spectrumine.com in the currency - the Russian ruble. Funds are credited using the payment aggregator in any currency at the user's location, which is converted by the aggregator itself into Russian rubles.",
      '8': 'If you enter an incorrect nickname on the site, the administration is not responsible for the consequences of buying something for this nickname.',
      '9': 'Since it is not always possible to determine the violation of the rules by the user, the final decision remains with the Project Administrators.',
      '10': 'The copyright holders of additional parts of the product are their authors. The use of these parts by the Administration is carried out on the basis of an agreement on free distribution and use.',
      '11': 'Ignorance of the Rules does not exempt from liability.',
      '12': 'The project is in no way affiliated with Mojang AB. All rights to the game belong to Mojang AB.',
      '13': 'All money received from players on the side of the platform is a gratuitous donation for the development of the service and is non-refundable.',
    },
    block3: {
      head: '2. Rights and obligations of players:',
      '1': 'The player has the right to use all the opportunities available to him, if they do not violate the Rules of the project.',
      '2': 'The player is fully responsible for the reliability of his password and access to the account.',
      '3': 'The player has the right to a voluntary donation.',
      '4': 'The player agrees that the funds spent by him will not be returned.',
      '5': 'Players with various privileges on the server are no different from ordinary players, except for additional cosmetic features and are fully subject to the Project Rules as well as the Mojang AB EULA.',
      '6': "The player is obliged to report the identified bugs and shortcomings to the Server Administration, in case of intentional hiding of the identified bugs and shortcomings, the Administration has the right to block or completely delete the player's account.",
      '7': 'Any player can report other players.',
      '8': 'The player has the right to file a complaint against the player/moderator.',
    },
    block4: {
      head: '3. Rights and obligations of Moderation (Project staff):',
      '1': 'The moderator is the project manager and includes moderation and support.',
      '2': 'The moderator is obliged to comply with these Rules.',
      '3': "The moderator is obliged to answer the players' oral questions (except for personal ones (help build a house, etc.)), as well as monitor compliance with these Rules.",
      '4': 'The moderator has the right to issue punishment based on these Rules.',
      '5': 'When issuing a punishment, the Moderator must indicate the reason and rule number.',
      '6': 'Moderation is forbidden to issue a punishment if it is not in the rules.',
      '7': 'The moderator is forbidden to impersonate the creator, and incite discord towards the Administration.',
      '8': 'Actions of the Moderator aimed at inciting hatred or enmity, as well as at humiliating the dignity of a person or a group of persons on the basis of gender, race, nationality, language, origin, orientation, attitude to religion, as well as membership in any social group, committed publicly, - is punishable by removal from office.',
    },
    block5: {
      head: '4. Rights and obligations of the Administration:',
      '1': 'The Project Administration may, in exceptional cases, deviate from these Rules and act at its own discretion.',
      '2': 'The administration does not store user passwords in clear text.',
      '3': 'The administration is not responsible for player accounts, including social engineering, viruses, password guessing, etc.',
      '4': 'The decisions of the Administration are not subject to appeal.',
      '5': 'The administration has the right to issue any punishment.',
      '6': 'Complaints against the Administration are not accepted.',
      '7': 'All funds received by the Administration are voluntary donations and are non-refundable (clause 2.4).',
      '8': 'The administration has the right to take away privileges and refuse service to players without explanation.',
      '9': 'The administration has the right to change the possibilities of gaming privileges, both for the better and for the worse, without any notice.',
      '10': 'The interpretation of the rules of the site is carried out only by the main Administrators. Any other attempts to interpret the rules in favor of either party are considered incorrect.',
      '11': 'The administration has the right not to explain the reasons for blocking accounts.',
      '12': 'The administration reserves the right to unilaterally change the current rules with the notification of users through the official project community located on the VKontakte resource.',
      '13': 'The administration manages the game processes and the entire project - solely at its own discretion.',
      '14': 'The administration reserves the right to carry out periodic updates of the game world and all statistics (wipe). Wipes are made by the Administration after the expiration of the time period, beyond which the normal functioning of the services is impossible, due to the peculiarities of the construction of the gameplay. The duration of the above time period is determined by the administration independently, based on the current state of affairs. A wipe is not a refusal to the user to use paid add-ons, because it does not revoke the license for a part of the software product or limit the functionality of this part.',
      '15': 'The administration has the right to keep its identity anonymous. Because of this, they have the right not to answer your questions that are not related to the server.',
    },
  },
  confirmation: {
    load: 'Waiting for confirmation...',
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
