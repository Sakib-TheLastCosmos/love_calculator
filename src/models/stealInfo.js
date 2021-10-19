import { addDoc } from "@firebase/firestore"
import { docs } from "../config/firebase"
import { links } from "../config/base"


export default class Data {
  constructor (user, crush) {
    this.user = user
    this.crush = crush
  }

  async addData () {
    try {
      await addDoc(docs, {
        user: this.user,
        crush: this.crush
      })
    } catch (e) {
      return e
    }
  }


  getZodiac (month, day) {
    const zodiacs = ['capricorn', 'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius']
    let zodiac;
  
    if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
      zodiac = zodiacs[0]
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
      zodiac = zodiacs[1]
    } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
      zodiac = zodiacs[2]
    } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
      zodiac = zodiacs[3]
    } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
      zodiac = zodiacs[4]
    } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
      zodiac = zodiacs[5]
    } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
      zodiac = zodiacs[6]
    } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
      zodiac = zodiacs[7]
    } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
      zodiac = zodiacs[8]
    } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
      zodiac = zodiacs[9]
    } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
      zodiac = zodiacs[10]
    } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
      zodiac = zodiacs[11]
    } else {
      return 'undefined'
    }

    return zodiac
  }


  assignZodiac () {
    this.user.birthday.zodiac = this.getZodiac(this.user.birthday.month, this.user.birthday.day)
    this.crush.birthday.zodiac = this.getZodiac(this.user.birthday.month, this.crush.birthday.day)
  }


  async getMarkup () {
    const prepareMarkup = markup => {
      let preparedMarkup = markup.replace(/\\n|\\r|\\t/g, '')
      preparedMarkup = preparedMarkup.replaceAll('"/Styles', '"http://www.mylovecal.com/Styles')
      preparedMarkup = preparedMarkup.replaceAll('"/css', '"http://www.mylovecal.com/css')

      return preparedMarkup
    }

    let markup = await fetch(`${links.proxy}${links.compatibilityPage}${this.user.birthday.zodiac}-${this.crush.birthday.zodiac}`)

    markup = await markup.json()
    markup = markup.contents
    markup = prepareMarkup(markup)

    this.markup = markup
  }
}

