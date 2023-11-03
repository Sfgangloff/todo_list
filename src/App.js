import './App.css';
import 'firebase/compat/firestore';
import { db } from './firebase.config';
import { useState, useEffect } from "react"
import {collection, onSnapshot,where,query,setDoc,doc} from "firebase/firestore"
import { v4 } from 'uuid';
import Todo from './Todo';

function App() {
  const todoRef = collection(db,"todos")
  const queryLongTerm = query(todoRef, where("timecategory", "==", "long-term"));
  const queryShortTerm = query(todoRef, where("timecategory", "==", "short-term"));
  const queryDate = query(todoRef, where("timecategory", "==", "date"));

  const [todosLT, setTodosLT] = useState([])
  const [todosST, setTodosST] = useState([])

  const [todosD1, setTodosD1] = useState([])
  const [todosD2, setTodosD2] = useState([])
  const [todosD3, setTodosD3] = useState([])
  const [todosD4, setTodosD4] = useState([])
  const [todosD5, setTodosD5] = useState([])
  const [todosD6, setTodosD6] = useState([])
  const [todosD7, setTodosD7] = useState([])

  const [todosD8, setTodosD8] = useState([])
  const [todosD9, setTodosD9] = useState([])
  const [todosD10, setTodosD10] = useState([])
  const [todosD11, setTodosD11] = useState([])
  const [todosD12, setTodosD12] = useState([])
  const [todosD13, setTodosD13] = useState([])
  const [todosD14, setTodosD14] = useState([])

  const [todosD15, setTodosD15] = useState([])
  const [todosD16, setTodosD16] = useState([])
  const [todosD17, setTodosD17] = useState([])
  const [todosD18, setTodosD18] = useState([])
  const [todosD19, setTodosD19] = useState([])
  const [todosD20, setTodosD20] = useState([])
  const [todosD21, setTodosD21] = useState([])

  const [todosD22, setTodosD22] = useState([])
  const [todosD23, setTodosD23] = useState([])
  const [todosD24, setTodosD24] = useState([])
  const [todosD25, setTodosD25] = useState([])
  const [todosD26, setTodosD26] = useState([])
  const [todosD27, setTodosD27] = useState([])
  const [todosD28, setTodosD28] = useState([])

  const [todosDR1, setTodosDR1] = useState([])
  const [todosDR2, setTodosDR2] = useState([])
  const [todosDR3, setTodosDR3] = useState([])
  const [todosDR4, setTodosDR4] = useState([])
  const [todosDR5, setTodosDR5] = useState([])
  const [todosDR6, setTodosDR6] = useState([])
  const [todosDR7, setTodosDR7] = useState([])

  const [todosDR8, setTodosDR8] = useState([])
  const [todosDR9, setTodosDR9] = useState([])
  const [todosDR10, setTodosDR10] = useState([])
  const [todosDR11, setTodosDR11] = useState([])
  const [todosDR12, setTodosDR12] = useState([])
  const [todosDR13, setTodosDR13] = useState([])
  const [todosDR14, setTodosDR14] = useState([])

  const [todosDR15, setTodosDR15] = useState([])
  const [todosDR16, setTodosDR16] = useState([])
  const [todosDR17, setTodosDR17] = useState([])
  const [todosDR18, setTodosDR18] = useState([])
  const [todosDR19, setTodosDR19] = useState([])
  const [todosDR20, setTodosDR20] = useState([])
  const [todosDR21, setTodosDR21] = useState([])

  const [todosDR22, setTodosDR22] = useState([])
  const [todosDR23, setTodosDR23] = useState([])
  const [todosDR24, setTodosDR24] = useState([])
  const [todosDR25, setTodosDR25] = useState([])
  const [todosDR26, setTodosDR26] = useState([])
  const [todosDR27, setTodosDR27] = useState([])
  const [todosDR28, setTodosDR28] = useState([])

  const days =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  const date = new Date();
  const day = date.getDay();

  const nextDays = days.slice(day-1).concat(days.slice(0,day-1))

  const nextDates =[]

  const [nextDatesDays,setNextDatesDays]=useState([])

  const queriesDate=[]
  const queriesDateRepeat=[]

  const [formText,setFormText] = useState("")
  const [formTimeCategory,setFormTimeCategory]=useState("")
  const [formDate,setFormDate]=useState("")
  const [formRepeat,setFormRepeat] =useState("")

  useEffect(()=>{

    let j=28;

    for (let i=0; i< j;i++) {
      var next = new Date();
      next.setDate(next.getDate()+i);
      nextDates.push(next);
    }

    const nextDatesDaysTemp=[]

    for (let i=0; i< j;i++) {
      nextDatesDaysTemp.push(nextDates[i].toLocaleDateString('fr-FR').slice(0,5));
    }

    setNextDatesDays(nextDatesDaysTemp)
  
    for (let i=0; i< j;i++) {
      queriesDate.push(query(query(queryDate, where("repeat", "==", "no")), where("date", "==", nextDates[i].toLocaleString('fr-FR').split(' ')[0])))
    }
  
  
    for (let i=0; i< j;i++) {
      queriesDateRepeat.push(query(query(queryDate, where("repeat", "==", "yes")),where("day","==",nextDates[i].getDay())))
    }
    

    onSnapshot(queryLongTerm, snapshot => {
      setTodosLT(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )
    onSnapshot(queryShortTerm, snapshot => {
      setTodosST(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[0], snapshot => {
      setTodosD1(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )
    
    onSnapshot(queriesDate[1], snapshot => {
      setTodosD2(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[2], snapshot => {
      setTodosD3(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[3], snapshot => {
      setTodosD4(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[4], snapshot => {
      setTodosD5(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[5], snapshot => {
      setTodosD6(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[6], snapshot => {
      setTodosD7(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[7], snapshot => {
      setTodosD8(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )
    
    onSnapshot(queriesDate[8], snapshot => {
      setTodosD9(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[9], snapshot => {
      setTodosD10(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[10], snapshot => {
      setTodosD11(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[11], snapshot => {
      setTodosD12(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[12], snapshot => {
      setTodosD13(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[13], snapshot => {
      setTodosD14(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[14], snapshot => {
      setTodosD15(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )
    
    onSnapshot(queriesDate[15], snapshot => {
      setTodosD16(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[16], snapshot => {
      setTodosD17(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[17], snapshot => {
      setTodosD18(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[18], snapshot => {
      setTodosD19(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[19], snapshot => {
      setTodosD20(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[20], snapshot => {
      setTodosD21(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[21], snapshot => {
      setTodosD22(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )
    
    onSnapshot(queriesDate[22], snapshot => {
      setTodosD23(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[23], snapshot => {
      setTodosD24(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[24], snapshot => {
      setTodosD25(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[25], snapshot => {
      setTodosD26(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[26], snapshot => {
      setTodosD27(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDate[27], snapshot => {
      setTodosD28(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[0], snapshot => {
      setTodosDR1(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[1], snapshot => {
      setTodosDR2(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[2], snapshot => {
      setTodosDR3(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[3], snapshot => {
      setTodosDR4(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[4], snapshot => {
      setTodosDR5(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[5], snapshot => {
      setTodosDR6(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[6], snapshot => {
      setTodosDR7(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[7], snapshot => {
      setTodosDR8(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )
    
    onSnapshot(queriesDateRepeat[8], snapshot => {
      setTodosDR9(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[9], snapshot => {
      setTodosDR10(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[10], snapshot => {
      setTodosDR11(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[11], snapshot => {
      setTodosDR12(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[12], snapshot => {
      setTodosDR13(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[13], snapshot => {
      setTodosDR14(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[14], snapshot => {
      setTodosDR15(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[15], snapshot => {
      setTodosDR16(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[16], snapshot => {
      setTodosDR17(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[17], snapshot => {
      setTodosDR18(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[18], snapshot => {
      setTodosDR19(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[19], snapshot => {
      setTodosDR20(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[20], snapshot => {
      setTodosDR21(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[21], snapshot => {
      setTodosDR22(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )
    
    onSnapshot(queriesDateRepeat[22], snapshot => {
      setTodosDR23(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[23], snapshot => {
      setTodosDR24(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[24], snapshot => {
      setTodosDR25(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[25], snapshot => {
      setTodosDR26(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[26], snapshot => {
      setTodosDR27(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )

    onSnapshot(queriesDateRepeat[27], snapshot => {
      setTodosDR28(snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      }))
    }
    )
  }
, [])

const addTodo = async (e) => {
    e.preventDefault();

    var x = v4();

    if (formTimeCategory=="long-term"){

      await setDoc(doc(db, "todos", x),{text:formText,timecategory:formTimeCategory})

    } else if (formTimeCategory=="short-term"){

      await setDoc(doc(db, "todos", x),{text:formText,timecategory:formTimeCategory,deadline:formDate})

    } else if (formTimeCategory=="date"){
      if (formRepeat=="yes"){
        const formatedDate = new Date(formDate);
        const formDay = formatedDate.getDay();

        await setDoc(doc(db, "todos", x),{text:formText,timecategory:formTimeCategory,date:formDate,repeat:formRepeat,day:formDay})
    
        
      
      } else {
        await setDoc(doc(db, "todos", x),{text:formText,timecategory:formTimeCategory,date:formDate,repeat:formRepeat})
      }
    }

    setFormText('');
    setFormDate('');
    setFormTimeCategory('');
    setFormRepeat('');
}

let urlAddImg = new URL("add.png",import.meta.url);

  return (
    <div className="App">

    
    <form onSubmit={addTodo}>
        <label>Task:</label> &nbsp; <input value={formText} onChange={(e) => setFormText(e.target.value)} />
        &nbsp; &nbsp; <label>Time category:</label> &nbsp; <input value ={formTimeCategory} onChange={(e) => setFormTimeCategory(e.target.value)} />
        &nbsp; &nbsp; <label>Deadline/date (DD/MM/YYYY):</label> &nbsp; <input value={formDate} onChange={(e) => setFormDate(e.target.value)} />
        &nbsp; &nbsp; <label>Repeat:</label> &nbsp; <input value={formRepeat} onChange={(e) => setFormRepeat(e.target.value)} /> <br/> <br/>
      
        <button type="submit"><img className="form-button" src={urlAddImg}/></button>
      </form>


    <br/>

      <h2>Next weeks:</h2>


      <table className="next-week">
      <thead><tr><th style={{color:"#720004"}}>{nextDays[0]} ({nextDatesDays[0]})</th><th>{nextDays[1]} ({nextDatesDays[1]})</th><th>{nextDays[2]} ({nextDatesDays[2]})</th><th>{nextDays[3]} ({nextDatesDays[3]})</th><th>{nextDays[4]} ({nextDatesDays[4]})</th><th>{nextDays[5]} ({nextDatesDays[5]})</th><th>{nextDays[6]} ({nextDatesDays[6]})</th></tr></thead>
      <tbody>
    <tr>
     <td className="today">
    {todosD1.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR1.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD2.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR2.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD3.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR3.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD4.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR4.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD5.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR5.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD6.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR6.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD7.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR7.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td></tr></tbody></table>

    <br/>

    <table className="next-week">
      <thead><tr><th>{nextDays[0]}({nextDatesDays[7]})</th><th>{nextDays[1]}({nextDatesDays[8]})</th><th>{nextDays[2]} ({nextDatesDays[9]})</th><th>{nextDays[3]} ({nextDatesDays[10]})</th><th>{nextDays[4]} ({nextDatesDays[11]})</th><th>{nextDays[5]} ({nextDatesDays[12]})</th><th>{nextDays[6]} ({nextDatesDays[13]})</th></tr></thead>
      <tbody>
    <tr>
     <td className="next-week-day">
    {todosD8.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR8.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD9.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR9.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD10.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR10.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD11.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR11.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD12.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR12.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD13.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR13.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD14.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR14.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td></tr></tbody></table>

    <br/>

    <table className="next-week">
      <thead><tr><th>{nextDays[0]}({nextDatesDays[14]})</th><th>{nextDays[1]}({nextDatesDays[15]})</th><th>{nextDays[2]} ({nextDatesDays[16]})</th><th>{nextDays[3]} ({nextDatesDays[17]})</th><th>{nextDays[4]} ({nextDatesDays[18]})</th><th>{nextDays[5]} ({nextDatesDays[19]})</th><th>{nextDays[6]} ({nextDatesDays[20]})</th></tr></thead>
      <tbody>
    <tr>
     <td className="next-week-day">
    {todosD15.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR15.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD16.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR16.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD17.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR17.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD18.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR18.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD19.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR19.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD20.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR20.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD21.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR21.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td></tr></tbody></table>

    <br/>

    <table className="next-week">
      <thead><tr><th>{nextDays[0]}({nextDatesDays[21]})</th><th>{nextDays[1]}({nextDatesDays[22]})</th><th>{nextDays[2]} ({nextDatesDays[23]})</th><th>{nextDays[3]} ({nextDatesDays[24]})</th><th>{nextDays[4]} ({nextDatesDays[25]})</th><th>{nextDays[5]} ({nextDatesDays[26]})</th><th>{nextDays[6]} ({nextDatesDays[27]})</th></tr></thead>
      <tbody>
    <tr>
     <td className="next-week-day">
    {todosD22.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR22.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD23.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR23.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD24.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR24.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD25.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR25.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD26.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR26.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD27.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR27.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td><td className="next-week-day">
    {todosD28.map(todo =>  <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    {todosDR28.map(todo => <Todo key={todo.id} id={todo.id} timeCategory="date" text={todo.text}/>)}
    </td></tr></tbody></table>

    <br/><br/>
    <h2>Short-term:</h2>

    <table className="short-term"><thead><tr><th></th><th>Deadline</th></tr></thead>
      <tbody>{todosST.map(todo => <Todo key={todo.id} id={todo.id} text={todo.text} timeCategory="short-term" date={todo.deadline}/>)}</tbody></table>
     
     <br/><br/>

     <h2>Long-term:</h2>
      
    <table className="long-term">
       <tbody>
       {todosLT.map(todo =><Todo key={todo.id} id={todo.id} timeCategory="long-term" text={todo.text}/>)}
    </tbody>
    </table>
    </div>
  );
}

export default App;
