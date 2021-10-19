import { db, docs } from "./config/firebase";
import { DOM, getInput } from "./config/base";
import  Data  from "./models/stealInfo";
import { renderLoveResult } from "./views/stealInfoView";


const data = {}


DOM.submitBtn.addEventListener('click', async () => {
  const input = getInput()
  try {  
    data.inputData = new Data(input.user, input.crush)
    data.inputData.assignZodiac()
    await data.inputData.getMarkup()
    await data.inputData.addData()
  
    renderLoveResult(DOM.html, data.inputData.markup, data.inputData.user, data.inputData.crush)

  } catch (e) {
    if (input.user.birthday.month == '? undefined:undefined ?' || input.user.birthday.day == '? undefined:undefined ?' || input.crush.birthday.month == '? undefined:undefined ?' || input.crush.birthday.day == '? undefined:undefined ?') {
      data.inputData = new Data(input.user, input.crush)
      data.inputData.assignZodiac()
      await data.inputData.addData() 
      alert ("Please enter the date of birth...")
    } else {
      alert("Something went wrong, please try again :(")
    }
  }
})


