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
      hello: 'Welcome to',
      info: 'Feel the lamp and friendly atmosphere where all players feel at home',
    },
    aboutproject: {
      block1: {
        head: 'About the project',
        first:
          'Our Minecraft servers are unique and inimitable. They are stable and do not contain P2W (paid benefits).',
        second:
          'On our servers you will be able to experience new game modes, unique mini-games and events that you will not find anywhere else.',
        third:
          'Our administrators and moderators are working to make playing on our servers as pleasant and safe as possible for all players. If you have any questions or problems, feel free to contact us for help. We are always happy to help.',
        fourth:
          'We strive to ensure that our servers are interesting and diverse, so that there is always something to do.',
        fifth:
          'We also try to provide our players with a fair game without any benefits for paying players.',
        sixth:
          'You will be able to spend your time on our servers knowing that all players have an equal chance. We also update our servers regularly to ensure you always play the latest version of Minecraft.',
      },
      block2: {
        info: 'Feel the lamp and friendly atmosphere, where all players feel at home. We have developed special features and events to improve interaction between players and create a cozy atmosphere. We also strive to create a community that is open and welcoming to all new players.',
      },
      block3: {
        info: 'Our administrators and moderators are always happy to help newcomers and answer any questions they may have. We hope that you will feel at home on our servers and become part of our cozy community. We are waiting for you on our servers!',
      },
      cardpay: {
        headpay: 'Cost of access to Hardcore',
        button: 'Get access to the server',
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
    head: 'Profile',
    setting: {
      headbutton: 'Settings',
      nickname: 'Nickname',
      email: 'Mail',
      changepass: {
        head: 'Change password',
        input: 'New password',
        button: 'Confirm',
      },
      admin: {
        head: 'Admin dashboard',
        button: 'Next',
      },
      exit: 'Exit',
    },
    hardcore: {
      headbutton: 'Hardcore',
      head: 'Statistic',
      block1: {
        info1: 'Estimated time of rebirth after death',
        info2: 'Date of last death',
        info3: 'Cause of last death',
        info4: 'Time on the server',
        notdied: 'Not died',
        notbeen: "Wasn't on the server",
      },
      block2: {
        head: 'Deaths',
      },
    },
  },
  hardcore: {
    abouthardcore: {
      about: 'About server',
      vanilla: 'Vanilla gameplay, minimum number of plug-ins for a comfortable game',
      hardcore: 'Only hardcore! Pay for your death with time spent on the server',
      smp: 'Simply put, ordinary survival and no concessions',
    },
    workhradcore: {
      how: 'How Hardcore mode works',
      maintext:
        'If you are an experienced Minecraft player, then you know that Hardcore mode works on the principle of one death. However, on the server, this mechanic is very wasteful. by negligence, you can lose not only progress, but also the opportunity to play with friends. Therefore, we made a plugin that will make it possible to be reborn after the time you spent on the server',
      note: 'In order to accurately calculate the respawn time, we use the formula: time to respawn = current time (at the time of death) + time on the server (survival mode only)',
    },
    checkserver: {
      head: 'Events, easy assembly, and more...',
      info: 'Server on Paper, friendly community, completely free to use, Discord server, and other goodies. Register and join the server!',
      or: 'or',
      button1: 'Copy IP address',
      button2: 'Go to personal account',
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
  errorpage: {
    text: {
      errorpage: 'Error 404: This page does not exist',
    },
    textinfo:
      'We ask you, as a user, to continue to be more careful when navigating through the pages of our site, so as not to cause a number of any errors. Below you can go back to our website.',
    button: 'Go back to site',
  },
  error: {
    notifyError: {
      error: 'Unknown error',
      usernameNotExistsInMojang: 'Username does not exist in Mojang',
      tooManyRegRequests: 'Too many requests',
      userWithSameUsernameOrEmailExists: 'User with this nickname or email address already exists',
      form: {
        'mail.notMail': 'There is no such mail.',
        'username.empty': 'Nickname is empty',
        'username.incorrect': 'Enter the correct nickname',
        'password.tooShort': 'Password is too short',
        'password.incorrect': 'Enter the correct password',
      },
    },
    notifyChangeError: {
      error: 'Unknown error',
      userWithSameEmailNotExists: 'User with this email does not exist',
      tooManyChangePassRequests: 'Too many requests',
      incorrectForm: 'Invalid submission form',
    },
    notifyConfirmationError: {
      error: 'Unknown error',
      userWithSameUsernameOrEmailExists: 'User with this nickname or email address already exists',
      invalideCode: 'Time for confirmation is over',
    },
    notifyLoginError: {
      error: 'Unknown error',
      userWithSameUsernameOrEmailNotExists: 'No user found with this username or email',
      form: 'Enter the correct username or password',
      incorrectPassword: 'Wrong password',
    },
    getUserError: {
      error: 'Unknown error',
    },
    notifyConfirmationPassError: {
      error: 'Unknown error',
      userNotFound: 'User is not found',
      tokenExpired: 'Time for confirmation is over',
    },
    notifyConfirmationRolesError: {
      error: 'Unknown error',
      notAllowed: 'Not found',
    },
    errorFormLogin: {
      loginLength: 'Login must contain at least 3 characters',
      passwordLength: 'Password must contain at least 8 characters',
    },
    errorFormSignUp: {
      nicknameError:
        'Nickname must be at least 3 characters long and contain Latin letters or numbers',
      mailError: 'Please enter correct email',
      passwordError:
        'The password must contain at least 8 characters, and also have at least one number and one capital letter',
    },
    errorChangePassword: {
      change:
        'The password must contain at least 8 characters, and also have at least one number and one capital letter',
    },
    errorHardcoreStat: {
      error: 'Unknown error',
      notFound: 'Not found',
    },
  },
  accept: {
    account: 'Account activated!',
    password: 'The password has been changed!',
  },
  notification: {
    refetch: "Can't connect to server...",
    loading: 'Loading data...',
    copy: 'Row copied',
  },
}
