function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}

$(document).ready(() => {
    let firstPage = $("#first-page");
    let secondPage = $("#second-page");

    let inputUrl = $("#input-url")
    let resultUrl = $("#result-url");

    let buttonCreate = $("#button-create");
    let buttonCopy = $("#button-copy");
    let buttonReturn = $("#button-return");

    buttonCreate.on("click", event => {
        firstPage.hide();
        fetch("/short", {
            method: "POST",
            body: JSON.stringify({url: inputUrl.val()}),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(async (result) => {
                let short = await result.text()
                let fullLink = `htttp://localhost:9877/${short}`
                resultUrl.prop("href", fullLink)
                resultUrl.text(fullLink)
                secondPage.show();
            })
            .catch(error => {
                console.log(error)
                firstPage.show()
            })
    })

    buttonCopy.on("click", event => {
        let link = resultUrl.prop("href");
        copyToClipboard(link);
        alert(`"${link}" copy`);
    })

    buttonReturn.on("click", event => {
        inputUrl.val("");
        secondPage.hide();
        firstPage.show();
    })
})