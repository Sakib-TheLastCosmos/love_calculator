import { doc } from "@firebase/firestore"

export const DOM = {
   submitBtn: document.querySelector("#calculate_btn"),
   form: document.querySelector('#input_form'),
   html: document.querySelector('html')
}



export const DOMString = {
   headers: '.p3-person-box h3 a',
   compatibilityBox: '.p3-compatibility',
   compatibilityText: '.p3-compatibility h3',
   boxBeforeLink: '#div-gpt-ad-1406444234578-0',
   zodiacLabel: '#zodiac_label'
}


export const getInput = () => {
   return {
      user: {
         name: document.querySelector("#name_0").value,
         birthday: {
            month: document.querySelector('#user_bd_month').value,
            day: document.querySelector('#user_bd_day').value,
            year: document.querySelector('#user_bd_year').value
         },
      }, 

      crush: {
         name: document.querySelector("#name_1").value,
         birthday: {
            month: document.querySelector('#crush_bd_month').value,
            day: document.querySelector('#crush_bd_day').value,
            year: document.querySelector('#crush_bd_year').value
         }
      }
   }
}

export const links = {
   proxy: 'https://api.allorigins.win/get?url=',
   compatibilityPage: 'http://www.mylovecal.com/love-compatibility/'
}