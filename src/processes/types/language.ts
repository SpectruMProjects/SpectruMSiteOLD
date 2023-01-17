export type languageType = 'ru' | 'en' | 'be' | 'uk'

export type textType = {
  footer: {
    info: string
    button: {
      contact: string
      pay: string
      teamsuccess: string
    }
  }
  main: {
    header: {
      hello: string
      info: string
    }
    aboutproject: {
      block1: {
        first: string
        second: string
        third: string
        fourth: string
        fifth: string
        sixth: string
      }
      block2: {
        info: string
      }
      block3: {
        info: string
      }
      cardpay: {
        headpay: string
        button: string
      }
    }
  }
  menu: {
    home: string
    hardcore: string
    auth: string
    profile: string
    theme: string
  }
  profile: {
    head: string
    setting: {
      nickname: string
      email: string
      changepass: {
        head: string
        input: string
        button: string
      }
      admin: {
        head: string
        button: string
      }
      exit: string
    }
    hardcore: {
      head: string
      block1: {
        info1: string
        info2: string
        info3: string
      }
      block2: {
        head: string
      }
    }
  }
  hardcore: {
    abouthardcore: {
      about: string
      vanilla: string
      hardcore: string
      smp: string
    }
    workhradcore: {
      how: string
      maintext: string
      note: string
    }
    checkserver: {
      head: string
      info: string
      or: string
      button1: string
      button2: string
    }
  }
  auth: {
    login: {
      head: string
      login: string
      pass: string
      successbutton: string
      noacc: string
      register: string
    }
    registration: {
      head: string
      login: string
      email: string
      pass: string
      successbutton: string
      haveacc: string
      signup: string
    }
  }
  admin: {
    menu: {
      head: string
      users: string
      exit: string
      button: {
        theme: string
        users: string
        lang: string
      }
    }
    userpage: {
      head: string
      search: string
      card: {
        email: string
        about: string
        ban: {
          ban: string
          noban: string
        }
        del: string
      }
    }
    usercard: {
      cardmodal: {
        ban: {
          ban: string
          noban: string
          button1: string
          button2: string
        }
        change: {
          info: string
          email: string
          login: string
          button1: string
          button2: string
        }
        del: {
          info: string
          button1: string
          button2: string
        }
      }
      model: {
        head: string
      }
      info: {
        head: string
        email: string
        nickname: string
        role: string
        buttonchange: string
        buttonban: {
          ban: string
          noban: string
        }
        buttondel: string
      }
      statistic: {
        head: string
      }
      bag: {
        head: string
      }
      response: {
        head: string
      }
    }
  }
  teamsuccess: {
    block1: {
      head: string
      text1: string
      text2: string
    }
    block2: {
      head: string
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      7: string
      8: string
      9: string
      10: string
      11: string
      12: string
      13: string
    }
    block3: {
      head: string
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      7: string
      8: string
    }
    block4: {
      head: string
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      7: string
      8: string
    }
    block5: {
      head: string
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      7: string
      8: string
      9: string
      10: string
      11: string
      12: string
      13: string
      14: string
      15: string
    }
  }
  confirmation: {
    load: string
  }
  error: {
    notifyError: {
      error: string
      usernameNotExistsInMojang: string
      tooManyRegRequests: string
      userWithSameUsernameOrEmailExists: string
      form: {
        'mail.notMail': string
        'username.empty': string
        'username.incorrect': string
        'password.tooShort': string
        'password.incorrect': string
      }
    }
    notifyChangeError: {
      error: string
      userWithSameEmailNotExists: string
      tooManyChangePassRequests: string
      incorrectForm: string
    }
    notifyConfirmationError: {
      error: string
      userWithSameUsernameOrEmailExists: string
      invalideCode: string
    }
    notifyLoginError: {
      error: string
      userWithSameUsernameOrEmailNotExists: string
      form: string
      incorrectPassword: string
    }
    getUserError: {
      error: string
    }
    notifyConfirmationPassError: {
      error: string
      userNotFound: string
      tokenExpired: string
    }
    notifyConfirmationRolesError: {
      error: string
      notAllowed: string
    }
  }
}
