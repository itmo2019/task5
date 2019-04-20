export default class Message {
    constructor(id) {
        this.sender = this.getRandomSender()
        this.theme = this.getRandomTheme()
        this.text = this.theme + ' ' + this.getRandomText()
        this.unread = true
        this.checked = false
        this.appearing = true
        this.removed = false
        this.ID = id
        this.date = new Date().toLocaleDateString('ru-RU', {day: 'numeric', month: 'short'})
    }

    getRandomSender() {
        var subjects=['I','You','Bob','John','Sue','Kate','The lizard people']
        return subjects[Math.round(Math.random()*(subjects.length-1))]
    }

    getRandomTheme() {
        return this.getRandomSentence()
    }

    getRandomText() {
        var numSentences = Math.round(Math.random() * 10)
        var res = ""
        for (var i = 0; i < numSentences; i++) res += this.getRandomSentence() + ' '
        return res
    }

    getRandomSentence() { // source: http://pastehtml.com/view/1c0gckz.html
        var subjects=['I','You','Bob','John','Sue','Kate','The lizard people']
        var verbs=['will search for','will get','will find','attained','found','will start interacting with','will accept','accepted']
        var objects=['Billy','an apple','a Triforce','the treasure','a sheet of paper']
        var endings=['.',', right?','.',', like I said.','.',', just like your momma!']
        return subjects[Math.round(Math.random()*(subjects.length-1))]+' '+verbs[Math.round(Math.random()*(verbs.length-1))]+' '
        +objects[Math.round(Math.random()*(objects.length-1))]+endings[Math.round(Math.random()*(endings.length-1))]
    }

}