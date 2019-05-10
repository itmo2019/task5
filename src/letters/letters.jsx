import React,  { Component } from 'react';

import './letters.css';
import Header from '../header';
import Allright from '../allright';
import Letter from '../letter';
import Texts from '../texts'
export class Letters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLetters: {}
    };
  }

  onSelectChange(index, newValue) {
    this.setState(prevState => {
      const newSelectedLetters = prevState.selectedLetters;
      newSelectedLetters[index] = newValue;
      return {
        selectedLetters: newSelectedLetters
      };
    });
  }
   onSelectAll() {
    const allSelected = !this.props.isAllSelected
    const selectedLetters = {}
    if (allSelected===true) {
      this.props.letters.forEach(letter => {
        if (letter.display) {
          selectedLetters[letter.id] = true;
        }
      });
    } 
    else {
      this.props.letters.forEach(letter => {
        if (letter.display) {
          selectedLetters[letter.id] = false;
        }
      });
    }
    this.props.setNewAllSelected(allSelected);
    this.setState({selectedLetters})
    }
    onOpenClick (id, text) {
      console.log(text)
      var labelName = "show-letter" + id
      var z = document.getElementById(labelName)
      var y = z.nextElementSibling //крестик
      var x = y.nextElementSibling //текст письма
      if (document.getElementById(labelName).checked) {
        x.style.display = "block"
        y.style.display = "block"
      } else {
        x.style.display = "none"
        y.style.display = "none"
      }
      this.props.markAsRead(id)
    }
    deleteSelected = () => {
        this.props.markAsDel(this.state.selectedLetters)
        if (this.props.isAllSelected) this.props.setNewAllSelected(false)
        this.setState(state => {
          return {
            selectedLetters: {}
          };
        });
        this.props.resetDel()
    }
   render() {
    // console.log(this.props.toBeDeleted)
    if (this.props.toBeDeleted) this.deleteSelected()
    return (

      <div className="letters body__letters">
        <Header isAllSelected = {this.props.isAllSelected} 
        onSelectAll = {this.onSelectAll.bind(this)}
        onDelete={this.props.onDelete}/>
        <div> { this.props.letters.map (letter => {
                return (
                    <Texts  letter = {letter}
                      isSelected = {this.state.selectedLetters[letter.id]===true}
                      onSelectChange = {this.onSelectChange.bind(this)}
                      onOpenClick = {this.onOpenClick.bind(this)}/>
                  
            )})
          }
        </div>
        <div className = "ListOfLetters">
        {
            this.props.letters.map (letter => {
                return (
                    <Letter letter = {letter}
                      isSelected = {this.state.selectedLetters[letter.id]===true}
                      onSelectChange = {this.onSelectChange.bind(this)}
                      onOpenClick = {this.onOpenClick.bind(this)}/>
            )})
        }
        <div className = "letters__emptypart"></div>
        </div>
        <Allright />
      </div>
    );
   }
}

export default Letters;