import React from 'react';

import './window.css';
import Menu from '../menu';
import NewBox from '../newBox';
import NewButton from '../newButton';
import Letters from '../letters';

import * as Markov from '../source/markov';

let letterIDCounter = 1
const authors = ["Александр Пушкин", "Петр Гринев", "Маша Миронова", "Емельян Пугачев", "Швабрин", "Савельич", "Капитан Миронов", "Капитанша Василиса Егоровна", "Иван Игнатьич", "Зурин", "Бопре", "Екатерина II", "Генерал Андрей Карпович", "Отец Петра Гринева", "Мать Петра Гринева"]
const MAXNUMOFLETTERS = 30
function genAuthtor() {
    const  i =  Math.random() * authors.length
        return authors[~~i]
}

class Window extends  React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		letters: [{
    			id: 1,
    			logo_authtor: 'Я',
    			authtor: "Яндекс.Паспорт",
    			textletter: ['Доступ к аккаунту востановлен'],
    			date: "6 авг",
    			isUnread: true,
          hidden: false,
          deleted: false,
          display: true
    		}],
    		isVisibale: false,
    		cntletters: 1,
    		isAllSelected: false,
        deleteSelected: false
    	};
    }
    componentDidMount() {
      var t1 =  Math.floor(Math.random() * (600000 - 10 + 1) + 10)
      console.log(t1)
      var p = setTimeout(this.runGeneration(), t1)
    }

    setNewAllSelected(isAllSelected) {
      this.setState({ isAllSelected });
      // console.log(this.state)
    }
    resetDel = () => {
      this.setState(state => {
        return {
          deleteSelected:false
        };
      });
    }
    setDelete = () => {
      this.setState(state => {
        return {
          deleteSelected:true
        };
      });
    }
    markAsRead = (id) => {
      console.log(id - 1)
      var newLetters = this.state.letters
      // newLetters[id - 1].isUnread = false
      newLetters.forEach(letter => {
        if (letter.id===id) {
          letter.isUnread = false;
        }
      });
      this.setState(state => {
        return{
          letters: newLetters
        }
      })
    } 
    markAsDel = (delIDs) => {
      console.log (this.state.letters)
      console.log(delIDs)
      var newLetters = this.state.letters
      var cntToDel = 0
      newLetters.forEach(letter => {
        if (delIDs[letter.id]) {
          letter.deleted = true;
          cntToDel++
        }
      });
      this.setState (state => {
        return {letters: newLetters
        }
      })
      console.log('hihihih')
      // console.log(this.state)
      const self = this;
      function animateImpl() {
        self.setState(state => {
        newLetters = state.letters
        if (state.letters.length >= 5) {
          /*добавь первое из списка спрятанных*/
          for (var i = 0; i < newLetters.length; i++) {
            if (newLetters[i].hidden) {
            newLetters[i].display = true
            newLetters[i].hidden = false
            cntToDel--
            if (cntToDel==0) break;
          }
          }
        }

        return {
          letters: newLetters.filter((letter) => !delIDs[letter.id])
        };
         });
        // self.setState({ hasAddAnimation: true });
      }
      this.animationTimeoutId = setTimeout(animateImpl, 300);
      
      console.log(this.state)
    }

    addNewLetter = () => {
      const date = "20 июн"
      const authtor = genAuthtor()
      const logo_authtor = authtor[0]
      const isUnread = true
      const deleted = false
      const added = false
      const display = true
      const textletter = Markov.generate()
      letterIDCounter++

      const hidden = false
      
      this.setState(state => {
        var newLetters = state.letters
        if (state.letters.length >= MAXNUMOFLETTERS) {
          newLetters[MAXNUMOFLETTERS - 1].display = false
          newLetters[MAXNUMOFLETTERS - 1].hidden = true
        }
        return {
          letters: [
            {
              id: letterIDCounter,
              logo_authtor: logo_authtor,
              authtor: authtor,
              textletter: textletter,
              date: date,
              isUnread: isUnread,
              hidden: hidden,
              display: display,
              deleted: deleted

            },
            ...newLetters
          ],
          // ...state.textletter
          // ]
        };
      });


      }
      
    runGeneration = () => {
        const t2 = Math.floor(Math.random() * (600000 - 300000 + 1) + 300000)
        console.log(t2)
        this.addNewLetter()
        var p = setTimeout(this.runGeneration, t2)
    }

    render() {
    	return (
    		<main>
          <NewButton  addNewLetter = {this.addNewLetter} 
             />
    			<NewBox />
    			<Menu />
          <Letters  letters={this.state.letters} 
            isAllSelected = {this.state.isAllSelected}
            selectedLetters = {this.state.selectedLetters}
            toBeDeleted = {this.state.deleteSelected}
            resetDel = {this.resetDel.bind(this)}
            markAsDel = {this.markAsDel}
            markAsRead = {this.markAsRead}
            setNewAllSelected = {this.setNewAllSelected.bind(this)}
              onDelete = {this.setDelete}
            />
    		</main>
    	);
    }


}

export default Window;