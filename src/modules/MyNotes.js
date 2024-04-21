import $ from "jquery"

class MyNotes {
  constructor() {
    this.events()
  }

  events() {
    $(".delete-note").on("click", this.deleteNote)
  }

  // Methods will go here
  deleteNote() {
    $.ajax({
        beforeSend: (xhr) => {
            xhr.setRequestHeader('X-WP-Nonce', universityData.nonce)
        },
        url: universityDate.root_url + 'wp-json/wp/v2/note/137',
        type: 'DELETE',
        success: () => {
            console.log("Congrats")
            console.log(response)
        },
        error: () => {
            console.log("sorry")
            console.log(response)
        }
    })
  }
}

export default MyNotes
