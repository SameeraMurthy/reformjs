// window.Reform = {}
// window.Reform.handler = class {
//     constructor(element) {
//         this.element = element ?? "form[data-passform]"
//     }

//     handle (element, ) {

//     }
// }

$(document).ready(() => {
    $("form[data-passform]").submit(function(e) {
        e.preventDefault()
        $.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action") + "?" + $(this).serialize(),
            success: function (response) {
                location.href = this.url
            },
            error: function (xhr, status, err) {
                let errorText = `%cPassform Error%c\nStatus Code: %c${xhr.status} ${xhr.statusText}\n%cError: ${err}`
                let errorStyle = ["font-weight: bold; color: yellow", "color: orangered", "color: dodgerblue;font-weight: bold;", ""]
                console.error(errorText, ...errorStyle)
            }
        });
    })
})

